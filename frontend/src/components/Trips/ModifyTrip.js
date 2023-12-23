import React from 'react';
import useFetchHostels from '../common/useFetchHostels';
import TitleInput from './TitleInput';
import Stages from './Stages';
import useStagesReducer from './useStagesReducer';
import useFormValidation from './useFormValidation';
import useFormSubmission from './useFormSubmission';

// CreateTrip is a functional component that renders a form for creating or updating a trip
export default function CreateTrip({ initialData, setView, setMessage }) {
	// Fetch the list of hostels
	const { hostels } = useFetchHostels();
	const { stages, handleAddStage, handleDeleteStage, handleStageChange } =
		useStagesReducer(initialData ? initialData.stages : []);
	const { title, setTitle, validateForm } = useFormValidation(
		initialData ? initialData.title : '',
		stages
	);
	const { handleSubmit } = useFormSubmission(
		title,
		stages,
		validateForm,
		setMessage,
		initialData,
		setView,
		setMessage
	);

	return (
		<form onSubmit={handleSubmit} className="mt-1">
			<TitleInput title={title} setTitle={setTitle} />
			<Stages
				stages={stages}
				handleStageChange={handleStageChange}
				handleDeleteStage={handleDeleteStage}
				hostels={hostels}
			/>
			<button
				type="button"
				onClick={handleAddStage}
				className="btn btn-primary me-5"
			>
				Add Stage
			</button>
			<button type="submit" className="btn btn-success">
				{initialData ? 'Update' : 'Create'} Trip
			</button>
		</form>
	);
}
