import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import StarRating from '../Stars/StarRating';

// Review is a functional component that renders a single review in an accordion item
const Review = ({ review: { reviewer, date, rating, review }, eventKey }) => {
	return (
		<Accordion.Item eventKey={eventKey}>
			<Accordion.Header>
				<h5>{reviewer}</h5>
				<h5 className="mx-2">
					<StarRating average={rating} />
				</h5>
			</Accordion.Header>
			<Accordion.Body>
				<p> Reviewed on: {date}</p>
				<p>{review}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Review;
