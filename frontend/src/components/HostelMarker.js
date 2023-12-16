import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const HostelMarker = ({ hostel }) => {
	const icon = new Icon({
		iconUrl: '/markerIcon.svg',
		iconSize: [40, 40],
	});

	return (
		<Marker position={[hostel.location.lat, hostel.location.long]} icon={icon}>
			<Popup>
				<h2>{hostel.name}</h2>
				<p>{hostel.description}</p>
			</Popup>
		</Marker>
	);
};

export default HostelMarker;
