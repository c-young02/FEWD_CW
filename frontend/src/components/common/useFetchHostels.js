import { useEffect, useState, useCallback } from 'react';

const useFetchHostels = () => {
	const [hostels, setHostels] = useState([]);
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);
	const [refetchIndex, setRefetchIndex] = useState(0);

	const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001'; // Base URL for API

	// Function to fetch hostels from API
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
	}, [baseUrl]);

	// Effect hook to call fetchHostels on component mount and whenever refetchIndex changes
	useEffect(() => {
		fetchHostels();
	}, [fetchHostels, refetchIndex]);

	// Function to trigger refetch
	const refetch = () => setRefetchIndex(refetchIndex + 1);

	return { status, hostels, error, refetch };
};

export default useFetchHostels;
