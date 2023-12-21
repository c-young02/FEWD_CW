import React, { useEffect, useState } from 'react';
import { authenticate } from '../common/Authenticate';
import CreateTrip from './ModifyTrip';
import ViewTrips from './ViewTrips';

export default function Trips({ setSelectedTrip, selectedTrip }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [view, setView] = useState('view');

	// Authenticate user when component mounts
	useEffect(() => {
		authenticate(setIsLoggedIn);
	}, []);

	// If user is logged in, display trips or create trip view based on current view
	if (isLoggedIn) {
		return (
			<div>
				<div className="text-center">
					<button
						onClick={() => setView(view === 'view' ? 'create' : 'view')}
						className="btn btn-primary"
					>
						{view === 'view' ? 'Create a Trip' : 'Back to Trips'}
					</button>
				</div>
				{view === 'view' ? (
					<ViewTrips
						setSelectedTrip={setSelectedTrip}
						selectedTrip={selectedTrip}
					/>
				) : (
					<CreateTrip setView={setView} />
				)}
			</div>
		);
	} else {
		// If user is not logged in, prompt them to log in
		return <p>Please log in</p>;
	}
}
