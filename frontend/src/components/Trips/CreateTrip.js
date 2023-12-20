import React, { useEffect } from 'react';
import useFetchData from '../common/useFetchData';
import TitleInput from './TitleInput';
import Stages from './Stages';
import useStagesReducer from './useStagesReducer';
import useFormValidation from './useFormValidation';
import useFormSubmission from './useFormSubmission';

export default function CreateTrip() {
	const { hostels } = useFetchData();
	const { stages, handleAddStage, handleDeleteStage, handleStageChange } =
		useStagesReducer();
	const { title, setTitle, message, setMessage, validateForm } =
		useFormValidation('', stages);
	const { handleSubmit } = useFormSubmission(
		title,
		stages,
		validateForm,
		setMessage
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
			<button type="submit" className="btn btn-success">
				Create Trip
			</button>
		</form>
	);
}
