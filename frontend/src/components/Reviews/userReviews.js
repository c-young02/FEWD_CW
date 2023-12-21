export default function useFetchUserReviews(setReviews) {
	const fetchUserReviews = async () => {
		const username = localStorage.getItem('username');
		const token = localStorage.getItem('token');

		const url = `http://localhost:3001/getReviews?username=${username}`;
		const method = 'GET';

		try {
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
			});

			if (response.ok) {
				const data = await response.json();
				console.log('Fetched data:', data); // Log the fetched data
				setReviews(data);
			} else {
				console.log('Failed to fetch reviews. Response:', response.status);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return { fetchUserReviews };
}
