import React, { useState } from 'react';
import SearchInput from '../common/SearchInput';
import Trip from './Trip';
import useFetchData from '../common/useFetchData';
import TripRoute from './TripRoute';

const ViewTrips = ({ setSelectedTrip, selectedTrip }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const { trips, error } = useFetchData();

	const handleSelectTrip = (trip) => {
		console.log('Selected Trip:', trip);
		setSelectedTrip(trip);
	};

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
			<SearchInput value={searchTerm} onChange={setSearchTerm} />
			{filteredTrips.map((trip, index) => (
				<Trip
					key={index}
					trip={trip}
					onEdit={() => console.log(`Edit trip ${trip.id}`)}
					onDelete={() => console.log(`Delete trip ${trip.id}`)}
					onSelect={() => handleSelectTrip(trip)}
				/>
			))}
			<TripRoute trips={trips} setSelectedTrip={setSelectedTrip} />
			{selectedTrip && selectedTrip.stages.length <= 1 && (
				<p>Selected trip is too short to plot route.</p>
			)}
		</div>
	);
};

export default ViewTrips;
