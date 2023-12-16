import Star from './Star';
import { useLocalStorage } from './useLocalStorage';

export default function StarRating({ position, totalStars = 5 }) {
	const createArray = (length) => [...Array(length)];
	let positionInMenu = JSON.stringify(position);
	const [selectedStars] = useLocalStorage(positionInMenu, 3);

	return (
		<div>
			{createArray(totalStars).map((n, i) => (
				<Star key={i} selected={selectedStars > i} />
			))}
		</div>
	);
}
