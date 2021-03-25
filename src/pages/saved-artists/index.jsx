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
    const [artists, setArtists] = useState([]);
    const [ error, setError ] = useState('');
    const { currentUser } = useAuth();
	const userRef = database.users.doc(currentUser.uid);
	const spotify = Credentials();
	const { logout } = useAuth();
	const history = useHistory();
    
    userRef.get().then((doc) => {
        if (doc.exists) {
            setArtists(doc.data().artists);
            // console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

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
			axios(`https://api.spotify.com/v1/artists?ids=4B3sBWHD5rfWtkXCdYwrFq`, {
				method: 'GET',
				headers: { 'Authorization' : 'Bearer ' + response.data.access_token}
			})
			.then((response) => {
				console.log(response);
			})
		})
	}, [spotify.ClientId, spotify.ClientSecret]);
    
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