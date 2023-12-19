import React from 'react';

export default function StageForm({
	stage: { hostel, arrivalDate, departureDate },
	index,
	handleStageChange,
	handleDeleteStage,
	hostels,
}) {
	return (
		<div className="mb-3">
			<div className="form-group">
				<label className="form-label">Hostel:</label>
				<select
					value={hostel}
					onChange={(e) => handleStageChange(e, index, 'hostel')}
					className="form-control"
					required
				>
					<option value="" disabled>
						Select a hostel
					</option>
					{hostels.map((hostel) => (
						<option key={hostel.id} value={hostel.name}>
							{hostel.name}
						</option>
					))}
				</select>
			</div>
			<div className="form-group">
				<label className="form-label">Arrival Date:</label>
				<input
					type="date"
					value={arrivalDate}
					onChange={(e) => handleStageChange(e, index, 'arrivalDate')}
					className="form-control"
					required
				/>
			</div>
			<div className="form-group">
				<label className="form-label">Departure Date:</label>
				<input
					type="date"
					value={departureDate}
					onChange={(e) => handleStageChange(e, index, 'departureDate')}
					className="form-control"
					required
				/>
			</div>
			<button
				type="button"
				onClick={() => handleDeleteStage(index)}
				className="btn btn-danger mt-2"
			>
				Delete Stage
			</button>
		</div>
	);
}
