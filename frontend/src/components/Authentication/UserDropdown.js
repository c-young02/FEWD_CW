import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import ManageReviews from '../Reviews/ManageReviews';

// UserDropdown is a functional component that renders a dropdown menu for the logged-in user
const UserDropdown = ({ username, handleLogout }) => {
	// State variable for managing the visibility of the ManageReviews component
	const [show, setShow] = useState(false);

	// Functions to show and hide the ManageReviews component
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	// Function to show the ManageReviews component when the corresponding menu item is clicked
	const handleClick = () => {
		handleShow();
	};

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle
					variant="secondary"
					id="dropdown-basic"
					className="mx-3"
				>
					<FaUser /> {username}
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
