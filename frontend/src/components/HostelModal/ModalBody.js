import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import HostelInfo from './HostelInfo';
import Rating from './Rating';
import ReviewSection from './ReviewSection';
import { authenticate } from '../common/Authenticate';
import CreateReview from '../Reviews/CreateReview';

// ModalBody is a functional component that renders the body of a hostel modal
const ModalBody = ({
	hostel,
	showReviews,
	toggleReviews,
	searchField,
	setSearchField,
	filteredReviews,
	activeKey,
	setActiveKey,
	refetchHostels,
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showCreateReview, setShowCreateReview] = useState(false);

	useEffect(() => {
		authenticate(setIsLoggedIn); // Authenticate the user when the component mounts
	}, []);

	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Log in to create reviews
		</Tooltip>
	);

	const toggleCreateReview = useCallback(() => {
		setShowCreateReview((prev) => !prev);
	}, []);

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
					// If the user is logged in, display a button to toggle the create review form
					<Button variant="secondary" onClick={toggleCreateReview}>
						{/*Toggle create review form */}
						{showCreateReview ? 'Hide Create Review' : 'Create Review'}
					</Button>
				) : (
					// If the user is not logged in, display a disabled button

					<OverlayTrigger placement="right" overlay={renderTooltip}>
						<span className="d-inline-block">
							<Button variant="secondary" disabled>
								Create Review
							</Button>
						</span>
					</OverlayTrigger>
				)}
			</div>
			{showCreateReview && (
				<CreateReview hostelId={hostel.id} refetchHostels={refetchHostels} /> // Create review form
			)}
			{showReviews && (
				<ReviewSection
					searchField={searchField}
					setSearchField={setSearchField}
					filteredReviews={filteredReviews}
					activeKey={activeKey}
					setActiveKey={setActiveKey}
				/> // Review section
			)}
		</Modal.Body>
	);
};

export default ModalBody;
