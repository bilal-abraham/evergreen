import React, { Fragment } from 'react';
import Logo from '../svg/cemetery.svg';
import Button from '../components/Button';
import '../css/HomeHero.css';

const HomeHero = () => {
	return (
		<Fragment>
			<section className='home-hero-main'>
				<br />
				<br />
				<img className='home-hero-img' src={Logo} alt='cemetery-logo' />
				<br />
				<br />
				<header className='home-hero-header'>
					The Evergreen Cemetery
				</header>
				<br />
				<p className='home-hero-subtext'>Beaumont, TX</p>
				<br />
				<br />
				<Button link='/about' title='Learn More' />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</section>
		</Fragment>
	);
};

export default HomeHero;
