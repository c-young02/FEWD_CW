// AuthModalBody.js
import React from 'react';
import { Alert } from 'react-bootstrap';
import AuthForm from './AuthForm';
import AuthToggleButton from './AuthToggleButton';

const AuthModalBody = ({
	isLogin,
	username,
	setUsername,
	password,
	setPassword,
	handleSubmit,
	setIsLogin,
	error,
}) => (
	<>
		{error && <Alert variant="danger">{error}</Alert>}
		<AuthForm
			isLogin={isLogin}
			username={username}
			setUsername={setUsername}
			password={password}
			setPassword={setPassword}
			handleSubmit={handleSubmit}
		/>
		<AuthToggleButton isLogin={isLogin} setIsLogin={setIsLogin} />
	</>
);

export default AuthModalBody;
