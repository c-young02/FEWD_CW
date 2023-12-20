export default function useFormSubmission(
	initialTitle,
	initialStages,
	validateForm,
	setMessage
) {
	const handleSubmit = async (event) => {
		const token = localStorage.getItem('token');

		event.preventDefault();

		// Validate the form data
		if (!validateForm()) {
			return;
		}

		const username = localStorage.getItem('username');
		if (!username) {
			setMessage('No username found. Please log in.');
			return;
		}
		try {
			const response = await fetch('http://localhost:3001/addTrip', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify({
					title: initialTitle,
					stages: initialStages,
					username,
				}),
			});
			if (response.ok) {
				setMessage('Trip created successfully!'); // Update the message if the request was successful
			} else {
				setMessage('Failed to create trip.'); // Update the message if the request failed
			}
		} catch (error) {
			console.error('Error:', error);
			setMessage('An error occurred.'); // Update the message if an error occurred
		}
	};

	return { handleSubmit };
}
