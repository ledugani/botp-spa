import React from 'react';
import Seo from '../../app/seo';
import Tracks from './tracks/tracks';

import './styles.css';

export default function Homepage() {

	return (
		<>
			<Seo title="Home" />
			<h1 className="heading">Welcome to Bottom of the Pile</h1>
			<p>Lorem ipsum dolor, site amet consectetur adipisicing.</p>

			{/* Best New Tracks */}
			<div className="best-new-tracks">
				<Tracks />
			</div>
		</>
	);
}