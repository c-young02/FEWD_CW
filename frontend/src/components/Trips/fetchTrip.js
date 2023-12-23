// fetchTrip is an asynchronous function that fetches a trip
async function fetchTrip(id) {
	// Retrieve the token and username from local storage
	const token = localStorage.getItem('token');
	const username = localStorage.getItem('username');

	// Send a GET request to the server to fetch the trip
	const response = await fetch(
		`http://localhost:3001/trip?username=${username}&id=${id}`,
		{
			method: 'GET',
			headers: {
				Authorization: token, // Include the token in the request headers for authorization
			},
		}
	);

	// If the response is not OK (status code is not in the range 200-299), throw an error
	if (!response.ok) {
		throw new Error(`Failed to fetch trip: ${response.statusText}`);
	}

	// Parse the response as JSON and extract the trip data
	const data = await response.json();
	const trip = data.trip;
	return trip; // Return the trip data
}

// Export fetchTrip as a named export
export { fetchTrip };
