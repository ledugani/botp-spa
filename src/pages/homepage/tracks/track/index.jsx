import React from 'react';
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { formatDate } from '../../../../modules/dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

export default function Track({ trackDetails, count }) {

	const track = trackDetails.track;
	// const trackCharLength = track.album.name + track.name + track.artists[0].name + track.album.name + track.album.release_date;

	const renderTooltip = (props) => (
		<Tooltip
			id='button-tooltip'
			{...props}
		>
			<a
				href={track.external_urls.spotify}
				target='_blank'
				rel='noreferrer'
				className='social-icon'
			>
				<FontAwesomeIcon
					icon={faSpotify}
					size={ count === 1 ? '3x' : '2x'}
				/>
			</a>
		</Tooltip>
	);

	return (
		<Card
			className='pb-5'
		>

			{
				count !== 1 && <hr />
			}

			<Row
				className={
					count !== 1 ? 'pt-5' : 'pt-3'
				}
			>
				<Col
					xs={ count === 1 ? 12 : 4 }
					md={ count === 1 ? 6 : 4 }
				>
					<OverlayTrigger
						offset={[0, 0]}
						delay={{ show: 250, hide: 400 }}
						overlay={renderTooltip}
					>
						<Card.Img
							src={track.album.images[1].url}
							alt={track.album.name + ' album cover'}
							style={{ width: '100%' }}
							className='pl-5'
						/>
					</OverlayTrigger>
				</Col>

				<Col
					xs={ count === 1 ? 12 : 8 }
					md={ count === 1 ? 6 : 8 }
				>
					<Card.Body
						className={
							count === 1
							? 'pt-1'
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
								: { fontSize: '25px' }
							}
							className='pb-3'
						>
							<strong>{track.name}</strong>
						</Card.Title>

						<Card.Subtitle
							style={
								count !== 1
								? { fontSize: '14px' }
								: { fontSize: '23px' }
							}
							className='pb-4'
						>
							<em>{track.artists[0].name}</em>
						</Card.Subtitle>

						<Card.Text
							className='pb-2'
							style={{
								fontSize: '13px'
							}}
						>
							{track.album.name}
						</Card.Text>

						<Card.Text
							style={{
								fontSize: '13px'
							}}
							className='pb-3'
						>
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