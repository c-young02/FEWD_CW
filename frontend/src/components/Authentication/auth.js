export const handleSuccessfulLogin = (response, username) => {
	try {
		localStorage.setItem('token', response.token); // Save the token in local storage
		localStorage.setItem('username', username); // Save the username in local storage
		return true;
	} catch (error) {
		console.error('Failed to save token or username in local storage:', error);
		return false;
	}
};

export const handleLogout = (setLoggedInUser, handleClose) => {
	localStorage.removeItem('username');
	localStorage.removeItem('token');
	setLoggedInUser(null);
	handleClose();
};
