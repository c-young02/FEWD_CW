import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import SelectStar from '../Stars/selectStar';
import useFormSubmission from './submitReview';
import validateReview from './validateReview';

// CreateReview is a functional component that renders a form for creating a review
const CreateReview = ({ hostelId, refetchHostels }) => {
	const [reviewText, setReviewText] = useState('');
	const [rating, setRating] = useState(0);
	const [message, setMessage] = useState('');

	// Custom hook for form submission
	const { handleSubmitReview } = useFormSubmission(
		hostelId,
		reviewText,
		rating,
		setMessage
	);

	// Function to handle form submission with logging
	const handleSubmit = (event) => {
		const validationError = validateReview(reviewText, rating); // Validate the review
		if (validationError) {
			event.preventDefault();
			setMessage(validationError); // Set the message if there is a validation error
			return;
		}

		event.preventDefault();
		handleSubmitReview(event).then(() => {
			refetchHostels(); // Refetch the hostels after the review is submitted
		});
	};

	return (
		<div>
			<hr />
			{message && <Alert variant="danger">{message}</Alert>}
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Create Review</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						value={reviewText}
						onChange={(e) => setReviewText(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Rating:</Form.Label>
					<SelectStar onStarSelect={setRating} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default CreateReview;
