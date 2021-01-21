import React, { useState, useEffect } from 'react';
import { Card, Alert, Button, Container, Form } from 'react-bootstrap';
import { Credentials } from '../../spotify/Credentials';
import { useAuth } from '../../app/auth/Auth';
import { useHistory } from 'react-router-dom';
import Dropdown from './dropdown';
import Artists from './artists';
import axios from 'axios';
import './styles.css';

export default function Dashboard() {
	const [ error, setError ] = useState('');
	const [ token, setToken ] = useState('');
	const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
	const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistsFromAPI: [] });
	const [tracks, setTracks] = useState({ listOfTracksFromAPI: [] });
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

	return (
		<Container>
			<Card className='dashboard'>
				<Card.Header>User Dashboard</Card.Header>
				<Card.Body>
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
							<Artists tracks={tracks.listOfTracksFromAPI} />
						}

						<Button variant='primary' type='submit'>Submit</Button>
					</Form>
				</Card.Body>
			</Card>

			<div className='w-100 text-center mt-2'>
				<Button variant='link' onClick={handleLogout}>Log Out</Button>
				{error && <Alert variant='danger'>{error}</Alert>}
			</div>
		</Container>
	)
}