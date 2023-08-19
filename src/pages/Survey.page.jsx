import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../components/home';
import Footer from '../components/Footer';

const Survey = () => {
	return (
		<>
			<Helmet>
				<meta
					property='og:title'
					content='Empowering Your Fitness Journey (Survey)'
				/>
				<meta
					property='og:description'
					content="Spill the beans on your fitness struggles! We're cooking up solutions that fit you best. Your voice, your fitness—let's make it happen!"
				/>
				<meta property='og:image' content='./seo.webp' />
				<meta
					property='og:url'
					content='https://lohith.pro/survey/your-insights-matter'
				/>
			</Helmet>
			<div>
				<Header />
				<div className='px-5'>
					<iframe
						title='Form'
						src='https://docs.google.com/forms/d/e/1FAIpQLSeRvJvveRxCEXQWg_OAcQKHTVOQ0GNsIZ33ogVAvs9ooboBWg/viewform?embedded=true'
						className='w-full md:w-1/2 h-screen mx-auto '
					>
						Loading…
					</iframe>
				</div>
				<br />
				<Footer />
			</div>
		</>
	);
};

export default Survey;
