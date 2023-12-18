import React, { useState, useMemo } from 'react';
import { Modal, InputGroup } from 'react-bootstrap';
import Rating from './Rating';
import Reviews from './Reviews';
import useModal from '../common/useModal';
import SearchInput from '../common/SearchInput';

const HostelReviews = ({ hostel: { name, reviews } }) => {
	const { show, handleShow, handleClose } = useModal();
	const [activeKey, setActiveKey] = useState(null);
	const [searchField, setSearchField] = useState('');

	const filteredReviews = useMemo(
		() =>
			reviews.filter((review) =>
				review.review.toLowerCase().includes(searchField.toLowerCase())
			),
		[reviews, searchField]
	);

	return (
		<>
			<span className="mb-0" role="button" onClick={handleShow}>
				Read Reviews ({reviews.length})
			</span>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{name} Reviews</Modal.Title>
				</Modal.Header>
				<Rating reviews={reviews} />
				<InputGroup className="p-3">
					<SearchInput value={searchField} onChange={setSearchField} />
				</InputGroup>
				<Modal.Body className="mb-3">
					<Reviews
						reviews={filteredReviews}
						activeKey={activeKey}
						setActiveKey={setActiveKey}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default HostelReviews;
