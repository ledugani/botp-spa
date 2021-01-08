import React, { useState, useEffect } from 'react';
import Seo from '../../app/seo';
import Track from './tracks/tracks';
import { Credentials } from '../../spotify/Credentials';

//import Bnt from './bnt';
import axios from 'axios';

import './styles.css';

export default function Homepage() {

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
		<>
			<Seo title="Home" />
			<h1 className="heading">Welcome to Bottom of the Pile</h1>
			<p>Lorem ipsum dolor, site amet consectetur adipisicing.</p>
			<div className="songs-container">
				{
					tracks && tracks.listOfTracksFromAPI
					? tracks.listOfTracksFromAPI.map((details) => {
						return <div key={details.added_at}>
							<Track key={details.track.id} trackDetails={details} />
						</div>
					})
					: "Plz w8 while I render dis info thx"
				}
			</div>
		</>
	);
}