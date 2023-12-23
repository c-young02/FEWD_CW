import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import useModal from '../common/useModal';
import AuthForm from './AuthForm';
import AuthToggleButton from './AuthToggleButton';
import UserDropdown from './UserDropdown';
import { handleLogin } from './Login';
import { handleRegistration } from './register';
import { handleSuccessfulLogin, handleLogout } from './auth';

const AuthModal = () => {
	// Retrieve the username from local storage if it exists
	const getInitialUsername = () => localStorage.getItem('username') || '';

	// State variables for user credentials and status
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loggedInUser, setLoggedInUser] = useState(getInitialUsername());

	// State variables for modal and login/registration form
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState('');

	// Custom hook to control modal visibility
	const { show, handleClose, handleShow } = useModal();

	// Reset form and error when modal is closed
	useEffect(() => {
		if (!show) {
			setUsername('');
			setPassword('');
			setError('');
		}
	}, [show]);

	// Handle form submission for login or registration
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
			// Update logged in user after successful login/registration
			setLoggedInUser(localStorage.getItem('username'));
			// Only close the modal if login/registration was successful
			if (localStorage.getItem('username')) {
				handleClose();
			}
		} catch (error) {
			setError('An unexpected error occurred. Please try again.');
		}
	};

	return (
		<>
			{loggedInUser ? (
				// Show user dropdown if user is logged in
				<UserDropdown
					username={loggedInUser}
					handleLogout={() => handleLogout(setLoggedInUser, handleClose)}
				/>
			) : (
				// Show login and sign up buttons if user is not logged in
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
			{/* Modal for login/registration form */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{isLogin ? 'Log In' : 'Sign Up'}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{error && <Alert variant="danger">{error}</Alert>}{' '}
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
