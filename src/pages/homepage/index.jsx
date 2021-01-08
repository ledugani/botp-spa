import React, { useState, useEffect } from 'react';
import Seo from '../../app/seo';
import Tracks from './tracks';
import { Credentials } from '../../spotify/Credentials';

//import Bnt from './bnt';
//import songs from '../../data/bnt.json';
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
			console.log(response);
		})
		// .then(() => {
		// 	// replace this string with the Spotify ID of the playlist
		// 	const playlist_id = `40anMtgzQoKGiqvz7GQcFP`;

		// 	axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?market=ES`, {
		// 		method: 'GET',
		// 		headers: {
		// 			'Accept' :'application/json',
		// 			'Content-Type' :'application/json',
		// 			'Authorization' : 'Bearer ' + spotify.OAuthStr
		// 		}
		// 	})
		// 	.then(tracksResponse => {
		// 		console.log(tracksResponse);
		// 		setTracks({
		// 			listOfTracksFromAPI: tracksResponse.data.items
		// 		})
		// 	});
		// })

	}, []);


	return (
		<>
			<Seo title="Home" />
			<h1 className="heading">Welcome to Bottom of the Pile</h1>
			<p>Lorem ipsum dolor, site amet consectetur adipisicing.</p>
			<div className="songs-container">
				{/* {
					console.log(tracks.listOfTracksFromAPI),
					tracks.listOfTracksFromAPI.map((details) => {
						console.log(details);

						return <div>
							{details.track.album.artists[0].name}
						</div>
					})
				} */}
			</div>
		</>
	);
}