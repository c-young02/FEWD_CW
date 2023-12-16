import React from 'react';
import useFetchData from './useFetchData';
import Search from './Search';
import Map from './Map';

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
					<div className="col my-5">
						<Map hostels={hostels} />
					</div>
				</div>
			</div>
		);
	} else {
		return <p>Loading...</p>;
	}
};

export default Home;
