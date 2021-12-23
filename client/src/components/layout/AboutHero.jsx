import React, { Fragment } from 'react';
import AboutCard from '../AboutCard';
import '../css/AboutHero.css';

const AboutHero = () => {
	return (
		<Fragment>
			<section className='about-hero-main'>
				<div className='about-container'>
					<div className='about-row'>
						<div className='about-section-title'>
							<header className='about-header'>
								Finding the End of Life Story in an African
								American Community:
							</header>
							<p className='about-p'>
								Evergreen Cemetery was an abandoned cemetery in
								Beaumont, Texas. Sandra Wilturner discovered the
								cemetery in 1999 and remains diligent today with
								managing upkeep, improvements, and events to
								support the cause. The first edition of the
								Evergreen Cemetery in Beaumont, Texas project is
								located in the Regional Library in Tampa,
								Florida. The book was completed with a goal to
								make it easier to obtain financial support and
								guidance from national, state, and county
								cemetery community. The first-edition included
								death certificates of 125 people buried at
								Evergreen Cemetery, featuring an article about
								the 370th Infantry, in World War I (the first
								African-American Regiment). Sargent George Shaw
								was a soldier in the 370th Infantry and is
								burried at Evergreen Cemetery. There was no
								death certificate included because he died in
								action November 3, 1918. Between the first and
								second edition many significant updates were
								maded. This second edition is the culmination of
								continuous the evergreens research. Our original
								goal was to find up to 800 deceased, but we
								ended up reaching 1,081. The data was compiled
								from death certificates located on
								FamilySearch.org. This data provides a glimpse
								of those buried in the cemetery and tells a
								short story of their life.
							</p>
						</div>
					</div>
					<br />
					<br />
					<div className='about-row'>
						<div className='about-team-items'>
							<div className='about-card-wrapper'>
								<AboutCard
									name='Bilal Abraham'
									role='Web-Developer'
									hasGitHub={true}
									github='https://github.com/bilal-abraham'
									hasGram={true}
									gram='https://www.instagram.com/bilalabraham_/'
									linkedin='https://www.linkedin.com/in/bilal-abraham-3140491b8/'
								/>
							</div>
							<div className='about-card-wrapper'>
								<AboutCard
									name='Lillie Samuels'
									role='Genealogist'
									hasGitHub={true}
									github='https://github.com/ldonzells'
									linkedin='https://www.linkedin.com/in/lillie-samuels/'
								/>
							</div>
							<div className='about-card-wrapper'>
								<AboutCard
									name='Amitra Mamdouhi'
									role='Data Analyst'
									linkedin='https://wwwlinkedin.com'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default AboutHero;
