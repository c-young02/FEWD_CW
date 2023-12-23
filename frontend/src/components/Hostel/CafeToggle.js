import React from 'react';
import ToggleSwitch from 'react-toggle-switch';
import 'react-toggle-switch/dist/css/switch.min.css';
import Form from 'react-bootstrap/Form';

// CafeFilterToggle is a functional component that renders a toggle switch for filtering cafes
const CafeFilterToggle = ({ cafe, onToggle }) => {
	// Function to handle toggle switch
	const handleToggle = () => {
		onToggle(!cafe);
	};

	return (
		<Form.Group className="mx-2 d-flex align-items-center">
			<label className="fs-5 mx-1">Café Inside</label>
			<ToggleSwitch
				on={cafe} // The current state of the toggle switch
				onClick={handleToggle}
				className="toggle-switch"
			/>
		</Form.Group>
	);
};

export default CafeFilterToggle;
