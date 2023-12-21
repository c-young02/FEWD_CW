async function deleteReview(id) {
	const token = localStorage.getItem('token');

	const response = await fetch(`http://localhost:3001/deletereview?id=${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: token,
		},
	});

	if (!response.ok) {
		throw new Error(`Failed to delete trip: ${response.statusText}`);
	}

	const data = await response.json();
	return data;
}

export { deleteReview };
