import React, { useEffect, useState } from 'react';
import { authenticate } from '../common/Authenticate';
import CreateTrip from './ModifyTrip';
import ViewTrips from './ViewTrips';
import { Alert } from 'react-bootstrap';

export default function Trips({ setSelectedTrip, selectedTrip }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [view, setView] = useState('view');
	const [tripToEdit, setTripToEdit] = useState(null); // Add 'tripToEdit' state here

	// Authenticate user when component mounts
	useEffect(() => {
		authenticate(setIsLoggedIn);
	}, []);

	useEffect(() => {}, [tripToEdit]);
	const [message, setMessage] = useState('');

	// If user is logged in, display trips or create trip view based on current view
	if (isLoggedIn) {
		return (
			<div>
				<button
					onClick={() => {
						setView(view === 'view' ? 'create' : 'view');
						if (view === 'view') {
							setTripToEdit(null);
						}
					}}
					className="btn btn-primary mb-1"
				>
					{view === 'view' ? 'Create a Trip' : 'Back to Trips'}
				</button>
				{message && <Alert variant="success">{message}</Alert>}

				{view === 'view' ? (
					<ViewTrips
						setSelectedTrip={setSelectedTrip}
						selectedTrip={selectedTrip}
						setTripToEdit={setTripToEdit}
						setView={setView}
						setMessage={setMessage}
					/>
				) : (
					<CreateTrip
						initialData={tripToEdit}
						setView={setView}
						onDone={() => setTripToEdit(null)}
						setMessage={setMessage}
					/>
				)}
			</div>
		);
	} else {
		// If user is not logged in, prompt them to log in
		return (
			<Alert variant="danger">Please log in to start planning trips.</Alert>
		);
	}
}
