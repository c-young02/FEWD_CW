export const handleSuccessfulLogin = (response, username) => {
	if (!response || !response.token) {
		return { error: 'Invalid response or token' };
	}

	try {
		localStorage.setItem('token', response.token);
		localStorage.setItem('username', username);
		return { success: true };
	} catch (error) {
		return { error: 'Failed to save token or username in local storage' };
	}
};

export const handleLogout = (setLoggedInUser, handleClose) => {
	localStorage.clear();
	setLoggedInUser(null);
	handleClose();
};
