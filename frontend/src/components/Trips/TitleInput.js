import React from 'react';

export default function TitleInput({ title, setTitle }) {
	return (
		<div className="mb-3">
			<label className="form-label">Title:</label>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className="form-control"
				required
			/>
		</div>
	);
}
