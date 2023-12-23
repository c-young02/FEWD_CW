import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthModal from '../Authentication/AuthModal';
import useModal from '../common/useModal';

// TopNavbar is a functional component that renders a navigation bar at the top of the page
function TopNavbar({ viewMode, setViewMode }) {
	const { show, handleClose } = useModal(); // Custom hook for modal functionality

	// Function to toggle the view mode between 'hostels' and 'trips'
	const toggleViewMode = () => {
		setViewMode(viewMode === 'hostels' ? 'trips' : 'hostels');
	};

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			className="p-3"
		>
			<Container fluid>
				<Navbar.Brand>Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link onClick={toggleViewMode} className="text-light">
							View {viewMode === 'hostels' ? 'Trips' : 'Hostels'}
						</Nav.Link>
					</Nav>
					<Nav>
						<AuthModal show={show} handleClose={handleClose} />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNavbar;
