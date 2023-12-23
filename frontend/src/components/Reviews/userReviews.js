// useFetchUserReviews is a custom hook for fetching user reviews
export default function useFetchUserReviews(setReviews) {
	// fetchUserReviews is an asynchronous function that fetches user reviews
	const fetchUserReviews = async () => {
		// Retrieve the username and token from local storage
		const username = localStorage.getItem('username');
		const token = localStorage.getItem('token');

		// URL and method for the fetch request
		const url = `http://localhost:3001/getReviews?username=${username}`;
		const method = 'GET';

		try {
			// Send a GET request to the server to fetch user reviews
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
			});

			// If the response is OK, parse the response as JSON and set the reviews
			// Otherwise, do nothing
			if (response.ok) {
				const data = await response.json();
				setReviews(data);
			} else {
			}
		} catch (error) {
			// Log the error
			console.error('Error:', error);
		}
	};

	// Return an object with the fetchUserReviews function
	return { fetchUserReviews };
}
