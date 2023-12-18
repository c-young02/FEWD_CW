import React from 'react';
import { Marker, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import HostelModal from '../Hostel/HostelModal';
import useModal from '../common/useModal';

const HostelMarker = ({ hostel }) => {
	const { show, handleShow, handleClose } = useModal();
	const map = useMap();

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
					click: () => {
						handleShow();
						map.panTo([hostel.location.lat, hostel.location.long]);
					},
				}}
			/>
			<HostelModal show={show} handleClose={handleClose} hostel={hostel} />
		</>
	);
};

export default HostelMarker;
