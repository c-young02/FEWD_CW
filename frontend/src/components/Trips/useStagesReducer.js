import { useReducer } from 'react';

const initialState = [{ hostel: '', arrivalDate: '', departureDate: '' }];

function stagesReducer(state, action) {
	switch (action.type) {
		case 'ADD_STAGE':
			return [...state, { hostel: '', arrivalDate: '', departureDate: '' }];
		case 'DELETE_STAGE':
			return state.filter((_, index) => index !== action.index);
		case 'CHANGE_STAGE':
			const newState = [...state];
			newState[action.index][action.field] = action.value;
			return newState;
		default:
			throw new Error();
	}
}

export default function useStagesReducer(initialStages) {
	const [stages, dispatchStages] = useReducer(
		stagesReducer,
		initialStages && initialStages.length > 0 ? initialStages : initialState
	);

	const handleAddStage = () => {
		dispatchStages({ type: 'ADD_STAGE' });
	};

	const handleDeleteStage = (index) => {
		dispatchStages({ type: 'DELETE_STAGE', index });
	};

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
