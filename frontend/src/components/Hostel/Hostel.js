import React from 'react';
import AverageStars from '../Stars/AverageStars';
import HostelModal from '../HostelModal/HostelModal';
import useModal from '../common/useModal';

const Hostel = ({ item, onHostelClick, refetchHostels }) => {
	const { show, handleShow, handleClose } = useModal();

	const handleClick = () => {
		handleShow();
		onHostelClick(item);
	};

	const calculateAverageStars = () => {
		return item.reviews.map((review) => review.rating);
	};

	return (
		<>
			<tr onClick={handleClick} style={{ cursor: 'pointer' }}>
				<td className="text-start fs-5">{item.name}</td>
				<td className="text-start">
					<AverageStars data={calculateAverageStars()} />
				</td>
			</tr>
			<HostelModal
				show={show}
				handleClose={handleClose}
				hostel={item}
				refetchHostels={refetchHostels}
			/>
		</>
	);
};

export default Hostel;
