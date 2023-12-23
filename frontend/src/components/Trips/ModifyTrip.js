import React, { useEffect } from 'react';
import useFetchHostels from '../common/useFetchHostels';
import TitleInput from './TitleInput';
import Stages from './Stages';
import useStagesReducer from './useStagesReducer';
import useFormValidation from './useFormValidation';
import useFormSubmission from './useFormSubmission';

// CreateTrip is a functional component that renders a form for creating or updating a trip
export default function CreateTrip({ initialData, setView }) {
	// Fetch the list of hostels
	const { hostels } = useFetchHostels();
	const { stages, handleAddStage, handleDeleteStage, handleStageChange } =
		useStagesReducer(initialData ? initialData.stages : []);
	const { title, setTitle, message, setMessage, validateForm } =
		useFormValidation(initialData ? initialData.title : '', stages);
	const { handleSubmit } = useFormSubmission(
		title,
		stages,
		validateForm,
		setMessage,
		initialData,
		setView
	);

	// Use the useEffect hook to clear the message when the component is unmounted
	useEffect(() => {
		return () => setMessage('');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<form onSubmit={handleSubmit} className="mt-1">
			<p
				className={
					message.includes('successfully') ? 'text-success' : 'text-danger'
				}
			>
				{message}
			</p>

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
				className="btn btn-primary me-2"
			>
				Add Stage
			</button>
			<button type="submit" className="btn btn-primary">
				{initialData ? 'Update' : 'Create'} Trip
			</button>
		</form>
	);
}
