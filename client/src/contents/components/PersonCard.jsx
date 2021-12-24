import React, { Fragment } from 'react';
import AvatarM from '../img/avatarm.png';
import AvatarF from '../img/avatarf.png';
import '../css/PersonCard.css';

const PersonCard = (props) => {
	return (
		<Fragment>
			<article className='person-card'>
				<header className='person-card-header'>
					<p>{props.f}</p>
					<h2>{props.l}</h2>
					<h5>Race: {props.r}</h5>
					<h5>Marital Status: {props.m}</h5>
					<h5>Occupation: {props.o}</h5>
					<h5>Cause of Death: {props.c}</h5>
				</header>
				<div className='person-card-death'>
					{props.g === 'Female' && (
						<div className='person-death-avatar' href='#'>
							<img src={AvatarF} alt='female-profile' />
						</div>
					)}
					{props.g === 'Male' && (
						<div className='person-death-avatar' href='#'>
							<img src={AvatarM} alt='male-profile' />
						</div>
					)}
					<svg className='person-half-circle' viewBox='0 0 106 57'>
						<path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
					</svg>
					<div className='person-death'>
						<div className='person-death-name'>Day of Death</div>
						{props.d}
					</div>
				</div>
			</article>
		</Fragment>
	);
};

export default PersonCard;
