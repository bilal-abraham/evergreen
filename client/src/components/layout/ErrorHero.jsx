import React, { Fragment } from 'react';

import Logo from '../svg/cemetery.svg';
import Button from '../Button';
import '../css/ErrorHero.css';

// let jsx = document.getElementById('error-hero-body');
// console.log(jsx)
// const createStar = () => {
//     let right = Math.random()*2560;
//     let top = Math.random()*800;
//     let star = document.createElement('div');
//     star.classList.add('error-hero-star')
//     jsx.appendChild(star);
//     setInterval(runStar,10);
//     star.style.top = top + 'px';

//     function runStar() {
//         if (right >= 2560){
//             star.remove();
//         }
//         right += 3;
//         star.style.right = right + 'px';
//     }
// }
// setInterval(createStar, 100);

const ErrorHero = () => {
	return (
		<Fragment>
			<section className='error-hero-main' id='error-hero-body'>
				<div className='error-hero-text'>
					<div>ERROR</div>
					<h1 className='error-hero-header'>404</h1>
					<hr />
					<div>Page Not Found</div>
				</div>
				<div className='error-hero-astronaut'>
					{/* <img className='src' src='https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png' alt='404img'/> */}
					<img className='src' src={Logo} alt='404img' />
				</div>
				<br />
				<Button link='/' title='Go Home?' />
			</section>
		</Fragment>
	);
};

export default ErrorHero;
