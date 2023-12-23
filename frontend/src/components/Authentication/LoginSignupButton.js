import React from 'react';
import { Button } from 'react-bootstrap';

const LoginSignupButtons = ({ handleShow, setIsLogin }) => (
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
);

export default LoginSignupButtons;
