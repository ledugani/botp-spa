import React from 'react';
import Seo from '../../app/seo';

import Bnt from './bnt';
import songs from '../../data/bnt.json';

import './styles.css';

export default function Homepage() {
	return (
		<>
			<Seo title="Home" />
			<h1 className="heading">Welcome to Bottom of the Pile</h1>
			<p>Lorem ipsum dolor, site amet consectetur adipisicing.</p>
			<div className="songs">
				{songs.map((song) => (
					<Bnt key={song.id} {...song} />
				))}
			</div>
		</>
	);
}