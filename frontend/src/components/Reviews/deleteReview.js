// This function deletes a review by its ID
async function deleteReview(id) {
	// Retrieve the token from local storage
	const token = localStorage.getItem('token');

	// Send a DELETE request to the server
	const response = await fetch(`http://localhost:3001/deletereview?id=${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: token, // Include the token in the Authorization header
		},
	});

	// If the response is not OK, throw an error
	if (!response.ok) {
		throw new Error(`Failed to delete trip: ${response.statusText}`);
	}

	// Parse the response as JSON
	const data = await response.json();
	return data; // Return the parsed data
}

export { deleteReview };
