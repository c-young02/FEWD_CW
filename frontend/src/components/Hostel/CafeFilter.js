import React from 'react';
import { Col } from 'react-bootstrap';
import CafeFilterToggle from './CafeToggle';

const CafeFilter = ({ cafe, onToggle }) => {
	return (
		<Col xs="auto">
			<CafeFilterToggle cafe={cafe} onToggle={onToggle} />
		</Col>
	);
};

export default CafeFilter;
