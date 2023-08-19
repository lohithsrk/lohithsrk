import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
	Banner,
	Header,
	About,
	Services,
	Work,
	Contact
} from '../components/home';

const Home = () => {
	return (
		<div >
			<Header />
			<Banner />
			<About />
			<Services />
			<Work />
			<Contact />
			<Footer />
			<Nav />
		</div>
	);
};

export default Home;
