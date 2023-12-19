import { loginUser } from './api';

export const handleLogin = async (
	username,
	password,
	handleSuccessfulLogin,
	setError
) => {
	const response = await loginUser({ username, password });
	if (response.success) {
		handleSuccessfulLogin(response, username);
	} else {
		setError(
			response.msg || 'Incorrect username or password. Please try again.'
		);
	}
};
