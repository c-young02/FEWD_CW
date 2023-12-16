import React from 'react';
import Stars from './Stars';

const Hostel = ({ item, index }) => {
	if (!item) {
		return null;
	}

	return (
		<tr>
			<td className="text-start fs-5">{item.name}</td>
			<td className="text-start ">
				<Stars position={index} />
			</td>
		</tr>
	);
};

export default Hostel;
