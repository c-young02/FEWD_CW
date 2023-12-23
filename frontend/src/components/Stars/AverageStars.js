import React from 'react';
import StarRating from './StarRating';

// AverageStars is a functional component that calculates and displays the average star rating
const AverageStars = ({ data }) => {
	// Calculate the total number of stars by summing up the ratings
	const totalStars = data.reduce((total, rating) => total + rating, 0);
	// Calculate the average number of stars
	// If there are no ratings, the average is 0
	const averageStars = data.length ? totalStars / data.length : 0;

	// Render a StarRating component with the average number of stars (rounded to the nearest whole number)
	return <StarRating average={Math.round(averageStars)} />;
};

export default AverageStars;
