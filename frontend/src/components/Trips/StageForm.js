import React from 'react';

// StageForm is a functional component that renders a form for a stage of a trip
export default function StageForm({
	stage: { hostel, arrivalDate, departureDate },
	index,
	handleStageChange,
	handleDeleteStage,
	hostels,
}) {
	return (
		<div className="mb-3">
			{/* Hostel selection */}
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
					{/* Map over the hostels array and create an option for each one */}
					{hostels.map((hostel) => (
						<option key={hostel.id} value={hostel.name}>
							{hostel.name}
						</option>
					))}
				</select>
			</div>
			{/* Arrival date input */}
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
			{/* Departure date input */}
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
			{/* Delete stage button */}
			<button
				type="button"
				onClick={() => handleDeleteStage(index)}
				className="btn btn-danger mt-2 mb-3"
			>
				Delete Stage
			</button>
		</div>
	);
}
