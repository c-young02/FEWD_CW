import React from 'react';
import AverageStars from '../Stars/AverageStars';
import HostelModal from '../HostelModal/HostelModal';
import useModal from '../common/useModal';

// Hostel is a functional component that renders a single hostel row and a modal for the hostel
const Hostel = ({ item, onHostelClick, refetchHostels }) => {
	const { show, handleShow, handleClose } = useModal(); // Use the useModal custom hook

	// Function to handle click events on the hostel row
	const handleClick = () => {
		handleShow(); // Show the modal
		onHostelClick(item); // Call the onHostelClick function with the hostel item
	};

	// Function to calculate the average rating of the hostel
	const calculateAverageStars = () => {
		return item.reviews.map((review) => review.rating); // Return an array of ratings
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
