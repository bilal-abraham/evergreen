import React, { Fragment } from 'react';
import Button from '../components/Button'
import '../css/DonateHero.css';

const DonateHero = () => {
	return (
		<Fragment>
			<section className='donate-hero-main'>
				<header className='donate-hero-header'>
					Donate to Help this & Projects like this Going
				</header>
				<br />
				<br />
				<br />
				<br />
				<header className='donate-hero-header'>
					<Button link='https://www.beaumonttexas.gov/272/Library-Commissions-Donations' title='Donate Here!' />
				</header>
			</section>
		</Fragment>
	);
};

export default DonateHero;
