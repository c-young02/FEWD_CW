import React, { useState, useMemo, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

const HostelModal = ({ show, handleClose, hostel, refetchHostels }) => {
	const { name, reviews } = hostel;
	const [showReviews, setShowReviews] = useState(false);
	const [searchField, setSearchField] = useState('');
	const [activeKey, setActiveKey] = useState(null);

	const filteredReviews = useMemo(
		() =>
			reviews.filter((review) =>
				review.review.toLowerCase().includes(searchField.toLowerCase())
			),
		[reviews, searchField]
	);

	const toggleReviews = useCallback(() => {
		setShowReviews((prevShowReviews) => !prevShowReviews);
	}, []);

	return (
		<Modal show={show} onHide={handleClose} size="lg" centered>
			<ModalHeader name={name} handleClose={handleClose} />
			<ModalBody
				hostel={hostel}
				showReviews={showReviews}
				toggleReviews={toggleReviews}
				searchField={searchField}
				setSearchField={setSearchField}
				filteredReviews={filteredReviews}
				activeKey={activeKey}
				setActiveKey={setActiveKey}
				refetchHostels={refetchHostels}
			/>
		</Modal>
	);
};

export default HostelModal;
