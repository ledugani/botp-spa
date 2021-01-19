import React from 'react';
import Seo from '../../app/seo';
import Tracks from './tracks/tracks';
import logo from '../img/botp-top-2020-variant-cream-outline.svg';
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faTwitter, faInstagram);

export default function Homepage() {

	return (
		<>
			<Seo title="Home" />
			<h1 className="botp-heading">hello, welcome to</h1>
			<img src={logo} alt="botp logo" className="botp-logo"/>
			<p className="botp-intro">
				a music discovery platform,
				digital art gallery and shoppe developed by
				<a
					href="http://ledugani.com/"
					target="_blank"
					rel="noreferrer"
					className='t-link'
				>
					T.Dugan
				</a>
			</p>

			{/* Best New Tracks */}
			<div className="best-new-tracks">

				<h2 className="bnt-header">Best Tracks of 2020</h2>

				<Tracks />

			</div>

			<div className="additional-info">
				<p className="stay-tuned">
					stay tuned...
				</p>

				<div className="socials">
					<a href="https://github.com/ledugani" target="_blank" rel="noreferrer" className="social-icon">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</a>

					<a href="https://www.instagram.com/anatomicalgift/"  target="_blank" rel="noreferrer" className="social-icon">
						<FontAwesomeIcon icon={faInstagram} size="2x" />
					</a>

					<a href="https://twitter.com/notthomasdugan"  target="_blank" rel="noreferrer" className="social-icon">
						<FontAwesomeIcon icon={faTwitter} size="2x" />
					</a>
				</div>
			</div>
		</>
	);
}