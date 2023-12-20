import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const TripRoute = ({ trips, selectedTrip, setSelectedTrip }) => (
	<DropdownButton
		id="dropdown-basic-button"
		variant="secondary"
		size="lg"
		title={selectedTrip || 'Plot a trip'}
	>
		<Dropdown.Item onClick={() => setSelectedTrip(null)}>None</Dropdown.Item>
		{trips.map((trip) => (
			<Dropdown.Item key={trip.id} onClick={() => setSelectedTrip(trip.title)}>
				{trip.title}
			</Dropdown.Item>
		))}
	</DropdownButton>
);

export default TripRoute;
