export default function useFormSubmission(
	initialTitle,
	initialStages,
	validateForm,
	setMessage,
	initialData
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

		const url = initialData
			? 'http://localhost:3001/updateTrip'
			: 'http://localhost:3001/addTrip';
		const method = initialData ? 'PUT' : 'POST';

		try {
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify({
					title: initialTitle,
					stages: initialStages,
					username,
					id: initialData ? initialData.id : undefined,
				}),
			});
			if (response.ok) {
				setMessage(
					initialData
						? 'Trip updated successfully!'
						: 'Trip created successfully!'
				);
			} else {
				setMessage(
					initialData ? 'Failed to update trip.' : 'Failed to create trip.'
				);
			}
		} catch (error) {
			console.error('Error:', error);
			setMessage('An error occurred.');
		}
	};

	return { handleSubmit };
}
