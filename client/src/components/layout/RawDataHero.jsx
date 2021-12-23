import React, { Fragment } from 'react';
import '../css/RawDataHero.css';

const RawDataHero = () => {
	return (
		<Fragment>
			<section className='data-hero-main'>
				<header className='data-hero-header'>Raw Data</header>
				<br />
				<div className='data-hero-cards-wrapper'>
					<span className='data-hero-card-spacer'>
						<a
							href='https://docs.google.com/spreadsheets/d/1vrtaarKEZpYJ3GE0BR3e92VapOtAVCEKV-FfT1heoho/edit#gid=379863631'
							target='_blank'
							rel='noopener noreferrer'
						>
							<article className='data-hero-card'>
								<i className='far fa-folder-open' />
								<p className='data-hero-card-title'>
									Public Raw Data Sheet
								</p>
							</article>
						</a>
					</span>
					<span className='data-hero-card-spacer'>
						<a
							href='https://docs.google.com/spreadsheets/d/1vrtaarKEZpYJ3GE0BR3e92VapOtAVCEKV-FfT1heoho/edit#gid=379863631'
							target='_blank'
							rel='noopener noreferrer'
						>
							<article className='data-hero-card'>
								<i className='far fa-folder-open' />
								<p className='data-hero-card-title'>
									Public Raw Data Sheet
								</p>
							</article>
						</a>
					</span>
					<span className='data-hero-card-spacer'>
						<a
							href='https://docs.google.com/spreadsheets/d/1vrtaarKEZpYJ3GE0BR3e92VapOtAVCEKV-FfT1heoho/edit#gid=379863631'
							target='_blank'
							rel='noopener noreferrer'
						>
							<article className='data-hero-card'>
								<i className='far fa-folder-open' />
								<p className='data-hero-card-title'>
									Public Raw Data Sheet
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
