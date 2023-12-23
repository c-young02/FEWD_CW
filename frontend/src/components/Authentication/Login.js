import { loginUser } from './api';
import validateCredentials from './validateCredentials';

// This function handles the login process
export const handleLogin = async (
	username,
	password,
	handleSuccessfulLogin,
	setError
) => {
	// Validate the provided credentials
	const validationError = validateCredentials(username, password);
	if (validationError) {
		// If there's a validation error, set the error message and exit the function
		setError(validationError);
		return;
	}

	// Send a login request to the server
	const response = await loginUser({ username, password });
	if (response.success) {
		// If the login is successful, handle the successful login
		handleSuccessfulLogin(response, username);
	} else {
		// If the login fails, set the error message
		setError(
			response.msg || 'Incorrect username or password. Please try again.'
		);
	}
};
