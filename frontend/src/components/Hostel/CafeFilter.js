import React from 'react';
import { Col } from 'react-bootstrap';
import CafeFilterToggle from './CafeToggle';

// CafeFilter is a functional component that renders a CafeFilterToggle component inside a Bootstrap column
const CafeFilter = React.memo(({ cafe, onToggle }) => {
	return (
		<Col xs="auto">
			<CafeFilterToggle cafe={cafe} onToggle={onToggle} />
		</Col>
	);
});

export default CafeFilter;
