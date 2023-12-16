import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import HostelMarker from './HostelMarker';

const ChangeView = ({ center }) => {
	const map = useMap();
	map.flyTo(center);
	return null;
};

const Map = ({ hostels, center }) => {
	return (
		<MapContainer
			center={[57.8, -4.1]}
			zoom={9}
			scrollWheelZoom={true}
			className="map"
		>
			<ChangeView center={center} />
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>

			{hostels.map((hostel) => (
				<HostelMarker key={hostel.id} hostel={hostel} />
			))}
		</MapContainer>
	);
};

export default Map;
