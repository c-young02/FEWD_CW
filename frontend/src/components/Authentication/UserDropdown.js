import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import ManageReviews from '../Reviews/ManageReviews';

const UserDropdown = ({ username, handleLogout }) => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const handleClick = () => {
		handleShow();
	};

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Welcome, {username}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item onClick={handleClick}>Manage Reviews</Dropdown.Item>
					<Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>

			<ManageReviews show={show} handleClose={handleClose} />
		</>
	);
};

export default UserDropdown;
