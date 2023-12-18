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
		{reviews.map((review, index) => (
			<Review key={index} review={review} eventKey={index.toString()} />
		))}
	</Accordion>
);
export default Reviews;
