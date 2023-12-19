import React from 'react';
import { Button } from 'react-bootstrap';

const AuthToggleButton = ({ isLogin, setIsLogin }) => {
	const toggleIsLogin = () => setIsLogin(!isLogin);

	return (
		<Button className="p-0" variant="link" onClick={toggleIsLogin}>
			{isLogin ? 'Need to sign up?' : 'Already have an account?'}
		</Button>
	);
};

export default AuthToggleButton;
