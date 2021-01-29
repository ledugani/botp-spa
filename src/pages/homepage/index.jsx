import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../img/botp-top-2020-variant-cream-outline.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Card, Container } from 'react-bootstrap';
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
			<img src={logo} alt='botp logo' className={ window.innerWidth > 400 ? 'botp-logo' : 'botp-logo mb-1' }/>
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

			<Container className='d-flex
					align-items-center
					justify-content-center'
			>
				<Card
					className='best-new-tracks mb-5'
					style={{
						maxWidth: '750px'
					}}
				>
					<Card.Header
						className='bnt-header text-center'
						id='bnt-header'
					>
						What We're Listening To
					</Card.Header>

					<Card.Body className='card-body-bnt'>
						<Tracks playlist='6MeJe1F5CO3ybwA2a0Q64U' />
					</Card.Body>

					<Card.Footer
						className='text-center'
					>
						<a
							href='https://open.spotify.com/playlist/6MeJe1F5CO3ybwA2a0Q64U'
							target='_blank'
							rel="noreferrer"
							style={{
								color: 'var(--botp-champagne)'
							}}
						>See the whole playlist...</a>
					</Card.Footer>
				</Card>
			</Container>

			<Container className='d-flex
					align-items-center
					justify-content-center'
			>
				<Card
					className='best-new-tracks mt-5'
					style={{
						maxWidth: '750px'
					}}
				>
					<Card.Header
						className='bnt-header text-center'
						id='bnt-header'
					>
						Best Tracks of 2020
					</Card.Header>

					<Card.Body className='card-body-bnt'>
						<Tracks playlist='40anMtgzQoKGiqvz7GQcFP' />
					</Card.Body>

					<Card.Footer
						className='text-muted text-center'
					>
						<a
							href='https://open.spotify.com/playlist/40anMtgzQoKGiqvz7GQcFP'
							target='_blank'
							rel="noreferrer"
							style={{
								color: 'var(--botp-champagne)',
								width: '100%'
							}}
						>See the whole playlist...</a>
					</Card.Footer>
				</Card>
			</Container>

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