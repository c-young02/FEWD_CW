import React, { useState } from 'react';
import TopNavbar from './components/navbar';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'leaflet/dist/leaflet.css';

function App() {
	const [viewMode, setViewMode] = useState('hostels');

	return (
		<div className="App">
			<TopNavbar viewMode={viewMode} setViewMode={setViewMode} />
			<Home viewMode={viewMode} setViewMode={setViewMode} />
		</div>
	);
}

export default App;