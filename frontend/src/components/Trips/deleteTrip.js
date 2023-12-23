const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// deleteTrip is an asynchronous function that deletes a trip
async function deleteTrip(id) {
	// Retrieve the token and username from local storage
	const token = localStorage.getItem('token');
	const username = localStorage.getItem('username');

	// Check if token and username exist
	// If not, throw an error indicating the user is not authenticated
	if (!token || !username) {
		throw new Error('User is not authenticated');
	}

	// Send a DELETE request to the server to delete the trip
	const response = await fetch(
		`${API_BASE_URL}/deletetrip?username=${username}&id=${id}`,
		{
			method: 'DELETE',
			headers: {
				Authorization: token, // Include the token in the request headers for authorization
			},
		}
	);

	// If the response is not OK (status code is not in the range 200-299), throw an error
	if (!response.ok) {
		throw new Error(`Failed to delete trip: ${response.statusText}`);
	}

	// Parse the response as JSON and return it
	const data = await response.json();
	return data;
}

// Export deleteTrip as a named export
export { deleteTrip };
