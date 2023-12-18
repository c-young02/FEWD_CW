import React from 'react';
import StarRating from './StarRating';

const AverageStars = ({ data }) => {
	const totalStars = data.reduce((total, rating) => total + rating, 0);
	const averageStars = data.length ? totalStars / data.length : 0;

	return <StarRating average={Math.round(averageStars)} />;
};

export default AverageStars;
