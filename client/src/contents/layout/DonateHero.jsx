import React, { Fragment } from 'react';
import '../css/Button.css'
import '../css/DonateHero.css';

const DonateHero = () => {
	return (
		<Fragment>
			<section className='donate-hero-main'>
				<header className='donate-hero-header'>
					Donate to help Evergreen & more projects like this!
				</header>
				<br />
				<br />
				<br />
				<br />
				<header className='donate-hero-header'>
					<a className='btn' href='https://www.beaumonttexas.gov/272/Library-Commissions-Donations' target='_blank' rel='noreferrer'>
						Donate!
					</a>
				</header>
			</section>
		</Fragment>
	);
};

export default DonateHero;
