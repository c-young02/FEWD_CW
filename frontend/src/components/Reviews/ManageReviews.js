import React, { useEffect, useState } from 'react';
import { Modal, Accordion } from 'react-bootstrap';
import useFetchUserReviews from './userReviews';
import StarRating from '../Stars/StarRating';
import DropdownMenu from './DropdownMenu';
import { deleteReview } from './deleteReview';

const ManageReviews = ({ show, handleClose, refetch }) => {
	const [reviews, setReviews] = useState([]);
	const { fetchUserReviews } = useFetchUserReviews(setReviews);

	useEffect(() => {
		if (show) {
			fetchUserReviews();
		}
	}, [show]);

	const handleDelete = async (id) => {
		try {
			await deleteReview(id);
			console.log('Deleted review');
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Modal show={show} onHide={handleClose} size="lg">
			<Modal.Header closeButton>
				<Modal.Title>Manage Reviews</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{reviews.map((review, index) => (
					<Accordion key={index} className="bg-light border my-3">
						<Accordion.Header>
							{review.hostelName}
							<div className="mx-3 mb-1">
								<StarRating average={review.rating} />
							</div>
						</Accordion.Header>
						<Accordion.Body className="d-flex align-items-start">
							<div className="flex-grow-1">
								{review.review} <br />
								Posted on: {review.date}
							</div>
							<DropdownMenu onDelete={handleDelete} reviewId={review.id} />
						</Accordion.Body>
					</Accordion>
				))}
			</Modal.Body>
		</Modal>
	);
};

export default ManageReviews;
