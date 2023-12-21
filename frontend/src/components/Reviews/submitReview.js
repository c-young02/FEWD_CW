export default function useFormSubmission(
	hostelId,
	reviewText,
	rating,
	setMessage
) {
	const handleSubmitReview = async (event) => {
		event.preventDefault();

		const username = localStorage.getItem('username');
		const token = localStorage.getItem('token');

		if (!username) {
			setMessage('No username found. Please log in.');
			return;
		}

		const url = 'http://localhost:3001/createReview';
		const method = 'PUT';

		try {
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

			if (response.ok) {
				setMessage('Review created successfully!');
			} else {
				setMessage('Failed to create review.');
			}
		} catch (error) {
			console.error('Error:', error);
			setMessage('An error occurred.');
		}
	};

	return { handleSubmitReview };
}
