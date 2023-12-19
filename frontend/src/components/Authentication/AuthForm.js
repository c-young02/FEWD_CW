import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AuthForm = ({
	isLogin,
	username,
	setUsername,
	password,
	setPassword,
	handleSubmit,
}) => (
	<Form onSubmit={handleSubmit}>
		<Form.Group className="mb-3">
			<Form.Label>Username</Form.Label>
			<Form.Control
				type="text"
				placeholder="Enter username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
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
			/>
		</Form.Group>

		<Button variant="primary" type="submit">
			{isLogin ? 'Log In' : 'Sign Up'}
		</Button>
	</Form>
);
export default AuthForm;
