import React from 'react';
import Seo from '../../app/seo';
import Tracks from './tracks/tracks';
import logo from '../img/spotify-botp-variant-cream.png';

import './styles.css';

export default function Homepage() {

	return (
		<>
			<Seo title="Home" />

			<img src={logo} alt="botp logo" className="botp-logo" />

			<h1 className="heading">Welcome to Bottom of the Pile</h1>
			<p>
				Bottom of the Pile is a music discovery platform,
				digital art gallery and shoppe developed by T.Dugan.
			</p>

			{/* Best New Tracks */}
			<div className="best-new-tracks">
				<h3 className="bnt">Best New Tracks</h3>

				<Tracks />
			</div>
		</>
	);
}