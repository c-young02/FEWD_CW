async function deleteTrip(id) {
	const token = localStorage.getItem('token');
	const username = localStorage.getItem('username');

	const response = await fetch(
		`http://localhost:3001/deletetrip?username=${username}&id=${id}`,
		{
			method: 'DELETE',
			headers: {
				Authorization: token,
			},
		}
	);

	if (!response.ok) {
		throw new Error(`Failed to delete trip: ${response.statusText}`);
	}

	const data = await response.json();
	return data;
}

export { deleteTrip };
