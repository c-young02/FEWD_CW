import React from 'react';
import TopNavbar from './components/navbar';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'leaflet/dist/leaflet.css';

function App() {
	return (
		<div className="App">
			<TopNavbar />
			<Home />
		</div>
	);
}

export default App;
