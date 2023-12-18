import React from 'react';
import { Form } from 'react-bootstrap';

const SearchInput = ({ value, onChange }) => {
	return (
		<Form.Control
			type="text"
			placeholder="Search ..."
			value={value}
			onChange={({ target: { value } }) => onChange(value)}
		/>
	);
};

export default SearchInput;
