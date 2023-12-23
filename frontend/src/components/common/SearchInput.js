import React from 'react';
import { Form } from 'react-bootstrap';

// SearchInput is a functional component that renders a search input field
const SearchInput = ({ value, onChange }) => {
	return (
		<Form.Control
			type="text"
			placeholder="Search ..."
			value={value}
			onChange={({ target: { value } }) => onChange(value)} // Function to handle changes in the input field
		/>
	);
};

export default SearchInput;
