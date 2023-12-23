import { useReducer } from 'react';

// Initial state for the stages
const initialState = [{ hostel: '', arrivalDate: '', departureDate: '' }];

// Reducer function for the stages
function stagesReducer(state, action) {
	switch (action.type) {
		case 'ADD_STAGE':
			// Add a new stage
			return [...state, { hostel: '', arrivalDate: '', departureDate: '' }];
		case 'DELETE_STAGE':
			// Delete a stage by index
			return state.filter((_, index) => index !== action.index);
		case 'CHANGE_STAGE':
			// Change a field of a stage by index
			const newState = [...state];
			newState[action.index][action.field] = action.value;
			return newState;
		default:
			throw new Error();
	}
}

// Custom hook for managing stages
export default function useStagesReducer(initialStages) {
	const [stages, dispatchStages] = useReducer(
		stagesReducer,
		// Use initialStages if provided, otherwise use initialState
		initialStages && initialStages.length > 0 ? initialStages : initialState
	);

	// Function to add a stage
	const handleAddStage = () => {
		dispatchStages({ type: 'ADD_STAGE' });
	};

	// Function to delete a stage by index
	const handleDeleteStage = (index) => {
		dispatchStages({ type: 'DELETE_STAGE', index });
	};

	// Function to change a field of a stage by index
	const handleStageChange = (e, index, field) => {
		dispatchStages({
			type: 'CHANGE_STAGE',
			index,
			field,
			value: e.target.value,
		});
	};

	return { stages, handleAddStage, handleDeleteStage, handleStageChange };
}
