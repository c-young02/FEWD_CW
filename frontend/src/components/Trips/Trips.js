import React, { useEffect, useState } from 'react';
import { authenticate } from '../common/Authenticate'; // Import the verifyLogin function

export default function Trips() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState(''); // Add a state for the username

	useEffect(() => {
		const username = localStorage.getItem('username'); // Get the username from local storage
		setUsername(username); // Set the username
		authenticate(setIsLoggedIn); // Use the verifyLogin function
	}, []);

	if (isLoggedIn) {
		return <p>Hi {username}, you are logged in</p>; // Display the username
	} else {
		return <p>Please log in</p>;
	}
}
