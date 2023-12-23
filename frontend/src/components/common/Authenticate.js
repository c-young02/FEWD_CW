const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// This function checks if the user is authenticated
export function authenticate(setIsLoggedIn) {
	// Retrieve the token from local storage
	const token = localStorage.getItem('token');

	// Send a request to the server to authenticate the user
	fetch(`${API_BASE_URL}/authenticate`, {
		headers: {
			Authorization: token, // Include the token in the request headers
		},
	})
		.then((response) => {
			if (response.ok) {
				// If the response is OK, the user is authenticated
				setIsLoggedIn(true);
			} else {
				// If the response is not OK, the user is not authenticated
				setIsLoggedIn(false);
				throw new Error('Not logged in'); // Throw an error
			}
		})
		.catch(() => {
			// If the request fails, the user is not authenticated
			setIsLoggedIn(false);
		});
}
