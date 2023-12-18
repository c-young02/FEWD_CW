import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import HostelInfo from './HostelInfo';
import HostelRating from './HostelRating';

const HostelModal = ({ show, handleClose, hostel }) => {
	return (
		<Modal show={show} onHide={handleClose} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{hostel.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<HostelInfo hostel={hostel} />
				<div className="d-flex align-items-center justify-content-between">
					<HostelRating hostel={hostel} />
					<Button variant="secondary">Create Review</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default HostelModal;
