import React, { Fragment } from 'react';
import { ReactComponent as HomeIcon } from '../components/svg/temple.svg';
import { ReactComponent as AboutIcon } from '../components/svg/about.svg';
import { ReactComponent as ArrowDownIcon } from '../components/svg/arrow-down.svg';
import Navbar from '../components/NavBar';
import NavItem from '../components/NavItem';
import DropdownMenu from '../components/DropdownMenu';
import Hero from '../components/layout/RawDataHero';
import Footer from '../components/Footer';

const RawData = () => {
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

export default RawData;
