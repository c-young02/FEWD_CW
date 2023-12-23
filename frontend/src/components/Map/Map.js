import React from 'react';
import { MapContainer, TileLayer, useMap, Polyline } from 'react-leaflet';
import HostelMarker from './HostelMarker';

// ChangeView is a functional component that changes the view of the map to a given center
const ChangeView = ({ center }) => {
	const map = useMap(); // Hook to access the Leaflet map instance
	map.flyTo(center); // Change the view of the map to the given center
	return null;
};

// Map is a functional component that renders a map with hostel markers and a trip route
const Map = ({ hostels, center, selectedTrip }) => {
	const initializeMap = (hostels) => {
		return hostels.map((hostel) => (
			<HostelMarker key={hostel.id} hostel={hostel} /> // Render a HostelMarker for each hostel
		));
	};

	// Check if trips is defined and not empty
	const coordinates =
		selectedTrip && selectedTrip.stages && selectedTrip.stages.length > 0
			? selectedTrip.stages.map((stage) => [
					stage.location.lat,
					stage.location.long,
			  ]) // Extract the coordinates of each stage of the trip
			: [];

	return (
		<MapContainer
			center={[57.8, -4.1]} // Initial center of the map
			zoom={9} // Initial zoom level
			scrollWheelZoom={true} // Enable zooming with the scroll wheel
			className="map"
		>
			<ChangeView center={center} />
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL for the tile layer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Attribution for the tile layer
			/>
			{initializeMap(hostels)}
			{/* Add a line for the trip route if coordinates is not empty */}
			{coordinates.length > 0 && (
				<Polyline positions={coordinates} color="blue" /> // Render a polyline for the trip route
			)}
		</MapContainer>
	);
};

export default Map; // Export Map as a default export
