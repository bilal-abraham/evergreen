import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Chart } from '../svg/chart.svg';
import { ReactComponent as Eye } from '../svg/eye.svg';
import { ReactComponent as Archive } from '../svg/archive.svg';
import { ReactComponent as Book } from '../svg/book.svg';
import { ReactComponent as Donate } from '../svg/donate.svg';
import '../css/DropdownMenu.css';

const DropdownMenu = () => {
	const DropdownItem = (props) => {
		return (
			<Link to={props.route} className='menu-item'>
				<span className='icon-button'> {props.leftIcon} </span>
				{props.children}
			</Link>
		);
	};
	return (
		<Fragment>
			<div className='dropdown'>
{/* 				<DropdownItem leftIcon={<Chart />} route='/statistics'>
					Statistics Breakdown
				</DropdownItem> */}
				<DropdownItem leftIcon={<Eye />} route='/findaperson'>
					Find a Person
				</DropdownItem>
				<DropdownItem leftIcon={<Archive />} route='/rawdata'>
					Raw Data
				</DropdownItem>
				<DropdownItem leftIcon={<Book />} route='/readthebook'>
					Read the Book
				</DropdownItem>
				<DropdownItem leftIcon={<Donate />} route='/donate'>
					Donate
				</DropdownItem>
			</div>
		</Fragment>
	);
};

export default DropdownMenu;
