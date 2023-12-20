// DropdownMenu.js
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<button
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}
		className="btn btn-link"
	>
		{children}
		<FaEllipsisV className="text-dark" />
	</button>
));

const DropdownMenu = ({ onEdit, onDelete }) => (
	<Dropdown>
		<Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />

		<Dropdown.Menu>
			<Dropdown.Item onClick={onEdit}>Edit</Dropdown.Item>
			<Dropdown.Item onClick={onDelete} className="text-danger">
				Delete
			</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
);

export default DropdownMenu;
