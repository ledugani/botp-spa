import React from 'react';
import { Form } from 'react-bootstrap';

export default function Artists(props) {
	return (
		<Form.Group>
			{
				props.tracks.map((track) => {
					return <Form.Group key={track.track.id}>
						{
							track.track.artists.length > 1
							// for more than one artist
							? track.track.artists.map((artist) => {
								return <Form.Check
											key={artist.id}
											type='checkbox'
											label={artist.name}
											value={artist.name}
											onChange={event => props.onChange(event.target.value)}
										/>
							})
							//for only one artist
							: <Form.Check
									key={track.track.id}
									type='checkbox'
									label={track.track.artists[0].name}
									value={track.track.artists[0].name}
									onChange={() => props.onChange(track.track.id)}
								/>
						}
					</Form.Group>
				})
			}
		</Form.Group>
	)
}
