import DOMPurify from 'dompurify';

export default function validateCredentials(username, password) {
	// Sanitize username
	const sanitizedUsername = DOMPurify.sanitize(username);

	// Check if sanitizedUsername is present and not just whitespace
	if (!sanitizedUsername || !sanitizedUsername.trim()) {
		return 'Username is required.';
	}

	// Check if password is present and not just whitespace
	if (!password || !password.trim()) {
		return 'Password is required.';
	}

	// If everything is valid, return null
	return null;
}
