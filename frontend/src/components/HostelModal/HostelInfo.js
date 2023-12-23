import React from 'react';

// HostelInfo is a functional component that renders information about a hostel
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
