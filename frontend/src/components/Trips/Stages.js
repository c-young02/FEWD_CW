import React from 'react';
import StageForm from './StageForm';

export default function Stages({
	stages,
	handleStageChange,
	handleDeleteStage,
	hostels,
}) {
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
