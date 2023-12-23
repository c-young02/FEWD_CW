import DOMPurify from 'dompurify';

// validateReview is a function that validates the review text and rating
export default function validateReview(reviewText, rating) {
	// Sanitize reviewText to prevent XSS attacks
	const sanitizedReviewText = DOMPurify.sanitize(reviewText);

	// Check if sanitizedReviewText is present and not just whitespace
	// If it's not present or just whitespace, return an error message
	if (!sanitizedReviewText || !sanitizedReviewText.trim()) {
		return 'Review text is required.';
	}

	// Check if rating is between 1 and 5
	// If it's not, return an error message
	if (rating < 1 || rating > 5) {
		return 'Rating must be between 1 and 5.';
	}

	// If everything is valid, return null
	return null;
}
