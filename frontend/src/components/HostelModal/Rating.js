import React from 'react';
import Button from 'react-bootstrap/Button';
import AverageStars from '../Stars/AverageStars';

const Rating = ({ reviews }) => {
	const ratings = reviews.map(({ rating }) => rating);

	return (
		<div className="d-flex justify-content-between align-items-center mt-3">
			<div className="d-flex align-items-center">
				<span>Rating:</span>
				<AverageStars data={ratings} />
			</div>
		</div>
	);
};

export default Rating;
