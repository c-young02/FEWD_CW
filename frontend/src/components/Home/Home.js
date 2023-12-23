import React, { useState } from 'react';
import useFetchHostels from '../common/useFetchHostels';
import Search from '../Hostel/Search';
import Trips from '../Trips/Trips';
import Map from '../Map/Map';
import Loading from '../common/Loading';

// Home component
const Home = ({ viewMode }) => {
	const { status, hostels, refetch } = useFetchHostels(); // Fetch hostels data
	const [center, setCenter] = useState([57.8, -4.1]); // State for map center
	const [selectedTrip, setSelectedTrip] = useState(null); // State for selected trip

	// Function to handle hostel click
	const handleHostelClick = (hostel) => {
		setCenter([hostel.location.lat, hostel.location.long]); // Update map center
	};

	// If data is fetched and hostels are available
	if (status === 'fetched' && hostels.length > 0) {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 my-5">
						{viewMode === 'hostels' ? (
							// Render Search component for hostels view mode
							<Search
								hostels={hostels}
								onHostelClick={handleHostelClick}
								refetchHostels={refetch}
							/>
						) : (
							// Render Trips component for other view modes
							<Trips
								setSelectedTrip={setSelectedTrip}
								selectedTrip={selectedTrip}
							/>
						)}
					</div>
					{/* Render Map component */}
					<div className="col my-5">
						<Map
							hostels={hostels}
							center={center}
							selectedTrip={selectedTrip}
						/>
					</div>
				</div>
			</div>
		);
	} else {
		// Render Loading component while data is being fetched
		return <Loading />;
	}
};

export default Home;
