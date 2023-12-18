import React from 'react';
import { Col } from 'react-bootstrap';
import CafeFilterToggle from './CafeToggle';

const CafeFilter = React.memo(({ cafe, onToggle }) => {
	return (
		<Col xs="auto">
			<CafeFilterToggle cafe={cafe} onToggle={onToggle} />
		</Col>
	);
});

export default CafeFilter;
