import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Star from './Star';

export default function SelectStar({ totalStars = 5, onStarSelect }) {
	const createArray = (length) => [...Array(length)];
	const [selectedStars, setSelectedStars] = useState(3);

	// Call the onStarSelect function whenever selectedStars changes
	useEffect(() => {
		if (onStarSelect) {
			onStarSelect(selectedStars);
		}
	}, [selectedStars, onStarSelect]);

	return (
		<div className="d-flex align-items-center">
			{createArray(totalStars).map((n, i) => (
				<h3>
					<Star
						key={i}
						selected={selectedStars > i}
						onSelect={() => setSelectedStars(i + 1)}
					/>
				</h3>
			))}
			<Form.Select
				aria-label="Default select example"
				value={selectedStars}
				onChange={(e) => setSelectedStars(Number(e.target.value))}
				className="ms-2 w-auto"
			>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</Form.Select>
		</div>
	);
}
