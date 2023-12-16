import Star from './Star';

export default function StarRating({ average, totalStars = 5 }) {
	const createArray = (length) => [...Array(length)];

	return (
		<div>
			{createArray(totalStars).map((n, i) => (
				<Star key={i} selected={average > i} />
			))}
		</div>
	);
}
