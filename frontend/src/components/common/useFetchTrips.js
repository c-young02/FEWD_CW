import { useEffect, useState, useCallback } from 'react';

const useFetchTrips = () => {
	const [trips, setTrips] = useState([]);
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);

	const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
	const token = localStorage.getItem('token');

	const getHostelLatLon = async (hostelName) => {
		const response = await fetch(
			`${baseUrl}/gethostel?name=${encodeURIComponent(hostelName)}`
		);
		const hostel = await response.json();

		if (hostel && hostel.location) {
			const {
				location: { lat, long },
			} = hostel;
			return { lat, long };
		} else {
			throw new Error(`No hostel found with name ${hostelName}`);
		}
	};

	const fetchTrips = useCallback(async () => {
		const username = localStorage.getItem('username');

		try {
			const response = await fetch(`${baseUrl}/trips?username=${username}`, {
				headers: {
					Authorization: token,
				},
			});

			if (response.ok) {
				const data = await response.json();

				const userTrips =
					data.find((user) => user.username === username)?.trips || [];

				for (let trip of userTrips) {
					for (let stage of trip.stages) {
						const { lat, long } = await getHostelLatLon(stage.hostel);
						stage.location = { lat, long };
					}
				}

				setTrips(userTrips);
				setStatus('fetched');
			}
		} catch (error) {
			console.error('Error:', error);
			setStatus('error');
			setError(error);
		}
	}, [baseUrl, token]);

	useEffect(() => {
		fetchTrips();
	}, [fetchTrips]);

	return { status, trips, error, refetch: fetchTrips };
};

export default useFetchTrips;
