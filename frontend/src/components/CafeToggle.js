import React from 'react';
import ToggleSwitch from 'react-toggle-switch';
import 'react-toggle-switch/dist/css/switch.min.css';
import Form from 'react-bootstrap/Form';

const CafeFilterToggle = ({ cafe, onToggle }) => {
	return (
		<Form.Group className="mx-2 d-flex align-items-center">
			<label className="fs-5 mx-1">Café Inside</label>
			<ToggleSwitch
				on={cafe}
				onClick={() => onToggle(!cafe)}
				className="toggle-switch"
			/>
		</Form.Group>
	);
};

export default CafeFilterToggle;
