export const loginUser = async (credentials) => {
	return fetch('http://localhost:3001/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
};

export const registerUser = async (credentials) => {
	return fetch('http://localhost:3001/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
};
