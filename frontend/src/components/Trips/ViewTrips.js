import React, { useState } from 'react';
import SearchInput from '../common/SearchInput';
import Trip from './Trip';
import useFetchTrips from '../common/useFetchTrips';
import TripRoute from './TripRoute';
import { deleteTrip } from './deleteTrip';
import { fetchTrip } from './fetchTrip';

// ViewTrips is a component for viewing and managing trips
const ViewTrips = ({
	setSelectedTrip,
	selectedTrip,
	setTripToEdit,
	setView,
	setMessage,
}) => {
	const [searchField, setSearchTerm] = useState('');
	const { trips, error, refetch } = useFetchTrips();

	// If there's an error, display it
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (trips.length === 0) {
		return <div>No trips available. Please add a new trip.</div>;
	}

	// Filter the trips based on the search term
	const filteredTrips = trips.filter(
		(trip) =>
			trip.title.toLowerCase().includes(searchField.toLowerCase()) ||
			trip.stages.some((stage) =>
				stage.hostel.toLowerCase().includes(searchField.toLowerCase())
			)
	);

	// Handle deleting a trip
	const handleDelete = async (id) => {
		try {
			await deleteTrip(id);
			setMessage('Trip deleted successfully'); // Set message on success
			refetch();
		} catch (error) {
			setMessage(`Failed to delete trip: ${error.message}`); // Set message on failure
		}
	};

	// Handle editing a trip
	const handleEdit = async (id) => {
		try {
			const tripDetails = await fetchTrip(id);
			setTripToEdit(tripDetails);
			setView('create');
		} catch (error) {
			console.error(error);
		}
	};

	// Render a trip
	const renderTrip = ({ id, ...trip }) => (
		<Trip
			key={id}
			trip={trip}
			onEdit={() => handleEdit(id)}
			onDelete={() => handleDelete(id)}
		/>
	);

	// Render the component
	return (
		<div className="mt-3">
			<SearchInput value={searchField} onChange={setSearchTerm} />
			{filteredTrips.map(renderTrip)}
			<TripRoute trips={trips} setSelectedTrip={setSelectedTrip} />
			{selectedTrip && selectedTrip.stages.length <= 1 && (
				<p>Selected trip is too short to plot route.</p>
			)}
		</div>
	);
};

export default ViewTrips;
