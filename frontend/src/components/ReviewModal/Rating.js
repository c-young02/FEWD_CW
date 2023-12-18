import React from 'react';
import Button from 'react-bootstrap/Button';
import AverageStars from '../Stars/AverageStars';

const Rating = ({ reviews }) => (
	<div className="d-flex justify-content-between align-items-center mx-3 mt-3">
		<h5 className="mb-0">
			<span>Rating:</span>
			<AverageStars data={reviews.map((review) => review.rating)} />
		</h5>
		<Button variant="secondary">Create Review</Button>
	</div>
);
export default Rating;
