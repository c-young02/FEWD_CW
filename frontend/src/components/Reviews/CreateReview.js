import React, { useState } from 'react'; // Add useState here
import { Form, Button, Alert } from 'react-bootstrap';
import SelectStar from '../Stars/selectStar';
import useFormSubmission from './submitReview';
import validateReview from './validateReview';

const CreateReview = ({ hostelId, refetchHostels }) => {
	const [reviewText, setReviewText] = useState(''); // Initialize to empty string
	const [rating, setRating] = useState(0); // Initialize to 0
	const [message, setMessage] = useState('');

	const { handleSubmitReview } = useFormSubmission(
		hostelId,
		reviewText,
		rating,
		setMessage
	);

	const handleSubmitWithLogging = (event) => {
		const validationError = validateReview(reviewText, rating);
		if (validationError) {
			event.preventDefault();
			setMessage(validationError);
			return;
		}

		event.preventDefault();
		handleSubmitReview(event).then(() => {
			refetchHostels();
		});
	};

	return (
		<div>
			<hr />
			{message && <Alert variant="danger">{message}</Alert>}
			<Form onSubmit={handleSubmitWithLogging}>
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
