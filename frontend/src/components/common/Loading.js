import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

// Loading is a functional component that displays a loading spinner
const Loading = () => {
	// Use the useEffect hook to set a timeout
	useEffect(() => {
		// If the component is still mounted after 10 seconds, reload the page
		const timeout = setTimeout(() => {
			window.location.reload();
		}, 10000); // 10 seconds

		// Clear the timeout if the component is unmounted before the timeout finishes
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	// Render a spinner and a loading message
	return (
		<div className="d-flex flex-column justify-content-center align-items-center vh-100">
			<Spinner animation="border" role="status">
				<span className="sr-only"></span>
			</Spinner>
			<h1>Loading</h1>
		</div>
	);
};

export default Loading;
