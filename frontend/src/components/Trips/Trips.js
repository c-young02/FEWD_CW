import React, { useEffect, useState } from 'react';
import { authenticate } from '../common/Authenticate';
import CreateTrip from './CreateTrip';
import ViewTrips from './ViewTrips';

export default function Trips({ setSelectedTrip, selectedTrip }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [view, setView] = useState('create');

	useEffect(() => {
		authenticate(setIsLoggedIn);
	}, []);

	if (isLoggedIn) {
		return (
			<div>
				<div className="text-center">
					<button
						onClick={() => setView(view === 'view' ? 'create' : 'view')}
						className="btn btn-primary"
					>
						{view === 'view' ? 'Change to Create Trip' : 'Change to View Trips'}
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
		return <p>Please log in</p>;
	}
}
