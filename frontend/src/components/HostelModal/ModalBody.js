import React, { useState, useEffect } from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import HostelInfo from './HostelInfo';
import Rating from './Rating';
import ReviewSection from './ReviewSection';
import { authenticate } from '../common/Authenticate';
import CreateReview from '../Reviews/CreateReview';

const ModalBody = ({
	hostel,
	showReviews,
	toggleReviews,
	searchField,
	setSearchField,
	filteredReviews,
	activeKey,
	setActiveKey,
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showCreateReview, setShowCreateReview] = useState(false); // new state

	useEffect(() => {
		authenticate(setIsLoggedIn);
	}, []);

	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Log in to create reviews
		</Tooltip>
	);

	return (
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
				{isLoggedIn ? (
					<Button
						variant="secondary"
						onClick={() => setShowCreateReview((prev) => !prev)}
					>
						{showCreateReview ? 'Hide Create Review' : 'Create Review'}
					</Button>
				) : (
					<OverlayTrigger placement="right" overlay={renderTooltip}>
						<span className="d-inline-block">
							<Button variant="secondary" disabled>
								Create Review
							</Button>
						</span>
					</OverlayTrigger>
				)}
			</div>
			{showCreateReview && <CreateReview hostelId={hostel.id} />}

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
};

export default ModalBody;
