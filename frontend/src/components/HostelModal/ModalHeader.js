import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalHeader = ({ name }) => (
	<Modal.Header closeButton>
		<Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
	</Modal.Header>
);

export default ModalHeader;
