import React from 'react';
import Review from './Review';
import { Accordion } from 'react-bootstrap';

const Reviews = ({ reviews, activeKey, setActiveKey }) => (
	<Accordion
		activeKey={activeKey}
		onSelect={(eventKey) =>
			setActiveKey(eventKey !== activeKey ? eventKey : null)
		}
	>
		{reviews.length > 0 ? (
			reviews.map((review, index) => (
				<Review key={index} review={review} eventKey={index.toString()} />
			))
		) : (
			<p>No reviews found.</p>
		)}
	</Accordion>
);

export default Reviews;