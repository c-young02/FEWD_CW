import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Login = () => {
	const [show, setShow] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle sign up logic here
		console.log(`Username: ${username}, Password: ${password}`);
		handleClose();
	};

	return (
		<>
			<Button variant="outline-primary" className="mx-2" onClick={handleShow}>
				Login
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
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
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Login;
