import React from 'react';
import './styles.css';

export default function Bnt({
	id,
	img,
	song,
	artist,
	album,
	release,
	apple,
	spotify,
	youtube
}) {
	return (
		<>
			<div className="song-card">
				<img src={img} alt="album cover" width={200} />
				<div className="song-details">
					<h3>{song}</h3>
					<h4>{artist}</h4>
					<h4>{album}</h4>
					<h5>{release}</h5>
				</div>
			</div>
		</>
	);
}