import { useEffect, useState, useCallback } from 'react';

const useFetchData = () => {
	const [status, setStatus] = useState('idle');
	const [hostels, setHostels] = useState([]);

	const fetchData = useCallback(() => {
		const url = 'http://localhost:3001/hostels';
		fetch(url)
			.then((response) => response.json())
			.then((incomingData) => {
				console.log(incomingData);
				setHostels(incomingData);
				setStatus('fetched');
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { status, hostels };
};
export default useFetchData;
