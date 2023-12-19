import React, { useEffect, useState } from 'react';

const ViewTrips = () => {
	const [trips, setTrips] = useState([]);

	useEffect(() => {
		const fetchTrips = async () => {
			const username = localStorage.getItem('username');
			console.log('Username:', username); // Log the username

			try {
				const response = await fetch('http://localhost:3001/trips', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ username }),
				});
				console.log('Response:', response); // Log the response

				if (response.ok) {
					const data = await response.json();
					console.log('Data:', data); // Log the data
					setTrips(data);
				} else {
					console.error('Failed to fetch trips.');
				}
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchTrips();
	}, []);

	console.log('Trips:', trips); // Log the trips

	return (
		<div>
			<h1>Your Trips</h1>
			{trips.map((trip, index) => (
				<h2 key={index}>{trip.title}</h2>
			))}
		</div>
	);
};

export default ViewTrips;
