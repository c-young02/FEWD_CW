import React from 'react';
import StageForm from './StageForm';

// Stages is a functional component that renders a list of StageForm components
export default function Stages({
	stages,
	handleStageChange,
	handleDeleteStage,
	hostels,
}) {
	// Map over the stages array and create a StageForm for each stage
	return stages.map((stage, index) => {
		return (
			<StageForm
				key={index}
				stage={stage}
				index={index}
				handleStageChange={handleStageChange}
				handleDeleteStage={handleDeleteStage}
				hostels={hostels}
			/>
		);
	});
}
