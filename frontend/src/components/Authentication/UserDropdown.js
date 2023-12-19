import React from 'react';
import { Dropdown } from 'react-bootstrap';

const UserDropdown = ({ username, handleLogout }) => (
	<Dropdown>
		<Dropdown.Toggle variant="success" id="dropdown-basic">
			Welcome, {username}
		</Dropdown.Toggle>

		<Dropdown.Menu>
			<Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
);

export default UserDropdown;
