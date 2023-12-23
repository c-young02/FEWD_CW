import { registerUser, loginUser } from './api';
import validateCredentials from './validateCredentials';

// This function handles the registration process
export const handleRegistration = async (
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

	// Send a registration request to the server
	const response = await registerUser({ username, password });
	if (response.success) {
		// If the registration is successful attempt to log the user in
		const loginResponse = await loginUser({ username, password });
		if (loginResponse.success) {
			// If the login is successful handle the successful login
			handleSuccessfulLogin(loginResponse, username);
		} else {
			// If the login fails, set the error message
			setError(
				loginResponse.msg ||
					'An error occurred while logging in. Please try again.'
			);
		}
	} else {
		// If the registration fails, set the error message
		setError(
			response.msg || 'An error occurred while signing up. Please try again.'
		);
	}
};
