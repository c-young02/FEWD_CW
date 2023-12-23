import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

// TripRoute is a functional component that renders a dropdown button for selecting a trip
const TripRoute = ({ trips, setSelectedTrip }) => {
	// State for the title of the selected trip
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
					setSelectedTrip(null); // When this item is clicked, clear the selected trip
					setSelectedTripTitle('Plot a trip'); // And reset the title
				}}
			>
				None
			</Dropdown.Item>
			{/* Map over the trips array and create a dropdown item for each trip */}
			{trips.map((trip) => (
				<Dropdown.Item
					key={trip.id}
					onClick={() => {
						setSelectedTrip(trip); // When a trip is clicked, set it as the selected trip
						setSelectedTripTitle(trip.title); // And set its title as the button title
					}}
				>
					{trip.title}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};

export default TripRoute;
