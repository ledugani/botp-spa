import React, { useState, useEffect } from 'react';

import Track from './track';
import { Credentials } from '../../../spotify/Credentials';

//import Bnt from './bnt';
import axios from 'axios';

import './styles.css';

export default function Tracks() {

	const spotify = Credentials();

	const [tracks, setTracks] = useState([]);

	useEffect(() => {

		axios(`https://accounts.spotify.com/api/token`, {
			headers: {
				'Content-Type' : 'application/x-www-form-urlencoded',
				'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
			},
			data: 'grant_type=client_credentials',
			method: 'POST'
		}).then((response) => {
			// replace this string with the Spotify ID of the playlist
			const playlist_id = `40anMtgzQoKGiqvz7GQcFP`;

			axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?market=ES`, {
				method: 'GET',
				headers: {
					'Accept' :'application/json',
					'Content-Type' :'application/json',
					'Authorization' : 'Bearer ' + response.data.access_token
				}
			})
			.then(tracksResponse => {
				setTracks({
					listOfTracksFromAPI: tracksResponse.data.items
				})
			});
		})

	}, []);

	return (
		<div className="songs-container">
			{
				tracks && tracks.listOfTracksFromAPI
				? tracks.listOfTracksFromAPI.map((details) => {
					return <div key={details.added_at}>
						<Track key={details.track.id} trackDetails={details} />
					</div>
				})
				: "Plz w8 while I render dis thx"
			}
		</div>
	);
}