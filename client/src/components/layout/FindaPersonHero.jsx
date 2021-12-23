import React, { Fragment, useState } from 'react';
import * as stats from '../functions/getStats';
import lnames from '../data/lnames';
import fnames from '../data/fnames';
import PersonCard from '../PersonCard';
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
	const [individualSearch, setIndividualSearch] = useState(false);
	const [individualStrClass, setIndividualStrClass] = useState(
		'find-hero-cards-wrapper'
	);
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
	const giveRandomExample = (e) => {
		let rand = Math.floor(Math.random() * 3);
		let str;
		if (rand === 0) str = 'Williams';
		if (rand === 1) str = 'Johnson';
		if (rand === 2) str = 'Taylor';
		if (e === 0) {
			return alert(
				`\nThose values didn't match any in our Database. \n\nTry typing "${str}" into the Last Name field as an example & clicking "Search".`
			);
		} else if (e === 1) {
			return alert(
				`\nHaving trouble searching for a deceased member of the Cemetery? \n\nTry typing "${str}" into the Last Name field & clicking "Search".`
			);
		} else if (e === 2) {
			return alert(
				`\nHaving trouble searching for a deceased member of the Cemetery? \n\nTry typing "John" into the First Name field & clicking "Search".`
			);
		}
	};
	const handleSubmit = () => {
		setHasResults(false);
		setIndividualStrClass('find-hero-cards-wrapper');
		matchingVals = [];
		matchingPeople = [];
		for (let i = 0; i < lNames.length; i++) {
			if (individualSearch) {
				if (
					lNames[i].toLowerCase() === lastName.toLowerCase() &&
					fNames[i].toLowerCase() === firstName.toLowerCase()
				) {
					matchingVals.push(i);
					setIndividualStrClass('find-hero-cards-wrapper-center');
				}
			} else if (!individualSearch) {
				if (
					lNames[i].toLowerCase() === lastName.toLowerCase() ||
					fNames[i].toLowerCase() === firstName.toLowerCase()
				) {
					matchingVals.push(i);
				}
			}
		}
		for (const val of matchingVals) {
			addMatchingFields(val);
		}
		setResults(matchingPeople);
		if (!matchingVals.length) {
			giveRandomExample(0);
		}
	};
	return (
		<Fragment>
			<section className='find-hero-main'>
				<header className='find-hero-header'>
					<i className='fa fa-search' />
					&nbsp;Find A Person:
				</header>
				<label className='find-hero-individual-wrapper'>
					Individual Search?&nbsp;&nbsp;
					<select
						className='find-hero-selector'
						value={individualSearch}
						onChange={(e) => setIndividualSearch(e.target.value)}
					>
						<option value={false}>No</option>
						<option value={true}>Yes</option>
					</select>
				</label>
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
								class='fas fa-info-circle'
								onClick={() => giveRandomExample(1)}
							/>
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
								class='fas fa-info-circle'
								onClick={() => giveRandomExample(2)}
							/>
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
							Search
						</button>
					</div>
				</div>
				{hasResults && (
					<div className='find-hero-display-results'>
						<header className='find-hero-results-title'>
							<i className='fa fa-users' />
							&nbsp;Results:
						</header>
						<div className={individualStrClass}>
							{results.map(
								({
									firstName,
									lastName,
									gender,
									race,
									maritalStatus,
									occupation,
									causeofDeath,
									dayOfDeath,
								}) => (
									<PersonCard
										key={dayOfDeath + causeofDeath}
										f={firstName}
										l={lastName}
										g={gender}
										r={race}
										c={causeofDeath}
										m={maritalStatus}
										o={occupation}
										d={dayOfDeath}
									/>
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
