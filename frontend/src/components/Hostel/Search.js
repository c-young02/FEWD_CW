import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchInput from '../common/SearchInput';
import CafeFilter from './CafeFilter';
import DisplayHostels from './DisplayHostels';

const Search = ({ hostels, onHostelClick }) => {
	const [searchField, setSearchField] = useState('');
	const [cafeFilter, setCafeFilter] = useState(false);

	const handleCafeToggle = (value) => {
		setCafeFilter(value);
	};

	const filteredHostels = hostels.filter((entry) => {
		const lowerCaseSearch = searchField.toLowerCase();
		return entry.name.toLowerCase().includes(lowerCaseSearch);
	});

	const cafeFilteredHostels = cafeFilter
		? filteredHostels.filter((entry) => entry.cafe)
		: filteredHostels;

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
				hostels={cafeFilteredHostels}
				onHostelClick={onHostelClick}
			/>
		</div>
	);
};

export default Search;
