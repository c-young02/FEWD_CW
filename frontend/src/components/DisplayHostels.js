import React from 'react';
import Hostel from './Hostel';

const DisplayHostels = ({ hostels, onHostelClick }) => {
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
					{hostels.map((hostel, index) => (
						<Hostel
							key={index}
							item={hostel}
							index={index}
							onHostelClick={onHostelClick}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DisplayHostels;
