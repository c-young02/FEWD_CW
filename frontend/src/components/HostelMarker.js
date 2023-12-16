import React from 'react';
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import HostelModal from './HostelModal';
import useModal from './useModal';

const HostelMarker = ({ hostel }) => {
	const { show, handleShow, handleClose } = useModal();

	const icon = new Icon({
		iconUrl: '/markerIcon.svg',
		iconSize: [40, 40],
	});

	return (
		<>
			<Marker
				position={[hostel.location.lat, hostel.location.long]}
				icon={icon}
				eventHandlers={{
					click: handleShow,
				}}
			/>
			<HostelModal show={show} handleClose={handleClose} hostel={hostel} />
		</>
	);
};

export default HostelMarker;
