import { useEffect, useState, useCallback } from 'react';

const useFetchData = () => {
	const [status, setStatus] = useState('idle');
	const [hostels, setHostels] = useState([]);
	const [trips, setTrips] = useState([]);
	const [error, setError] = useState(null);

	const fetchData = useCallback(() => {
		setStatus('loading');
		setError(null);

		const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

		const getHostelLatLon = async (hostelName) => {
			const response = await fetch(
				`${baseUrl}/gethostel?name=${encodeURIComponent(hostelName)}`
			);
			const hostel = await response.json();

			if (hostel && hostel.location) {
				const {
					location: { lat, long },
				} = hostel;
				console.log(`Latitude: ${lat}, Longitude: ${long}`); // Log the latitude and longitude
				return { lat, long };
			} else {
				throw new Error(`No hostel found with name ${hostelName}`);
			}
		};

		const fetchTrips = async () => {
			const username = localStorage.getItem('username');

			try {
				const response = await fetch(`${baseUrl}/trips?username=${username}`);

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
		};

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
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { status, hostels, trips, error };
};

export default useFetchData;
