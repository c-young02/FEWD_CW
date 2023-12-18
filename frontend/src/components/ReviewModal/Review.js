import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import StarRating from '../Stars/StarRating';

const Review = ({ review: { reviewer, date, rating, review }, eventKey }) => {
	return (
		<Accordion.Item eventKey={eventKey}>
			<Accordion.Header>
				<h5>{reviewer}</h5> <h5 className="mx-5">{date}</h5>
				<h5>
					<StarRating average={rating} />
				</h5>
			</Accordion.Header>
			<Accordion.Body>
				<p>{review}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Review;
