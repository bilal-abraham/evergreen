import React, { Fragment } from 'react';
import '../css/RawDataHero.css';

const RawDataHero = () => {
	return (
		<Fragment>
			<section className='data-hero-main'>
				<header className='data-hero-header'>Public Data Sheet:</header>
				<br />
				<div className='data-hero-cards-wrapper'>
					<span className='data-hero-card-spacer'>
						<a
							href='https://docs.google.com/spreadsheets/d/1JtMg-aAgiBz3kwKbkTNb2wJtSTMvlCNqa2L5gYndgfQ/edit?usp=sharing'
							target='_blank'
							rel='noopener noreferrer'
						>
							<article className='data-hero-card'>
								<i className='far fa-folder-open' />
								<p className='data-hero-card-title'>
									Public Polished Data Sheet
								</p>
							</article>
						</a>
					</span>
				</div>
			</section>
		</Fragment>
	);
};

export default RawDataHero;
