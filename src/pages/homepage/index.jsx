import React from 'react';
import Seo from '../../app/seo';
import Tracks from './tracks/tracks';
import logo from '../img/botp-top-2020-variant-cream-outline.svg';

import './styles.css';

export default function Homepage() {

	return (
		<>
			<Seo title="Home" />

			<h1 className="botp-heading">hello, welcome to</h1>

			<img src={logo} alt="botp logo" className="botp-logo" />

			<p className="botp-intro">
				a music discovery platform,
				digital art gallery and shoppe developed by <a href="http://ledugani.com/" target="_blank">T.Dugan</a>
			</p>

			{/* Best New Tracks */}
			<div className="best-new-tracks">

				<h3 className="bnt-header">Best New Tracks</h3>

				<Tracks />
			</div>
		</>
	);
}