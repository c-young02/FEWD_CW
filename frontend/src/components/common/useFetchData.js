import { useEffect, useState, useCallback } from 'react';

const useFetchData = () => {
	const [status, setStatus] = useState('idle');
	const [hostels, setHostels] = useState([]);
	const [error, setError] = useState(null);

	const fetchData = useCallback(() => {
		setStatus('loading');
		setError(null);

		const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
		fetch(`${baseUrl}/hostels`)
			.then((response) => response.json())
			.then((incomingData) => {
				setHostels(incomingData);
				setStatus('fetched');
			})
			.catch((err) => {
				console.error(err);
				setStatus('error');
				setError(err);
			});
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { status, hostels, error };
};

export default useFetchData;
