import React from 'react';

const HostelInfo = ({ hostel }) => {
	return (
		<>
			<p className="mb-0">Address: {hostel.address}</p>
			<p className="mb-0">Postcode: {hostel.postcode}</p>
			<p className="mb-0">Phone: {hostel.phone}</p>
			<p className="mb-0">Email: {hostel.email}</p>
			<p>Cafe: {hostel.cafe ? 'Yes' : 'No'}</p>
			<p>Description: {hostel.description}</p>
		</>
	);
};

export default HostelInfo;
