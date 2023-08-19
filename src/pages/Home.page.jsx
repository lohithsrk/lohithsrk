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
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<>
			<Helmet>
				<meta
					name='description'
					content='Experienced Full Stack and Android developer, creating engaging solutions.'
				/>
				<meta
					name='url'
					content='https://lohith.pro/'
				/>
			</Helmet>
			<div>
				<Header />
				<Banner />
				<About />
				<Services />
				<Work />
				<Contact />
				<Footer />
				<Nav />
			</div>
		</>
	);
};

export default Home;
