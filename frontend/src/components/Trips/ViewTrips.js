import React, { useState } from 'react';
import SearchInput from '../common/SearchInput';
import Trip from './Trip';
import useFetchData from '../common/useFetchData';
import TripRoute from './TripRoute';
import { Modal } from 'react-bootstrap';
import { deleteTrip } from './deleteTrip';

const ViewTrips = ({ setSelectedTrip, selectedTrip }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const { trips, error, refetch } = useFetchData();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

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

	const handleDelete = async (id) => {
		try {
			await deleteTrip(id); // use the deleteTrip function
			setModalMessage('Trip deleted successfully');
			setModalIsOpen(true);
			refetch(); // Refresh the trips list after a trip is deleted
		} catch (error) {
			setModalMessage(`Failed to delete trip: ${error.message}`);
			setModalIsOpen(true);
		}
	};

	return (
		<div className="mt-3">
			<SearchInput value={searchTerm} onChange={setSearchTerm} />
			{filteredTrips.map((trip) => (
				<Trip
					key={trip.id}
					trip={trip}
					onEdit={() => console.log(`Edit trip ${trip.id}`)}
					onDelete={() => handleDelete(trip.id)}
				/>
			))}
			<TripRoute trips={trips} setSelectedTrip={setSelectedTrip} />
			{selectedTrip && selectedTrip.stages.length <= 1 && (
				<p>Selected trip is too short to plot route.</p>
			)}
			<Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
				<Modal.Header closeButton>
					<Modal.Title>{modalMessage}</Modal.Title>
				</Modal.Header>
			</Modal>
		</div>
	);
};

export default ViewTrips;
