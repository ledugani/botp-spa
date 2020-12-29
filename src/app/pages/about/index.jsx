import React from 'react';
import Seo from '../../seo';

export default function AboutPage({ counter }) {
	return (
		<>
			<Seo title="About" />
			<h1>About BOTP</h1>
			{counter}
		</>
	);
}