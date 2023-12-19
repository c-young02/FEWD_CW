import { registerUser, loginUser } from './api';

export const handleRegistration = async (
	username,
	password,
	handleSuccessfulLogin,
	setError
) => {
	const response = await registerUser({ username, password });
	if (response.success) {
		console.log('User registered successfully');
		const loginResponse = await loginUser({ username, password });
		if (loginResponse.success) {
			handleSuccessfulLogin(loginResponse, username);
		} else {
			setError(
				loginResponse.msg ||
					'An error occurred while logging in. Please try again.'
			);
		}
	} else {
		setError(
			response.msg || 'An error occurred while signing up. Please try again.'
		);
	}
};
