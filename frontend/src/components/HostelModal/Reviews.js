import React from 'react';
import Review from './Review';
import { Accordion } from 'react-bootstrap';

// Reviews is a functional component that renders a list of reviews in an accordion
const Reviews = ({ reviews, activeKey, setActiveKey }) => (
	<Accordion
		activeKey={activeKey} // The currently active key
		onSelect={
			(eventKey) => setActiveKey(eventKey !== activeKey ? eventKey : null) // Set the active key when an accordion item is selected
		}
	>
		{reviews.length > 0 ? (
			reviews.map((review, index) => (
				<div className="mb-2">
					<Review key={index} review={review} eventKey={index.toString()} />
				</div>
			))
		) : (
			<p>No reviews found.</p> // Display a message if no reviews are found
		)}
	</Accordion>
);

export default Reviews;
