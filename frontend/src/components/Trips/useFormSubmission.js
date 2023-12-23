const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export default function useFormSubmission(
	initialTitle,
	initialStages,
	validateForm,
	setMessage,
	initialData,
	setView
) {
	const handleSubmit = async (event) => {
		const token = localStorage.getItem('token'); // Retrieve the token from local storage
		event.preventDefault();

		// Validate the form data
		if (!validateForm()) {
			return;
		}

		const username = localStorage.getItem('username'); // Retrieve the username from local storage
		if (!username) {
			setMessage('No username found. Please log in.'); // If no username, set an error message
			return;
		}

		// Determine the URL and method based on whether initialData is provided
		const url = initialData
			? `${API_BASE_URL}/updateTrip`
			: `${API_BASE_URL}/addTrip`;
		const method = initialData ? 'PUT' : 'POST';

		try {
			// Make the fetch request
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
				// If the response is ok, set a success message and switch to the 'view' view
				setMessage(
					initialData
						? 'Trip updated successfully!'
						: 'Trip created successfully!'
				);
				setView('view');
			} else {
				// If the response is not ok, set an error message
				setMessage(
					initialData ? 'Failed to update trip.' : 'Failed to create trip.'
				);
			}
		} catch (error) {
			// If an error occurs, log it and set an error message
			console.error('Error:', error);
			setMessage('An error occurred.');
		}
	};

	return { handleSubmit };
}
