import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavbar() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			data-bs-theme="dark"
			className="p-3"
		>
			<Container fluid>
				<Navbar.Brand href="#home">Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#Hostels">Hostels</Nav.Link>
						<Nav.Link href="#Trips">Trips</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#Login">Login</Nav.Link>
						<Nav.Link href="#Register">Register</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNavbar;
