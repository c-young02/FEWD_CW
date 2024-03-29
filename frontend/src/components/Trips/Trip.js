import React from 'react';
import { Accordion } from 'react-bootstrap';
import DropdownMenu from './DropdownMenu';

// Trip is a functional component that renders a trip in an accordion
const Trip = ({ trip, onEdit, onDelete }) => (
	<Accordion className="bg-light border my-3">
		<Accordion.Header>{trip.title}</Accordion.Header>
		<Accordion.Body className="d-flex align-items-start">
			<div className="flex-grow-1">
				<div id={`trip-${trip.id}`}>
					{/* Map over the stages of the trip and render each one */}
					{trip.stages.map((stage, index) => (
						<div key={index}>
							Hostel: {stage.hostel}
							<br />
							Arrival Date:{' '}
							{new Date(stage.arrivalDate).toLocaleDateString('en-GB')}
							<br />
							Departure Date:{' '}
							{new Date(stage.departureDate).toLocaleDateString('en-GB')}
							<hr />
						</div>
					))}
				</div>
			</div>
			<div>
				{/* Render a DropdownMenu component with onEdit and onDelete handlers */}
				<DropdownMenu
					onEdit={() => onEdit(trip.id)}
					onDelete={() => onDelete(trip.id)}
				/>
			</div>
		</Accordion.Body>
	</Accordion>
);

export default Trip;
