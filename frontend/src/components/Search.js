import React, { useState } from 'react';
import DisplayHostels from './DisplayHostels';
import CafeFilterToggle from './CafeToggle';

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

	// Apply cafe filter if active
	const cafeFilteredHostels = cafeFilter
		? filteredHostels.filter((entry) => entry.cafe)
		: filteredHostels;

	return (
		<div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div style={{ flex: 1 }}>
					<input
						className="form-control"
						type="text"
						placeholder="Search ..."
						value={searchField}
						onChange={(e) => setSearchField(e.target.value)}
					/>
				</div>
				<div>
					<CafeFilterToggle cafe={cafeFilter} onToggle={handleCafeToggle} />
				</div>
			</div>

			<hr />
			<DisplayHostels
				hostels={cafeFilteredHostels}
				onHostelClick={onHostelClick}
			/>
		</div>
	);
};

export default Search;
