import React from 'react';
import { Marker, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import HostelModal from '../HostelModal/HostelModal';
import useModal from '../common/useModal';

// HostelMarker is a functional component that renders a marker for a hostel on a map
const HostelMarker = ({ hostel }) => {
	const { show, handleShow, handleClose } = useModal(); // Custom hook for modal functionality
	const map = useMap(); // Hook to access the Leaflet map instance

	const icon = new Icon({
		iconUrl: '/markerIcon.svg', // location for the marker icon
		iconSize: [40, 40], // Size of the marker icon
	});

	const handleClick = () => {
		handleShow(); // Show the modal when the marker is clicked
		map.panTo([hostel.location.lat, hostel.location.long]); // Pan the map to the marker's location
	};

	return (
		<>
			<Marker
				position={[hostel.location.lat, hostel.location.long]} // Position of the marker
				icon={icon}
				eventHandlers={{
					click: handleClick,
				}}
			/>
			{/* Modal for the hostel */}
			<HostelModal show={show} handleClose={handleClose} hostel={hostel} />
		</>
	);
};

export default HostelMarker;
