import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchInput from '../common/SearchInput';
import CafeFilter from './CafeFilter';
import DisplayHostels from './DisplayHostels';

// Search is a functional component that renders a search input, a cafe filter, and a list of hostels
const Search = ({ hostels, onHostelClick, refetchHostels }) => {
	const [searchField, setSearchField] = useState(''); // State for the search field
	const [cafeFilter, setCafeFilter] = useState(false); // State for the cafe filter

	// Function to handle toggle of the cafe filter
	const handleCafeToggle = (value) => {
		setCafeFilter(value);
	};

	// Function to filter hostels based on the search field and cafe filter
	const filterHostels = () => {
		let filteredHostels = hostels.filter((entry) => {
			const lowerCaseSearch = searchField.toLowerCase();
			return entry.name.toLowerCase().includes(lowerCaseSearch);
		});

		if (cafeFilter) {
			filteredHostels = filteredHostels.filter((entry) => entry.cafe);
		}

		return filteredHostels;
	};

	return (
		<div>
			<Row className="d-flex align-items-center">
				<Col className="flex-grow-1">
					<SearchInput value={searchField} onChange={setSearchField} />
				</Col>
				<Col xs="auto">
					<CafeFilter cafe={cafeFilter} onToggle={handleCafeToggle} />
				</Col>
			</Row>

			<hr />
			<DisplayHostels
				hostels={filterHostels()}
				onHostelClick={onHostelClick}
				refetchHostels={refetchHostels}
			/>
		</div>
	);
};

export default Search;
