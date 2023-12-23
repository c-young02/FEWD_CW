const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// This function sends a POST request to the login endpoint with the user's credentials
export const loginUser = async (credentials) => {
	return fetch(`${API_BASE_URL}/login`, {
		method: 'POST', // Specify the request method
		headers: {
			'Content-Type': 'application/json', // Set the content type of the request body
		},
		body: JSON.stringify(credentials), // Convert the credentials object to a JSON string
	}).then((data) => data.json()); // Parse the response data as JSON
};

// This function sends a POST request to the register endpoint with the user's credentials
export const registerUser = async (credentials) => {
	return fetch(`${API_BASE_URL}/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
};
