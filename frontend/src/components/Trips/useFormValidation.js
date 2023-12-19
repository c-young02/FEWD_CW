import { useState } from 'react';

export default function useFormValidation(initialTitle, initialStages) {
	const [title, setTitle] = useState(initialTitle);
	const [stages, setStages] = useState(initialStages);
	const [message, setMessage] = useState('');

	function validateForm() {
		if (!title.trim()) {
			setMessage('Title is required.');
			return false;
		}

		if (stages.length === 0) {
			setMessage('At least one stage is required.');
			return false;
		}

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
