import React, { Fragment } from 'react';
import { ReactComponent as HomeIcon } from '../contents/svg/temple.svg';
import { ReactComponent as AboutIcon } from '../contents/svg/about.svg';
import { ReactComponent as ArrowDownIcon } from '../contents/svg/arrow-down.svg';
import Navbar from '../contents/components/NavBar';
import NavItem from '../contents/components/NavItem';
import DropdownMenu from '../contents/components/DropdownMenu';
import Hero from '../contents/layout/DonateHero';
import Footer from '../contents/components/Footer';

const Donate = () => {
	return (
		<Fragment>
			<Navbar>
				<NavItem icon={<HomeIcon />} route='/' hasLink={true} />
				<NavItem icon={<AboutIcon />} route='/about' hasLink={true} />
				<NavItem icon={<ArrowDownIcon />} hasLink={false}>
					<DropdownMenu />
				</NavItem>
			</Navbar>
			<Hero />
			<Footer />
		</Fragment>
	);
};

export default Donate;
