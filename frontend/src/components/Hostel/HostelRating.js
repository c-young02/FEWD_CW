// HostelRating.js
import React from 'react';
import AverageStars from '../Stars/AverageStars';
import HostelReviews from '../ReviewModal/HostelReviews';

const HostelRating = ({ hostel }) => {
	const calculateAverageStars = () => {
		return hostel.reviews.map((review) => review.rating);
	};

	return (
		<div className="d-flex">
			<p className="mb-0">Rating:</p>
			<span>&nbsp;</span>
			<AverageStars data={calculateAverageStars()} />
			<span>&nbsp;</span>
			<HostelReviews hostel={hostel} />
		</div>
	);
};

export default HostelRating;
