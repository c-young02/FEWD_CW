import React, { useState } from 'react';
import useFetchData from '../common/useFetchData';
import Search from '../Hostel/Search';
import Trips from '../Trips/Trips';
import Map from '../Map/Map';
import Loading from '../common/Loading';

const Home = ({ viewMode }) => {
	const { status, hostels } = useFetchData();
	const [center, setCenter] = useState([57.8, -4.1]);
	const [selectedTrip, setSelectedTrip] = useState(null);

	const handleHostelClick = (hostel) => {
		setCenter([hostel.location.lat, hostel.location.long]);
	};

	if (status === 'fetched' && hostels.length > 0) {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 my-5">
						{viewMode === 'hostels' ? (
							<Search hostels={hostels} onHostelClick={handleHostelClick} />
						) : (
							<Trips
								setSelectedTrip={setSelectedTrip}
								selectedTrip={selectedTrip}
							/>
						)}
					</div>
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
		return <Loading />;
	}
};

export default Home;
