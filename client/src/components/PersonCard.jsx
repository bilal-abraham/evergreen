import React, { Fragment } from 'react';

import Avatar from './img/avatar.png';
import './css/PersonCard.css';

const PersonCard = (props) => {
	return (
		<Fragment>
			<article className='card'>
				<header className='card-header'>
					<p>{props.f}</p>
					<h2>{props.l}</h2>
				</header>
				<div className='card-author'>
					<a className='author-avatar' href='#'>
						<img src={Avatar} />
					</a>
					<svg className='half-circle' viewBox='0 0 106 57'>
						<path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
					</svg>
					<div className='author-name'>
						<div className='author-name-prefix'>Author</div>
						Jeff Delaney
					</div>
				</div>
			</article>
		</Fragment>
	);
};

export default PersonCard;
