import React from 'react'

export default function Artists(props) {
	return (
		<ul>
			{
				props.tracks.map((track) => {
					return <li key={track.id}>
						{
							track.track.artists.length > 1
							// for more than one artist
							? track.track.artists.map((artist) => {
								return <p key={artist.id}>{artist.name}</p>
							})
							//for only one artist
							: <p key={track.id}>{track.track.artists[0].name}</p>
						}
					</li>
				})
			}
		</ul>
	)
}
