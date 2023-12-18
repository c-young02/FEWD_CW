import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			window.location.reload();
		}, 10000); // 10 seconds

		return () => {
			clearTimeout(timeout);
		};
	}, []);

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
