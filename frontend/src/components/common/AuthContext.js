import React, { createContext, useState, useEffect } from 'react';
import { authenticate } from './Authenticate';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState('');

	useEffect(() => {
		const username = localStorage.getItem('username');
		setUsername(username);
		authenticate(setIsLoggedIn);
	}, []);

	return (
		<AuthContext.Provider value={{ isLoggedIn, username }}>
			{children}
		</AuthContext.Provider>
	);
};
