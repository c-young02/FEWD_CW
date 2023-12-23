// This function handles successful login by storing the token and username in local storage
export const handleSuccessfulLogin = (response, username) => {
	if (!response || !response.token) {
		// If the response or token is missing, return an error
		return { error: 'Invalid response or token' };
	}

	try {
		// Store the token and username in local storage
		localStorage.setItem('token', response.token);
		localStorage.setItem('username', username);
		// If successful, return a success status
		return { success: true };
	} catch (error) {
		// If an error occurs, return an error status
		return { error: 'Failed to save token or username in local storage' };
	}
};

// This function handles logout by clearing local storage and resetting the logged in user
export const handleLogout = (setLoggedInUser, handleClose) => {
	// Clear local storage
	localStorage.clear();
	// Reset the logged in user
	setLoggedInUser(null);
	// Close the modal
	handleClose();
};
