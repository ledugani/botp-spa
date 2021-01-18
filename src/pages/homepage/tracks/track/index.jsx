import React from 'react';
import { Card } from 'react-bootstrap';

import './styles.css';

export default function Track({ trackDetails }) {

	const track = trackDetails.track;

	const trackCharLength = track.album.name + track.name + track.artists[0].name + track.album.name + track.album.release_date;

	return (
		<Card
			style={{
				width: '100%',
				height: '100%'
			}}
		>
			<Card.Img
				variant="top"
				src={track.album.images[1].url}
				alt={track.album.name + " album cover"}
			/>

			<Card.Body
				className={trackCharLength.length > 100 ? "song-details lg" : "song-details"}
			>
				<Card.Title>
					{track.name}
				</Card.Title>

				<Card.Subtitle className="mb-2 text-muted">
					{track.artists[0].name}
				</Card.Subtitle>

				<Card.Text>
					{track.album.name}
				</Card.Text>

				<Card.Text>
					<em>
						{track.album.release_date}
					</em>
				</Card.Text>
			</Card.Body>
		</Card>
	)

	// return (
	// 	<>
	// 		<div className="song-card">
	// 			<img
	// 				src={track.album.images[1].url}
	// 				alt={track.album.name + " album cover"}
	// 				className="album-cover"
	// 				width={ window.innerWidth > 375 ? 150 : 100}
	// 			/>
	// 			<div className={trackCharLength.length > 100 ? "song-details-lg" : "song-details"}>
	// 				<h3 className="track-title">{track.name}</h3>
	// 				<h4 className="track-artist">{track.artists[0].name}</h4>
	// 				<h4 className="track-album">{track.album.name}</h4>
	// 			</div>
	// 			<h5 className="track-release">{track.album.release_date}</h5>
	// 		</div>
	// 	</>
	// );
}