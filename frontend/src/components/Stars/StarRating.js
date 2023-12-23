import Star from './Star';

// StarRating is a functional component that displays a star rating
export default function StarRating({ average, totalStars = 5 }) {
	// Helper function to create an array of a certain length
	const createArray = (length) => [...Array(length)];
	// Create an array with a length of totalStars
	const starArray = createArray(totalStars);

	return (
		<div>
			{starArray.map((n, i) => (
				// For each item in the array, render a Star component
				// The star is selected if the average rating is greater than the index
				<Star key={i} selected={average > i} />
			))}
		</div>
	);
}
