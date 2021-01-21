import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../img/botp-top-2020-variant-cream-outline.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Card } from 'react-bootstrap';
import Tracks from './tracks/tracks';
import Seo from '../../app/seo';
import React from 'react';
import './styles.css';

library.add(faGithub, faTwitter, faInstagram);

export default function Homepage() {

	return (
		<>
			<Seo title='Home' />
			<h1 className='botp-heading'>hello, welcome to</h1>
			<img src={logo} alt='botp logo' className='botp-logo'/>
			<p className='botp-intro pb-5'>
				a music discovery platform,
				digital art gallery and shoppe developed by
				<a
					href='http://ledugani.com/'
					target='_blank'
					rel='noreferrer'
					className='t-link'
				>
					T.Dugan
				</a>
			</p>

			<Card className='best-new-tracks mb-5'>
				<Card.Header className='bnt-header' id='bnt-header'>Best Tracks of 2020</Card.Header>

				<Card.Body className='card-body-bnt'>
					<Tracks playlist='40anMtgzQoKGiqvz7GQcFP' />
				</Card.Body>
			</Card>

			<div className='best-new-tracks'>

				<h2 className='bnt-header'>Best Tracks of 2020</h2>

				<Tracks playlist='40anMtgzQoKGiqvz7GQcFP' />

			</div>

			<div className='best-new-tracks mt-5'>

				<h2 className='bnt-header'>What We're Listening To</h2>

				<Tracks playlist='6MeJe1F5CO3ybwA2a0Q64U' />

			</div>

			<div className='additional-info'>
				<p className='stay-tuned'>
					stay tuned...
				</p>

				<div className='socials'>
					<a href='https://github.com/ledugani' target='_blank' rel='noreferrer' className='social-icon'>
						<FontAwesomeIcon icon={faGithub} size='2x' />
					</a>

					<a href='https://www.instagram.com/anatomicalgift/'  target='_blank' rel='noreferrer' className='social-icon'>
						<FontAwesomeIcon icon={faInstagram} size='2x' />
					</a>

					<a href='https://twitter.com/notthomasdugan'  target='_blank' rel='noreferrer' className='social-icon'>
						<FontAwesomeIcon icon={faTwitter} size='2x' />
					</a>
				</div>
			</div>
		</>
	);
}