import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { formatDate } from '../../../../modules/dates';
import './styles.css';

export default function Track({ trackDetails, count }) {

	const track = trackDetails.track;

	const trackCharLength = track.album.name + track.name + track.artists[0].name + track.album.name + track.album.release_date;

	return (
		<Card
			className='pb-5'
		>

			{
				count !== 1 && <hr />
			}

			<Row
				className={
					count !== 1 && 'pt-5'
				}
			>
				<Col
					xs={ count === 1 ? 12 : 4 }
					md={6}
				>
					<Card.Img
						src={track.album.images[1].url}
						alt={track.album.name + ' album cover'}
						style={{ width: '100%' }}
					/>
				</Col>

				<Col
					xs={ count === 1 ? 12 : 8 }
					md={6}
				>
					<Card.Body
						className={
							count === 1
							? 'pt-5'
							: ''
						}
						style={{
							padding: '0px'
						}}
					>
						<Card.Title
							style={
								count !== 1
								? { fontSize: '15px' }
								: { }
							}
						>
							<strong>{track.name}</strong>
						</Card.Title>

						<Card.Subtitle>
							<em>{track.artists[0].name}</em>
						</Card.Subtitle>

						<Card.Text
							className={
								trackCharLength.length > 100
								? ' '
								: 'pb-3'
							}
							style={{
								fontSize: '13px'
							}}
						>
							{track.album.name}
							<br />
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