import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { formatDate } from '../../../../modules/dates';
import './styles.css';

export default function Track({ trackDetails, imageSize }) {

	const track = trackDetails.track;

	const trackCharLength = track.album.name + track.name + track.artists[0].name + track.album.name + track.album.release_date;

	return (
		<Card
			className='pb-5'
		>
			<Row>
				<Col>
					<Card.Img
						src={track.album.images[1].url}
						alt={track.album.name + ' album cover'}
						className={imageSize}
					/>
				</Col>

				<Col>
					<Card.Body
						// className={
						// 	trackCharLength.length > 100
						// 	? 'song-details lg'
						// 	: 'song-details'
						// }
					>
						<Card.Title className='pb-3'>
							{track.name}
						</Card.Title>

						<Card.Subtitle className='pb-3'>
							<strong>
								{track.artists[0].name}
							</strong>
						</Card.Subtitle>

						<Card.Text
							className={
							trackCharLength.length > 100
							? ' '
							: 'pb-3'
						}
						>
							{track.album.name}
						</Card.Text>

						<Card.Text className='track-date'>
							<em>
								{ track.album.release_date && formatDate(track.album.release_date) }
							</em>
						</Card.Text>
					</Card.Body>
				</Col>

			</Row>
		</Card>
	)
}