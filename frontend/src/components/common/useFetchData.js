import { useEffect, useState, useCallback } from 'react';

const useFetchData = () => {
	const [status, setStatus] = useState('idle');
	const [hostels, setHostels] = useState([]);
	const [trips, setTrips] = useState([]);
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
			}
		} catch (error) {
			console.error('Error:', error);
			setStatus('error');
			setError(error);
		}
	}, [baseUrl, token]);

	const fetchData = useCallback(() => {
		setStatus('loading');
		setError(null);

		fetch(`${baseUrl}/hostels`)
			.then((response) => response.json())
			.then((incomingData) => {
				setHostels(incomingData);
				setStatus('fetched');
			})
			.catch((err) => {
				console.error(err);
				setStatus('error');
				setError(err);
			});

		fetchTrips();
	}, [baseUrl, fetchTrips]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { status, hostels, trips, error, refetch: fetchTrips };
};

export default useFetchData;
