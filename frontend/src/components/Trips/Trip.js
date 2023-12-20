import React from 'react';
import { Accordion } from 'react-bootstrap';
import DropdownMenu from './DropdownMenu';

const Trip = ({ trip, onEdit, onDelete }) => (
	<Accordion className="bg-light border my-3">
		<Accordion.Header>{trip.title}</Accordion.Header>
		<Accordion.Body className="d-flex align-items-start">
			<div className="flex-grow-1">
				<div id={`trip-${trip.id}`}>
					{trip.stages.map((stage, index) => (
						<div key={stage.id}>
							Hostel: {stage.hostel}
							Location Delete thisss: {stage.location.lat},{' '}
							{stage.location.long}
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
				<DropdownMenu onEdit={onEdit} onDelete={() => onDelete(trip.id)} />
			</div>
		</Accordion.Body>
	</Accordion>
);

export default Trip;
