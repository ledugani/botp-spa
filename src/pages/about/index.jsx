import React from 'react';
import { Container } from 'react-bootstrap';
import Seo from '../../app/seo';

export default function AboutPage() {
	return (
		<>
			<Seo title="About" />
			<h1>About BOTP</h1>
			<Container>
				<p>
					Bottom of the Pile is a collaborative space for lovers of music in all its forms, from Acid Jazz to AT40 Pop. Here, we'll be covering tunes old and new to find those sounds that create positive influence in our lives and reinforce our creative spirit.
				</p>
			</Container>
		</>
	);
}