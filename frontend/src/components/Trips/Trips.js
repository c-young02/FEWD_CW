import React, { useEffect, useState } from 'react';
import { authenticate } from '../common/Authenticate';
import CreateTrip from './CreateTrip';
import ViewTrips from './ViewTrips'; // Import the ViewTrips component

export default function Trips() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [view, setView] = useState('create'); // Add a piece of state to keep track of the current view

	useEffect(() => {
		authenticate(setIsLoggedIn);
	}, []);

	if (isLoggedIn) {
		return (
			<div>
				<div className="text-center">
					<button
						onClick={() => setView(view === 'create' ? 'view' : 'create')}
						className="btn btn-primary"
					>
						{view === 'create' ? 'View Trips' : 'Create Trip'}
					</button>
				</div>
				{view === 'create' ? <CreateTrip /> : <ViewTrips />}
			</div>
		);
	} else {
		return <p>Please log in</p>;
	}
}
