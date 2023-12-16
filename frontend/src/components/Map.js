import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import HostelMarker from './HostelMarker';

const Map = ({ hostels }) => (
	<MapContainer
		center={[57.8, -4.1]}
		zoom={9}
		scrollWheelZoom={true}
		className="map"
	>
		<TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		/>

		{hostels.map((hostel) => (
			<HostelMarker key={hostel.id} hostel={hostel} />
		))}
	</MapContainer>
);

export default Map;
