import React, { useState, useEffect } from 'react';
import { Credentials } from '../../../spotify/Credentials';
import ItemsCarousel from 'react-items-carousel';
import loading from '../../img/specs.gif';
import { Button } from 'react-bootstrap';
import Track from './track';
import axios from 'axios';
import './styles.css';


export default function Tracks(props) {
	const spotify = Credentials();
	const [tracks, setTracks] = useState([]);
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	let count = 0;

	useEffect(() => {
		axios(`https://accounts.spotify.com/api/token`, {
			headers: {
				'Content-Type' : 'application/x-www-form-urlencoded',
				'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
			},
			data: 'grant_type=client_credentials',
			method: 'POST'
		}).then((response) => {
			axios(`https://api.spotify.com/v1/playlists/${props.playlist}/tracks?limit=10`, {
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
	}, [spotify.ClientId, spotify.ClientSecret, props]);

	return (
		<>
			{/* <ItemsCarousel
				className='items-carousel'
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={ window.innerWidth > 400 ? 4 : 2 }
        gutter={0}
        leftChevron={
					<Button
						variant='light'
						className='carousel-button left-btn'
					>
						{'<'}
					</Button>
				}
        rightChevron={
					<Button
						variant='light'
						className='carousel-button right-btn'
					>
						{'>'}
					</Button>
				}
        outsideChevron
				chevronWidth={20}
				infiniteLoop={true}
				slidesToScroll={2}
      > */}
			{
				tracks && tracks.listOfTracksFromAPI
				? tracks.listOfTracksFromAPI.map((details) => {
					count++;

					return <div key={details.added_at} className='single-track'>

						<Track
							key={details.track.id}
							trackDetails={details}
							imageSize={ count > 1
								? 'secondary'
								: 'first'
							}
						/>


					</div>
				})
				: <div className='loading'>
						<img
							src={loading}
							className='loading-gif'
							alt='loading gif'
						/>
						Rendering...
					</div>
			}
			{/* </ItemsCarousel> */}
		</>
	);
}