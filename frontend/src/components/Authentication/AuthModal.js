import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import useModal from '../common/useModal';
import AuthForm from './AuthForm';
import AuthToggleButton from './AuthToggleButton';
import UserDropdown from './UserDropdown';
import { handleLogin } from './Login';
import { handleRegistration } from './register';
import { handleSuccessfulLogin, handleLogout } from './auth';

const AuthModal = () => {
	const getInitialUsername = () => localStorage.getItem('username') || '';

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loggedInUser, setLoggedInUser] = useState(getInitialUsername());

	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState('');

	const { show, handleClose, handleShow } = useModal();

	// Clear the fields when the modal is closed
	useEffect(() => {
		if (!show) {
			setUsername('');
			setPassword('');
			setError('');
		}
	}, [show]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			if (isLogin) {
				await handleLogin(username, password, handleSuccessfulLogin, setError);
			} else {
				await handleRegistration(
					username,
					password,
					handleSuccessfulLogin,
					setError
				);
			}
			setLoggedInUser(localStorage.getItem('username'));
			handleClose();
		} catch (error) {
			setError('An unexpected error occurred. Please try again.');
		}
	};

	return (
		<>
			{loggedInUser ? (
				<UserDropdown
					username={loggedInUser}
					handleLogout={() => handleLogout(setLoggedInUser, handleClose)}
				/>
			) : (
				<>
					<Button
						variant="outline-primary mx-2"
						onClick={() => {
							handleShow();
							setIsLogin(true);
						}}
					>
						Log In
					</Button>
					<Button
						variant="outline-light"
						onClick={() => {
							handleShow();
							setIsLogin(false);
						}}
					>
						Sign Up
					</Button>
				</>
			)}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{isLogin ? 'Log In' : 'Sign Up'}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{error && <p className="text-danger">{error}</p>}
					<AuthForm
						isLogin={isLogin}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
						handleSubmit={handleSubmit}
					/>
					<AuthToggleButton isLogin={isLogin} setIsLogin={setIsLogin} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default AuthModal;
