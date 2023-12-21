import React, { useState } from 'react'; // Add useState here
import { Form, Button, Alert } from 'react-bootstrap';
import SelectStar from '../Stars/selectStar';
import useFormSubmission from './submitReview';
import validateReview from './validateReview';

const CreateReview = ({ hostelName }) => {
	const [reviewText, setReviewText] = useState(''); // Initialize to empty string
	const [rating, setRating] = useState(0); // Initialize to 0
	const [message, setMessage] = useState('');

	const { handleSubmitReview } = useFormSubmission(
		hostelName,
		reviewText,
		rating,
		setMessage
	);

	const handleSubmit = (event) => {
		event.preventDefault();

		const validationError = validateReview(reviewText, rating);
		if (validationError) {
			setMessage(validationError);
			return;
		}

		handleSubmitReview();
	};

	return (
		<div>
			<hr />
			<h1>{hostelName}</h1>
			<h4>Create Review</h4>
			{message && <Alert variant="danger">{message}</Alert>}
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Review</Form.Label>
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
