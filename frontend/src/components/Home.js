import React, { useState } from 'react';
import useFetchData from './useFetchData';
import Search from './Search';
import Map from './Map';

const Home = () => {
	const { status, hostels } = useFetchData();
	const [center, setCenter] = useState([57.8, -4.1]);

	const handleHostelClick = (hostel) => {
		setCenter([hostel.location.lat, hostel.location.long]);
	};

	if (status === 'fetched' && hostels.length > 0) {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 my-5">
						<Search hostels={hostels} onHostelClick={handleHostelClick} />
					</div>
					<div className="col my-5">
						<Map hostels={hostels} center={center} />
					</div>
				</div>
			</div>
		);
	} else {
		return <p>Loading...</p>;
	}
};

export default Home;
