import React, { useEffect, useState } from 'react';
import { authenticate } from '../common/Authenticate';
import CreateTrip from './ModifyTrip';
import ViewTrips from './ViewTrips';

export default function Trips({ setSelectedTrip, selectedTrip }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [view, setView] = useState('view');
	const [tripToEdit, setTripToEdit] = useState(null); // Add 'tripToEdit' state here

	// Authenticate user when component mounts
	useEffect(() => {
		authenticate(setIsLoggedIn);
	}, []);

	useEffect(() => {
		console.log('tripToEdit changed:', tripToEdit);
	}, [tripToEdit]);
	// If user is logged in, display trips or create trip view based on current view
	if (isLoggedIn) {
		return (
			<div>
				<div className="text-center">
					<button
						onClick={() => {
							setView(view === 'view' ? 'create' : 'view');
							if (view === 'view') {
								setTripToEdit(null);
							}
						}}
						className="btn btn-primary"
					>
						{view === 'view' ? 'Create a Trip' : 'Back to Trips'}
					</button>
				</div>
				{view === 'view' ? (
					<ViewTrips
						setSelectedTrip={setSelectedTrip}
						selectedTrip={selectedTrip}
						setTripToEdit={setTripToEdit}
						setView={setView} // Pass 'setView' as a prop
					/>
				) : (
					<CreateTrip
						initialData={tripToEdit}
						setView={setView}
						onDone={() => setTripToEdit(null)}
					/>
				)}
			</div>
		);
	} else {
		// If user is not logged in, prompt them to log in
		return <p>Please log in</p>;
	}
}
