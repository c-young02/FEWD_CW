import React from 'react';
import useFetchData from './useFetchData';
import Search from './Search';

const Home = () => {
	const { status, hostels } = useFetchData();
	console.log('Status is:', status);
	console.log('Hostels are:', hostels);

	if (status === 'fetched' && hostels.length > 0) {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 my-5">
						<Search hostels={hostels} />
					</div>
					<div className="col">
						<h1>Map</h1>
					</div>
				</div>
			</div>
		);
	} else {
		return <p>Loading...</p>;
	}
};

export default Home;
