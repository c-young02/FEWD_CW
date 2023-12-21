import DOMPurify from 'dompurify';

export default function validateReview(reviewText, rating) {
	// Sanitize reviewText
	const sanitizedReviewText = DOMPurify.sanitize(reviewText);

	// Check if sanitizedReviewText is present and not just whitespace
	if (!sanitizedReviewText || !sanitizedReviewText.trim()) {
		return 'Review text is required.';
	}

	// Check if rating is between 1 and 5
	if (rating < 1 || rating > 5) {
		return 'Rating must be between 1 and 5.';
	}

	// If everything is valid, return null
	return null;
}
