import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../app/auth/Auth';
import Seo from '../../app/seo';
import './styles.css';
import { database } from '../../firebase';


export default function SavedArtistsPage() {
    const [artists, setArtists] = useState([]);
    const { currentUser } = useAuth();
	const userRef = database.users.doc(currentUser.uid);
    
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
			</Container>
		</>
	);
}