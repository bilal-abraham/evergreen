import React, { Fragment } from 'react';
import '../css/AboutCard.css';

const AboutCard = (props) => {
	return (
		<Fragment>
			<div className='card-info'>
				<h5 className='card-header'>{props.name}</h5>
				<p className='card-role'>{props.role}</p>
				<div className='card-social-links'>
					{props.hasGitHub && (
						<a className='card-link' href={props.github}>
							<span className='fa fa-github' />
						</a>
					)}
					{props.hasGram && (
						<a className='card-link' href={props.gram}>
							<span className='fa fa-instagram' />
						</a>
					)}
					<a className='card-link' href={props.linkedin}>
						<span className='fa fa-linkedin' />
					</a>
				</div>
			</div>
		</Fragment>
	);
};

export default AboutCard;
