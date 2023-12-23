import React from 'react';
import { Button } from 'react-bootstrap';

// AuthToggleButton is a functional component that renders a button to toggle between login and registration forms
const AuthToggleButton = ({ isLogin, setIsLogin }) => {
	// Function to toggle the isLogin state
	const toggleIsLogin = () => setIsLogin(!isLogin);

	return (
		// Button text changes based on isLogin value
		<Button className="p-0" variant="link" onClick={toggleIsLogin}>
			{isLogin ? 'Need to sign up?' : 'Already have an account?'}
		</Button>
	);
};

export default AuthToggleButton;
