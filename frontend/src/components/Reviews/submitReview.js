export default function useFormSubmission(
	hostel,
	reviewText,
	rating,
	setMessage
) {
	const handleSubmitReview = async (event) => {
		event.preventDefault();
		console.log('useFormSubmission is called');

		const username = localStorage.getItem('username');
		const token = localStorage.getItem('token');

		console.log('Username:', username); // Log the username

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
					hostel,
					username,
					reviewText,
					rating,
				}),
			});

			console.log('Response:', response); // Log the response

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
