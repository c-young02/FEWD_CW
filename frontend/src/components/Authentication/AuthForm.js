import React from 'react';
import { Button, Form } from 'react-bootstrap';

// AuthForm is a functional component that renders a form for user authentication
const AuthForm = ({
	isLogin, // Boolean indicating whether the form is for login or registration
	username, // Username input value
	setUsername, // Function to update username value
	password, // Password input value
	setPassword, // Function to update password value
	handleSubmit, // Function to handle form submission
}) => (
	<Form onSubmit={handleSubmit}>
		<Form.Group className="mb-3">
			<Form.Label>Username</Form.Label>
			<Form.Control
				type="text"
				placeholder="Enter username"
				value={username} // The value of the input field is bound to the username state
				onChange={(e) => setUsername(e.target.value)} // Updates username state on input change
				required
				autocomplete="username"
			/>
		</Form.Group>

		<Form.Group className="mb-3">
			<Form.Label>Password</Form.Label>
			<Form.Control
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
				autocomplete="current-password"
			/>
		</Form.Group>
		<Button variant="primary" type="submit">
			{/* The button text changes depending on whether the form is for login or registration */}
			{isLogin ? 'Log In' : 'Sign Up'}
		</Button>
	</Form>
);
export default AuthForm;
