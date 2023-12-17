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
						<span
							className="mx-3"
							onClick={() =>
								setViewMode(viewMode === 'hostels' ? 'trips' : 'hostels')
							}
							style={{ cursor: 'pointer', color: 'white' }}
						>
							View {viewMode === 'hostels' ? 'Trips' : 'Hostels'}
						</span>
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
