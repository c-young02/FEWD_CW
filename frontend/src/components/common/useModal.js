import { useState } from 'react';

// useModal is a custom hook for handling modal visibility
const useModal = () => {
	// State for controlling modal visibility
	const [show, setShow] = useState(false);

	// Function to open the modal
	const handleShow = () => setShow(true);

	// Function to close the modal
	const handleClose = () => setShow(false);

	// Return an object with the modal visibility state and the functions to control it
	return {
		show,
		handleShow,
		handleClose,
	};
};

export default useModal;
