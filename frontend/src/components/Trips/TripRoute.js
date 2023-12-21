import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const TripRoute = ({ trips, setSelectedTrip }) => {
	const [selectedTripTitle, setSelectedTripTitle] = useState('Plot a trip');

	return (
		<DropdownButton
			id="dropdown-basic-button"
			variant="secondary"
			size="lg"
			title={selectedTripTitle}
		>
			<Dropdown.Item
				onClick={() => {
					setSelectedTrip(null);
					setSelectedTripTitle('Plot a trip');
				}}
			>
				None
			</Dropdown.Item>
			{trips.map((trip) => (
				<Dropdown.Item
					key={trip.id}
					onClick={() => {
						setSelectedTrip(trip);
						setSelectedTripTitle(trip.title);
					}}
				>
					{trip.title}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};

export default TripRoute;
