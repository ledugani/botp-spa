import React, { useState, useEffect } from 'react';
import { Credentials } from '../../spotify/Credentials';
import { Container, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../app/auth/Auth';
import { useHistory } from 'react-router-dom';
import { database } from '../../firebase';
import Seo from '../../app/seo';
import axios from 'axios';
import './styles.css';

export default function SavedArtistsPage() {
    const [ artists, setArtists ] = useState([]);
	// const [ userArtists, setUserArtists ] = useState([]);
    const [ error, setError ] = useState('');
    const { currentUser } = useAuth();
	const userRef = database.users.doc(currentUser.uid);
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
		userRef.get().then((doc) => {
			if (doc.exists) {

				const artistsFromFb = doc.data().artists;

				setArtists(artistsFromFb);

				const artistsStringified = artistsFromFb.toString().replaceAll(',','%');
				console.log(artistsStringified);

				axios(`https://accounts.spotify.com/api/token`, {
					headers: {
						'Content-Type' : 'application/x-www-form-urlencoded',
						'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
					},
					data: 'grant_type=client_credentials',
					method: 'POST'
				}).then((response) => {
					// console.log(response.data.access_token)
					axios(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/artists?ids=${artistsStringified}`, {
						method: 'GET',
						headers: {'Authorization' : 'Bearer ' + response.data.access_token}
					})
					.then((res) => {
						console.log(res);
					})
				})
				// doc.data() will be undefined in this case
			} else {
				console.log("No such document!");
			}
		}).catch((error) => {
			console.log("Error getting document:", error);
		});
	}, [spotify.ClientId, spotify.ClientSecret, userRef]);
    
    return (
		<>
			<Seo title='My Artists' />
			<Container className='page-container'>
                <h1>Your Saved Artists</h1>
                <ul>
                    {
                        artists.map((artist) => {
                            return <li key={artist}>{artist}</li>;
                        })
                    }
                </ul>
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
		</>
	);
}