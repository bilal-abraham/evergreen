import React, { Fragment, useState } from 'react';
import lnames from '../data/lnames';
import fnames from '../data/fnames';
import * as stats from '../functions/getStats';

import '../css/FindaPersonHero.css';

const FindaPersonHero = () => {
	let lNames = lnames.split('\n');
	let fNames = fnames.split('\n');
	let matchingVals = [];
	let matchingPeople = [];
	const [lastName, setLastName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [results, setResults] = useState([{}]);
	const [hasResults, setHasResults] = useState(false);

	const addMatchingFields = (x) => {
		matchingPeople.push({
			firstName: stats.getFirstName(x),
			lastName: stats.getLastName(x),
			gender: stats.getGender(x),
			race: stats.getRace(x),
			dayOfDeath: stats.getDayofDeath(x),
			maritalStatus: stats.getMaritalStatus(x),
			occupation: stats.getOccupation(x),
			causeofDeath: stats.getCauseofDeath(x),
		});
		setHasResults(true);
	};
	const handleSubmit = () => {
		matchingVals = [];
		matchingPeople = [];
		for (let i = 0; i < lNames.length; i++) {
			if (
				lNames[i].toLowerCase() === lastName.toLowerCase() ||
				fNames[i].toLowerCase() === firstName.toLowerCase()
			)
				matchingVals.push(i);
		}
		for (const val of matchingVals) {
			addMatchingFields(val);
		}
		setResults(matchingPeople);
		console.log(matchingPeople);
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
								onClick={() => setLastName('')}
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
								onClick={() => setFirstName('')}
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
				{hasResults && (
					<div className='find-hero-display-results'>
						<header className='find-hero-results-title'>
							<i className='fa fa-users' />
							&nbsp;Results:
						</header>
						<div className='find-hero-cards-wrapper'>
							{results.map(
								({
									firstName,
									lastName,
									gender,
									race,
									dayOfDeath,
									maritalStatus,
									occupation,
									causeofDeath,
								}) => (
									<article className='find-hero-card'>
										<div className=''>
											First Name: {firstName}
										</div>
										<div className=''>
											Last Name: {lastName}
										</div>
										<div className=''>Gender: {gender}</div>
										<div className=''>Race: {race}</div>
										<div className=''>
											Day of Death: {dayOfDeath}
										</div>
										<div className=''>
											Marital Status: {maritalStatus}
										</div>
										<div className=''>
											Occupation: {occupation}
										</div>
										<div className=''>
											Cause of Data: {causeofDeath}
										</div>
									</article>
								)
							)}
						</div>
					</div>
				)}
			</section>
		</Fragment>
	);
};

export default FindaPersonHero;
