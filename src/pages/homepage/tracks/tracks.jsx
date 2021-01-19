import React, { useState, useEffect } from 'react';
import Track from './track';
import { Credentials } from '../../../spotify/Credentials';
import axios from 'axios';
//import Bnt from './bnt';
import loading from '../../img/specs.gif';
import './styles.css';
import ItemsCarousel from 'react-items-carousel';

export default function Tracks() {

	const spotify = Credentials();

	const [tracks, setTracks] = useState([]);
	const [activeItemIndex, setActiveItemIndex] = useState(0);

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
			<ItemsCarousel
				className="items-carousel"
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
				numberOfCards={ window.innerWidth > 375 ? 4 : 2 }
        gutter={0}
        leftChevron={
					<button
						className='carousel-button left-btn'
					>
						{'<'}
					</button>
				}
        rightChevron={
					<button
						className='carousel-button right-btn'
					>
						{'>'}
					</button>
				}
        outsideChevron
				chevronWidth={20}
				infiniteLoop={true}
				slidesToScroll={2}
      >
			{
				tracks && tracks.listOfTracksFromAPI
				? tracks.listOfTracksFromAPI.map((details) => {
					return <div key={details.added_at} className="single-track">
						<Track key={details.track.id} trackDetails={details} />
					</div>
				})
				: <div className="loading">
						<img
							src={loading}
							className="loading-gif"
						/>
						Rendering...
					</div>
			}
			</ItemsCarousel>
		</>
	);
}