import React from 'react';
import Seo from '../../app/seo';
import Tracks from './tracks/tracks';

//import './styles.css';

export default function Homepage() {

	return (
		<>
			<Seo title="Home" />
			<h1 className="heading">Welcome to Bottom of the Pile</h1>
			<p>
				Bottom of the Pile is a music discovery platform,
				digital art gallery and shoppe developed by T.Dugan.
			</p>

			{/* Best New Tracks */}
			<div className="best-new-tracks">
				<Tracks />
			</div>
		</>
	);
}