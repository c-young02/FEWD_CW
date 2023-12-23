import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'leaflet/dist/leaflet.css';

import TopNavbar from './components/Navbar/navbar';
import Home from './components/Home/Home';

import './App.css';

function App() {
	const [viewMode, setViewMode] = useState('hostels');

	return (
		<>
			<TopNavbar viewMode={viewMode} setViewMode={setViewMode} />
			<Home viewMode={viewMode} setViewMode={setViewMode} />
		</>
	);
}

export default App;
