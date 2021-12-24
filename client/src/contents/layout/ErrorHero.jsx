import React, { Fragment, useState, useEffect } from 'react';
// import Logo from '../svg/cemetery.svg';
import Button from '../components/Button';
import '../css/ErrorHero.css';

const ErrorHero = () => {
	const [glitchyNum, setGlitchyNum] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setGlitchyNum(
				(glitchyNum) => glitchyNum + Math.random() * 10000000000000
			);
		}, 50);
		return () => clearInterval(interval);
	}, []);
	const CreateStar = () => {
		let top = Math.random() * window.innerHeight;
		let right = Math.random() * window.innerWidth;
		return (
			<Fragment>
				<div
					className='error-hero-star'
					style={{ top: `${top}px`, right: `${right}px` }}
				/>
			</Fragment>
		);
	};
	return (
		<Fragment>
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<CreateStar />
			<section className='error-hero-main' id='error-hero-body'>
				<div className='error-hero-text'>
					<div>ERROR</div>
					<h1 className='error-hero-header'>404</h1>
					<hr />
					<div>Page Not Found</div>
					<div>{glitchyNum}</div>
				</div>
				<div className='error-hero-astronaut'>
					<img
						className='src'
						src='https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png'
						alt='404img'
					/>
					{/* <img className='src' src={Logo} alt='404img' /> */}
				</div>
				<br />
				<Button link='/' title='Go Home' />
			</section>
		</Fragment>
	);
};

export default ErrorHero;
