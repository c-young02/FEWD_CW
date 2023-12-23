import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Star from './Star';

// SelectStar is a functional component that allows the user to select a star rating
export default function SelectStar({ totalStars = 5, onStarSelect }) {
	const createArray = (length) => [...Array(length)]; // Helper function to create an array of a certain length
	const [selectedStars, setSelectedStars] = useState(3); // State for the selected star rating

	// Call the onStarSelect function whenever selectedStars changes
	useEffect(() => {
		if (onStarSelect) {
			onStarSelect(selectedStars);
		}
	}, [selectedStars, onStarSelect]);

	return (
		<div className="d-flex align-items-center">
			{createArray(totalStars).map((n, i) => (
				<h3 key={i}>
					<Star
						selected={selectedStars > i} // The star is selected if the selected star rating is greater than the index
						onSelect={() => setSelectedStars(i + 1)} // When the star is clicked, update the selected star rating
					/>
				</h3>
			))}
			<Form.Select
				aria-label="Default select example"
				value={selectedStars} // The value of the select is the selected star rating
				onChange={(e) => setSelectedStars(Number(e.target.value))} // When the value of the select changes, update the selected star rating
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
