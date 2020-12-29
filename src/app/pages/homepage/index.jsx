import React from 'react';
import Seo from '../../seo';

export default function Homepage({ counter }) {
	return (
		<>
			<Seo title="Home" />
			<h1 className="heading">Welcome to Bottom of the Pile</h1>
			{counter}
			<p>Lorem ipsum dolor, site amet consectetur adipisicing.</p>

		</>
	);
}