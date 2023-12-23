import React from 'react';
import { Modal } from 'react-bootstrap';

// ModalHeader is a functional component that renders the header of a hostel modal
const ModalHeader = ({ name }) => (
	<Modal.Header closeButton>
		<Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
	</Modal.Header>
);

export default ModalHeader;
