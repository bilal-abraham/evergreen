import React, { Fragment, useState } from 'react';

import Button from '../Button';
import '../css/FindaPersonHero.css';

const FindaPersonHero = () => {
	const [lastName, setLastName] = useState('');
	const [firstName, setFirstName] = useState('');

	const handleXLastClick = () => setLastName('');
	const handleXFirstClick = () => setFirstName('');
	const handleSubmit = () => {
		console.log('submitted');
	};

	return (
		<Fragment>
			<section className='find-hero-main'>
				<header className='find-hero-header'>
					<i className='fa fa-search' />
					&nbsp;Find A Person:
				</header>
				<div className='search'>
					<div className='search-input-wrapper'>
						<input
							className='search-bar'
							type='text'
							placeholder='Last Name'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<div className='find-hero-x'>
							<i
								className='fa fa-times'
								onClick={handleXLastClick}
							/>
						</div>
					</div>
					<br />
					<div className='search-input-wrapper'>
						<input
							className='search-bar'
							type='text'
							placeholder='First Name'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<div className='find-hero-x'>
							<i
								className='fa fa-times'
								onClick={handleXFirstClick}
							/>
						</div>
					</div>
					<div className='find-hero-submit'>
						<button
							className='find-hero-submit-btn'
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default FindaPersonHero;
