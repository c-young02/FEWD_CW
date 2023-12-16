import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignUp from './SignUp';
import Login from './Login';
import useModal from './useModal';
import { Button } from 'react-bootstrap';

function TopNavbar({ viewMode, setViewMode }) {
	const { show, handleClose } = useModal();

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			data-bs-theme="dark"
			className="p-3"
		>
			<Container fluid>
				<Navbar.Brand>Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Button
							variant="outline-light"
							onClick={() =>
								setViewMode(viewMode === 'hostels' ? 'trips' : 'hostels')
							}
						>
							Switch to {viewMode === 'hostels' ? 'Trips' : 'Hostels'}
						</Button>
					</Nav>
					<Nav>
						<Login show={show} handleClose={handleClose} />
						<SignUp show={show} handleClose={handleClose} />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNavbar;
