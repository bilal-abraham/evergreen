import React, { Fragment } from 'react';
import '../css/ReadTheBookHero.css';

const ReadTheBookHero = () => {
	return (
		<Fragment>
			<section className='book-hero-main'>
				<header className='book-hero-header'>
					Book Writing in Progress...
				</header>
				<div className='book-hero-spin-wrapper'>
					<i className='fas fa-cog fa-pulse' />
				</div>
			</section>
		</Fragment>
	);
};

export default ReadTheBookHero;
