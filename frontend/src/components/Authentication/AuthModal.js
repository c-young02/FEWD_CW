import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import useModal from '../common/useModal';
import UserDropdown from './UserDropdown';
import { handleLogin } from './Login';
import { handleRegistration } from './register';
import { handleSuccessfulLogin, handleLogout } from './auth';
import LoginSignupButton from './LoginSignupButton';
import AuthModalBody from './AuthModalBody';

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
				<UserDropdown
					username={loggedInUser}
					handleLogout={() => handleLogout(setLoggedInUser, handleClose)}
				/>
			) : (
				<LoginSignupButton handleShow={handleShow} setIsLogin={setIsLogin} />
			)}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{isLogin ? 'Log In' : 'Sign Up'}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AuthModalBody
						isLogin={isLogin}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
						handleSubmit={handleSubmit}
						setIsLogin={setIsLogin}
						error={error}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default AuthModal;
