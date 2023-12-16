import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Stars from './Stars';

const HostelModal = ({ show, handleClose, hostel, index }) => {
	return (
		<Modal show={show} onHide={handleClose}>
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
				<p className="mb-0">Description: {hostel.description}</p>
				<div className="d-flex align-items-center justify-content-between">
					<div className="d-flex">
						<p className="mb-0">Rating:</p>
						<span>&nbsp;</span>
						<Stars position={index} />
						<span>&nbsp;</span>
						<p className="mb-0">Read Reviews (Num)</p>
					</div>
					<Button variant="secondary">Create Review</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default HostelModal;
