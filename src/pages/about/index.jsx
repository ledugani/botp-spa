import React, { useState } from 'react';
import { Row, Col, Container, Alert, Button } from 'react-bootstrap';
import leduganihimself from '../img/IMG_2075.png';
import Seo from '../../app/seo';
import stamp from '../img/botp-stamp.png';
import './styles.css';

export default function AboutPage() {
	const [show, setShow] = useState(true);
	function AlertDismissibleExample(show) {
		if (show) {
			return (
				<Alert variant="warning" onClose={() => setShow(false)} dismissible>
					<Alert.Heading>
						You've Found My (Not So) Secret About Page!
					</Alert.Heading>
					<p>
						Good job.
					</p>
				</Alert>
			);
		}
		return <Button onClick={() => setShow(true)}>Show Alert</Button>;
	}

	return (
		<>
			<Seo title='About' />
			<Container className='pb-5'>
				{/* {
					show
					? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
							You've found my (Not So) Secret About Page! Good job.
						</Alert>
					: null
				} */}
				<AlertDismissibleExample show={ show } />
				<Row>
					<Col className='about-botp'>
						<h1>About BOTP</h1>
						<p>
							Bottom of the Pile is a collaborative space for lovers of music in all its forms, from Acid Jazz and  to AT40 Pop. Here, we'll be covering tunes old and new to find those sounds that create positive influence in our lives and reinforce our creative spirit.
						</p>
						<p>
							T.Dugan is the creative director of Bottom of the Pile. He is a web developer by trade, passionate about ReactJS, and the sole designer, producer, artist, and curator for BOTP. Currently residing in South Nashville, T.Dugan spends most of his days entertaining his three dogs with his wife.
						</p>
						<Row className="justify-content-md-center">
							<Col xs={12} sm={4} md={4}>
								<img
									src={stamp}
									alt='botp stamp'
									className='botp-stamp'
								/>
							</Col>
						</Row>
					</Col>

					<Col>
						<img
							src={leduganihimself}
							alt='tom - creative director'
							className='tom-image'
							width={500}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}