import React from 'react';
import { MapContainer, TileLayer, useMap, Polyline } from 'react-leaflet';
import HostelMarker from './HostelMarker';

const ChangeView = ({ center }) => {
	const map = useMap();
	map.flyTo(center);
	return null;
};

const Map = ({ hostels, center, trips }) => {
	const initializeMap = (hostels) => {
		return hostels.map((hostel) => (
			<HostelMarker key={hostel.id} hostel={hostel} />
		));
	};

	// Check if trips is defined and not empty
	const coordinates =
		trips && trips.length > 0
			? trips.map((trip) => [trip.hostel.lat, trip.hostel.long])
			: [];

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
			{initializeMap(hostels)}
			{/* Add a polyline for the trip route if coordinates is not empty */}
			{coordinates.length > 0 && (
				<Polyline positions={coordinates} color="blue" />
			)}
		</MapContainer>
	);
};

export default Map;
