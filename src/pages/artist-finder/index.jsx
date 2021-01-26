import React, { useState, useEffect } from 'react';
import { Card, Alert, Button, Container, Form } from 'react-bootstrap';
import { Credentials } from '../../spotify/Credentials';
import { useAuth } from '../../app/auth/Auth';
import { useHistory } from 'react-router-dom';
import { database } from '../../firebase';
import Dropdown from './dropdown';
import Artists from './artists';
import axios from 'axios';
import './styles.css';

export default function ArtistFinder() {
	const [ error, setError ] = useState('');
	const [ token, setToken ] = useState('');
	const [ genres, setGenres ] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
	const [ playlist, setPlaylist ] = useState({ selectedPlaylist: '', listOfPlaylistsFromAPI: [] });
	const [ tracks, setTracks ] = useState({ listOfTracksFromAPI: [] });
	const [ artists, setArtists ] = useState({ selectedArtists: [] });

	const spotify = Credentials();
	const { logout } = useAuth();
	const history = useHistory();

	async function handleLogout() {
		setError('');
		try {
			await logout();
			history.push('/login');
		} catch {
			setError('Failed to log user out.')
		}
	}

	useEffect(() => {
		axios(`https://accounts.spotify.com/api/token`, {
			headers: {
				'Content-Type' : 'application/x-www-form-urlencoded',
				'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
			},
			data: 'grant_type=client_credentials',
			method: 'POST'
		}).then((response) => {
			setToken(response.data.access_token);

			axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
				method: 'GET',
				headers: { 'Authorization' : 'Bearer ' + response.data.access_token}
			})
			.then((genreResponse) => {
				setGenres({
					selectedGenre: genres.selectedGenre,
					listOfGenresFromAPI: genreResponse.data.categories.items
				});
			})
		})
	}, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

	const genreChanged = val => {
		setGenres({
			selectedGenre: val,
			listOfGenresFromAPI: genres.listOfGenresFromAPI
		});

		axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
			method: 'GET',
			headers: { 'Authorization' : 'Bearer ' + token }
		}).then((playlistResponse) => {
			setPlaylist({
				selectedPlaylist: playlist.selectedPlaylist,
				listOfPlaylistsFromAPI: playlistResponse.data.playlists.items
			})
		})
	}

	const playlistChanged = (val) => {
		setPlaylist({
			selectedPlaylist: val,
			listOfPlaylistsFromAPI: playlist.listOfPlaylistsFromAPI
		});

		axios(`https://api.spotify.com/v1/playlists/${val}/tracks`, {
			method: 'GET',
			headers: {
				'Authorization' : 'Bearer ' + token
			}
		}).then(tracksResponse => {
			setTracks({
				listOfTracksFromAPI: tracksResponse.data.items
			})
		})
	}

	const toggleArtist = (artist) => {
		const chosenArtists = artists.selectedArtists;
		const artistExists = chosenArtists.find((item) => item === artist);

		// if (the checked value exists in the state already)
		if (artistExists) {
			// then remove that value from state
			setArtists({
				selectedArtists: [...chosenArtists.filter(item => item !== artist)]
			});
		} else {
			// add artist to state
			setArtists({
				selectedArtists: [...chosenArtists, artist]
			})
		}
	}

	function addToDB(e) {
		e.preventDefault();

		// Create
		database.artists.add({
			artists: artists
		})
	}

	return (
		<Container>
			<h1 className='mb-4'>Artist Finder</h1>
			<Card className='dashboard'>
				<Card.Header>Select Artist by Genre</Card.Header>
				<Card.Body className='dashboard-card'>
					<em>
						<ol>
							<li>Select a genre you like from the dropdown menu.</li>
							<li>Select a playlist that might have some artists you like.</li>
							<li>Pick your favorite artists.</li>
						</ol>
					</em>
					<Form onSubmit={() => {}}>
						<Dropdown
							options={genres.listOfGenresFromAPI}
							selectedValue={genres.selectedGenre}
							changed={genreChanged}
							label='Genre'
						/>

						{
							genres.selectedGenre
							&&
							<Dropdown
								options={playlist.listOfPlaylistsFromAPI}
								selectedValue={playlist.selectedPlaylist}
								changed={playlistChanged}
								label='Playlist'
							/>
						}

						{
							tracks.listOfTracksFromAPI.length > 0
							&&
							<div>
								<Artists
									tracks={tracks.listOfTracksFromAPI}
									onChange={toggleArtist}
								/>

								<Button
									variant='info'
									onClick={addToDB}
									disabled={
										artists.selectedArtists.length === 0
										? true
										: false
									}
								>
									Save Artists
								</Button>
							</div>
						}
					</Form>
				</Card.Body>
			</Card>

			<div className='w-100 text-center mt-2'>
				<Button
					variant='link'
					onClick={handleLogout}
				>
					Log Out
				</Button>

				{error && <Alert variant='danger'>{error}</Alert>}
			</div>
		</Container>
	)
}