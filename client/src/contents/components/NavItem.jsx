import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavItem.css';

const NavItem = (props) => {
	const [open, setOpen] = useState(false);
	return (
		<Fragment>
			<li className='nav-item'>
				{props.hasLink && (
					<Link
						to={props.route}
						className='icon-button'
						onClick={() => setOpen(!open)}
					>
						{props.icon}
					</Link>
				)}
				{!props.hasLink && (
					<div className='icon-button' onClick={() => setOpen(!open)}>
						{props.icon}
					</div>
				)}
			</li>
			{open && props.children}
		</Fragment>
	);
};

export default NavItem;
