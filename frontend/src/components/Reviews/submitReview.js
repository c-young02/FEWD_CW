const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// useFormSubmission is a custom hook for handling the submission of a review form
export default function useFormSubmission(
	hostelId,
	reviewText,
	rating,
	setMessage
) {
	// handleSubmitReview is an asynchronous function that handles the submission of the review form
	const handleSubmitReview = async (event) => {
		event.preventDefault();

		// Retrieve the username and token from local storage
		const username = localStorage.getItem('username');
		const token = localStorage.getItem('token');

		// If there is no username, set the message and return
		if (!username) {
			setMessage('No username found. Please log in.');
			return;
		}

		// URL and method for the fetch request
		const url = `${API_BASE_URL}/createReview`;
		const method = 'PUT';

		try {
			// Send a PUT request to the server to create a review
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify({
					hostelId,
					username,
					reviewText,
					rating,
				}),
			});

			// If the response is OK, set the message to indicate that the review was created successfully
			// Otherwise, set the message to indicate that the creation of the review failed
			if (response.ok) {
				setMessage('Review created successfully!');
			} else {
				setMessage('Failed to create review.');
			}
		} catch (error) {
			// Log the error and set the message to indicate that an error occurred
			console.error('Error:', error);
			setMessage('An error occurred.');
		}
	};

	// Return an object with the handleSubmitReview function
	return { handleSubmitReview };
}
