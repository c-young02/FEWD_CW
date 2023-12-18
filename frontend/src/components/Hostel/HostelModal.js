import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AverageStars from '../Stars/AverageStars';
import HostelReviews from '../ReviewModal/HostelReviews';

const HostelModal = ({ show, handleClose, hostel }) => {
	return (
		<Modal show={show} onHide={handleClose} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{hostel.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p className="mb-0">Address: {hostel.address}</p>
				<p className="mb-0">Postcode: {hostel.postcode}</p>
				<p className="mb-0">Phone: {hostel.phone}</p>
				<p className="mb-0">Email: {hostel.email}</p>
				<p>Cafe: {hostel.cafe ? 'Yes' : 'No'}</p>
				<p>Description: {hostel.description}</p>
				<div className="d-flex align-items-center justify-content-between">
					<div className="d-flex">
						<p className="mb-0">Rating:</p>
						<span>&nbsp;</span>
						<AverageStars
							data={hostel.reviews.map((review) => review.rating)}
						/>
						<span>&nbsp;</span>
						<HostelReviews hostel={hostel} />
					</div>
					<Button variant="secondary">Create Review</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default HostelModal;
