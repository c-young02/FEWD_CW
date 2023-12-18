import React from 'react';
import AverageStars from '../Stars/AverageStars';
import HostelModal from '../Hostel/HostelModal';
import useModal from '../common/useModal';

const Hostel = ({ item, onHostelClick }) => {
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
					<AverageStars data={item.reviews.map((review) => review.rating)} />
				</td>
			</tr>
			<HostelModal show={show} handleClose={handleClose} hostel={item} />
		</>
	);
};

export default Hostel;
