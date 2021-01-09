import React, { useState, useEffect } from 'react';
import Track from './track';
import { Credentials } from '../../../spotify/Credentials';
import axios from 'axios';
//import Bnt from './bnt';
import './styles.css';

import ItemsCarousel from 'react-items-carousel';

export default function Tracks() {

	const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

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
			<ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={0}
        leftChevron={<button className='carousel-button left-btn'>{'<'}</button>}
        rightChevron={<button className='carousel-button right-btn'>{'>'}</button>}
        outsideChevron
				chevronWidth={chevronWidth}
				infiniteLoop={true}
      >
			{
				tracks && tracks.listOfTracksFromAPI
				? tracks.listOfTracksFromAPI.map((details) => {
					return <div key={details.added_at} className="single-track">
						<Track key={details.track.id} trackDetails={details} />
					</div>
				})
				: "Rendering..."
			}
			</ItemsCarousel>
		</div>
	);
}