import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import StarRating from '../Stars/StarRating';

const Review = ({ review, eventKey }) => {
	return (
		<Accordion.Item eventKey={eventKey}>
			<Accordion.Header>
				<h5>{review.reviewer}</h5> <h5 className="mx-5">{review.date}</h5>
				<h5>
					<StarRating average={review.rating} />
				</h5>
			</Accordion.Header>
			<Accordion.Body>
				<p>{review.review}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Review;
