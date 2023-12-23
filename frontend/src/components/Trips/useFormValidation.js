import { useState } from 'react';
import DOMPurify from 'dompurify';

// useFormValidation is a custom hook for form validation
export default function useFormValidation(initialTitle, initialStages) {
	// State for the title, stages, and message
	const [title, setTitle] = useState(DOMPurify.sanitize(initialTitle));
	const [stages, setStages] = useState(initialStages);
	const [message, setMessage] = useState('');

	// validateForm function checks if the form data is valid
	function validateForm() {
		// Check if title is not empty
		if (!title.trim()) {
			setMessage('Title is required.');
			return false;
		}

		// Check if there is at least one stage
		if (stages.length === 0) {
			setMessage('At least one stage is required.');
			return false;
		}

		// Check if all fields in each stage are filled and the departure date is later than the arrival date
		for (let stage of stages) {
			if (!stage.hostel.trim() || !stage.arrivalDate || !stage.departureDate) {
				setMessage('All stage fields are required.');
				return false;
			}

			if (new Date(stage.departureDate) <= new Date(stage.arrivalDate)) {
				setMessage('Departure date must be later than arrival date.');
				return false;
			}
		}

		// If all checks pass, return true
		return true;
	}

	return {
		title,
		setTitle,
		stages,
		setStages,
		message,
		setMessage,
		validateForm,
	};
}
