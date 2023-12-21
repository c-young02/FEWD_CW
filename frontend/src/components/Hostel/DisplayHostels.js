import React from 'react';
import Hostel from './Hostel';

const DisplayHostels = ({ hostels, onHostelClick, refetchHostels }) => {
	if (hostels.length === 0) {
		return <p>No hostels found.</p>;
	}

	return (
		<div className="table-responsive">
			<table className="table table-hover">
				<thead>
					<tr>
						<th className="col-9 text-start fs-2">Hostel</th>
						<th className="text-start fs-2">Rating</th>
					</tr>
				</thead>
				<tbody>
					{hostels.map((hostel) => (
						<Hostel
							key={hostel.id}
							item={hostel}
							onHostelClick={onHostelClick}
							refetchHostels={refetchHostels}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DisplayHostels;
