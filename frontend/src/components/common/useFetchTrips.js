import { useEffect, useState, useCallback } from 'react';

// Custom hook to fetch trips data
const useFetchTrips = () => {
	const [trips, setTrips] = useState([]);
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);

	const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001'; // Base URL for API
	const token = localStorage.getItem('token'); // Retrieve token from local storage

	// Function to get latitude and longitude of a hostel
	const getHostelLatLon = useCallback(
		async (hostelName) => {
			// Fetch hostel data from API
			const response = await fetch(
				`${baseUrl}/gethostel?name=${encodeURIComponent(hostelName)}`
			);
			const hostel = await response.json();

			// If hostel data is found, return latitude and longitude
			if (hostel && hostel.location) {
				const {
					location: { lat, long },
				} = hostel;
				return { lat, long };
			} else {
				throw new Error(`No hostel found with name ${hostelName}`);
			}
		},
		[baseUrl]
	);

	// Function to fetch trips data from API
	const fetchTrips = useCallback(async () => {
		const username = localStorage.getItem('username'); // Retrieve username from local storage

		try {
			// Fetch trips data from API
			const response = await fetch(`${baseUrl}/trips?username=${username}`, {
				headers: {
					Authorization: token,
				},
			});

			if (response.ok) {
				const data = await response.json();

				// Find the trips of the current user
				const userTrips =
					data.find((user) => user.username === username)?.trips || [];

				// For each trip, get the latitude and longitude of the hostel
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
	}, [baseUrl, token, getHostelLatLon]);

	// Effect hook to call fetchTrips on component mount
	useEffect(() => {
		fetchTrips();
	}, [fetchTrips]);

	return { status, trips, error, refetch: fetchTrips };
};

export default useFetchTrips;
