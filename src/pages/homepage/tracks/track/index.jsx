import React from 'react';

import './styles.css';

export default function Track({ trackDetails }) {

	const track = trackDetails.track;

	console.log(track);

	return (
		<>
			<div className="song-card">
				<img
					src={track.album.images[1].url}
					alt={track.album.name + " album cover"}
					className="album-cover"
					width={150}
				/>
				<div className="song-details">
					<h3>{track.name}</h3>
					<h4>{track.artists[0].name}</h4>
					<h4>{track.album.name}</h4>
					<h5>{track.album.release_date}</h5>
				</div>
			</div>
		</>
	);
}