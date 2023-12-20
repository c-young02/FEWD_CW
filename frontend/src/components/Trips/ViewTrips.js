import React, { useState } from 'react';
import SearchInput from '../common/SearchInput';
import Trip from './Trip';
import useFetchData from '../common/useFetchData';
import TripRoute from './TripRoute';

const ViewTrips = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { trips, error } = useFetchData();
	const [selectedTrip, setSelectedTrip] = useState(null);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const filteredTrips = trips.filter(
		(trip) =>
			trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			trip.stages.some((stage) =>
				stage.hostel.toLowerCase().includes(searchTerm.toLowerCase())
			)
	);

	return (
		<div>
			<h1>Your Trips</h1>
			<SearchInput value={searchTerm} onChange={setSearchTerm} />

			{filteredTrips.map((trip, index) => (
				<Trip
					key={index}
					trip={trip}
					onEdit={() => console.log(`Edit trip ${trip.id}`)}
					onDelete={() => console.log(`Delete trip ${trip.id}`)}
				/>
			))}

			<TripRoute
				trips={trips}
				selectedTrip={selectedTrip}
				setSelectedTrip={setSelectedTrip}
			/>
		</div>
	);
};

export default ViewTrips;
