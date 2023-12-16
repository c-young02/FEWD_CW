import React from 'react';
import Stars from './Stars';
import HostelModal from './HostelModal';
import useModal from './useModal';

const Hostel = ({ item, index, onHostelClick }) => {
	const { show, handleShow, handleClose } = useModal();

	const handleClick = () => {
		handleShow();
		onHostelClick(item);
	};

	return (
		<>
			<tr onClick={handleClick} style={{ cursor: 'pointer' }}>
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
