import React, { useEffect, useState } from 'react';

const ViewTrips = () => {
	const [trips, setTrips] = useState([]);

	useEffect(() => {
		const fetchTrips = async () => {
			const username = localStorage.getItem('username');

			try {
				const response = await fetch(
					`http://localhost:3001/trips?username=${username}`
				);

				if (response.ok) {
					const data = await response.json();

					const userTrips =
						data.find((user) => user.username === username)?.trips || [];

					setTrips(userTrips);
				}
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchTrips();
	}, []);

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
