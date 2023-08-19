import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='md:py-8 p-5'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center'>
					<Link
						to='home'
						className='text-gradient font-bold text-lg cursor-pointer'
					>
						lohith.pro
					</Link>
					{/* <Link to='contact' activeClass='active' smooth={true} offset={-200}>
						<button className='btn btn-sm'>Work with me</button>
					</Link> */}
					<Link to='/survey/your-insights-matter'>
						<button className='btn btn-sm'>Survey</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
