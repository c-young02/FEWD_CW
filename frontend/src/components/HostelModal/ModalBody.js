import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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

		<div className="d-flex align-items-center justify-content-between">
			<div className="d-flex">
				<Rating reviews={hostel.reviews} />
				<span
					className="mt-3 mx-3 text-decoration-underline"
					role="button"
					onClick={toggleReviews}
				>
					{showReviews ? 'Hide Reviews ' : 'View Reviews '}(
					{hostel.reviews.length})
				</span>
			</div>
			<Button variant="secondary">Create Review</Button>
		</div>

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
