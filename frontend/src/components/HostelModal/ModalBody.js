import React from 'react';
import { Modal } from 'react-bootstrap';
import HostelInfo from './HostelInfo';
import Rating from './Rating';
import ReviewSection from './ReviewSection';

const ModalBody = ({
	hostel,
	showReviews,
	toggleReviews,
	searchField,
	setSearchField,
	filteredReviews,
	activeKey,
	setActiveKey,
}) => (
	<Modal.Body>
		<HostelInfo hostel={hostel} />

		<Rating reviews={hostel.reviews} />
		<span className="mb-0" role="button" onClick={toggleReviews}>
			{showReviews ? 'Hide Reviews ' : 'View Reviews '}({hostel.reviews.length})
		</span>
		{showReviews && (
			<ReviewSection
				searchField={searchField}
				setSearchField={setSearchField}
				filteredReviews={filteredReviews}
				activeKey={activeKey}
				setActiveKey={setActiveKey}
			/>
		)}
	</Modal.Body>
);

export default ModalBody;
