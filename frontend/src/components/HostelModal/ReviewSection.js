import React from 'react';
import { InputGroup } from 'react-bootstrap';
import SearchInput from '../common/SearchInput';
import Reviews from './Reviews';

const ReviewSection = ({
	searchField,
	setSearchField,
	filteredReviews,
	activeKey,
	setActiveKey,
}) => (
	<>
		<hr />
		<InputGroup className="my-3">
			<SearchInput value={searchField} onChange={setSearchField} />
		</InputGroup>
		<Reviews
			reviews={filteredReviews}
			activeKey={activeKey}
			setActiveKey={setActiveKey}
		/>
	</>
);

export default ReviewSection;
