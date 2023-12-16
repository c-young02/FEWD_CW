import React from 'react';
import Stars from './Stars';
import HostelModal from './HostelModal';
import useModal from './useModal';

const Hostel = ({ item, index }) => {
	const { show, handleShow, handleClose } = useModal();

	return (
		<>
			<tr onClick={handleShow} style={{ cursor: 'pointer' }}>
				<td className="text-start fs-5">{item.name}</td>
				<td className="text-start">
					<Stars position={index} />
				</td>
			</tr>
			<HostelModal show={show} handleClose={handleClose} hostel={item} />
		</>
	);
};

export default Hostel;
