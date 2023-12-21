import { useEffect, useState, useCallback } from 'react';

const useFetchHostels = () => {
	const [hostels, setHostels] = useState([]);
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);
	const [refetchIndex, setRefetchIndex] = useState(0); // For triggering refetch

	const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

	const fetchHostels = useCallback(() => {
		setStatus('loading');
		setError(null);

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
	}, [baseUrl, refetchIndex]); // Add refetchIndex to dependencies

	useEffect(() => {
		fetchHostels();
	}, [fetchHostels]);

	const refetch = () => setRefetchIndex(refetchIndex + 1); // Function to trigger refetch

	return { status, hostels, error, refetch };
};

export default useFetchHostels;
