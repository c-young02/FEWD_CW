async function fetchTrip(id) {
	const token = localStorage.getItem('token');
	const username = localStorage.getItem('username');

	const response = await fetch(
		`http://localhost:3001/trip?username=${username}&id=${id}`,
		{
			method: 'GET',
			headers: {
				Authorization: token,
			},
		}
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch trip: ${response.statusText}`);
	}

	const data = await response.json();
	const trip = data.trip;
	return trip;
}

export { fetchTrip };
