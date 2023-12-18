import Star from './Star';

export default function StarRating({ average, totalStars = 5 }) {
	const createArray = (length) => [...Array(length)];
	const starArray = createArray(totalStars);

	return (
		<div>
			{starArray.map((n, i) => (
				<Star key={i} selected={average > i} />
			))}
		</div>
	);
}
