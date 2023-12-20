import React, { useEffect } from 'react';
import useFetchData from '../common/useFetchData';
import TitleInput from './TitleInput';
import Stages from './Stages';
import useStagesReducer from './useStagesReducer';
import useFormValidation from './useFormValidation';
import useFormSubmission from './useFormSubmission';

export default function CreateTrip({ initialData }) {
	const { hostels } = useFetchData();
	const { stages, handleAddStage, handleDeleteStage, handleStageChange } =
		useStagesReducer(initialData ? initialData.stages : []);
	console.log('Stages are:', stages);
	const { title, setTitle, message, setMessage, validateForm } =
		useFormValidation(initialData ? initialData.title : '', stages);
	console.log('Title is:', title);
	const { handleSubmit } = useFormSubmission(
		title,
		stages,
		validateForm,
		setMessage,
		initialData
	);

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
