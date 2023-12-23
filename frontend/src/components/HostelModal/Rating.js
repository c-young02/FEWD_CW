import React from 'react';
import AverageStars from '../Stars/AverageStars';

// Rating is a functional component that renders the average rating of a set of reviews
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
