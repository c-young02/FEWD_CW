import React, { useState } from 'react';
import SearchInput from '../common/SearchInput';
import Trip from './Trip';
import useFetchData from '../common/useFetchData';
import TripRoute from './TripRoute';
import { Modal } from 'react-bootstrap';
import { deleteTrip } from './deleteTrip';
import { fetchTrip } from './fetchTrip';
import CreateTrip from './ModifyTrip';

const ViewTrips = ({ setSelectedTrip, selectedTrip }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const { trips, error, refetch } = useFetchData();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');
	const [tripToEdit, setTripToEdit] = useState(null);

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
			await deleteTrip(id);
			setModalMessage('Trip deleted successfully');
			setModalIsOpen(true);
			refetch();
		} catch (error) {
			setModalMessage(`Failed to delete trip: ${error.message}`);
			setModalIsOpen(true);
		}
	};

	const handleEdit = async (id) => {
		console.log('Editing trip', id);
		try {
			const tripDetails = await fetchTrip(id);
			// Set the fetched trip as the trip to edit
			setTripToEdit(tripDetails);
		} catch (error) {
			console.error(error);
		}
	};

	const renderTrip = ({ id, ...trip }) => (
		<Trip
			key={id}
			trip={trip}
			onEdit={() => handleEdit(id)}
			onDelete={() => handleDelete(id)}
		/>
	);

	return (
		<div className="mt-3">
			{tripToEdit ? (
				<CreateTrip initialData={tripToEdit} />
			) : (
				<>
					<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					{filteredTrips.map(renderTrip)}
					<TripRoute trips={trips} setSelectedTrip={setSelectedTrip} />
					{selectedTrip && selectedTrip.stages.length <= 1 && (
						<p>Selected trip is too short to plot route.</p>
					)}
				</>
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
