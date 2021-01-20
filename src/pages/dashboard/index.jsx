import React, { useState } from 'react';
import { Card, Alert, Button } from 'react-bootstrap';
import { useAuth } from '../../app/auth/Auth';
import { useHistory } from 'react-router-dom';
import './styles.css';

export default function Dashboard() {
	const [ error, setError ] = useState('');
	const { currentUser, logout } = useAuth();
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

	return (
		<>
			<Card className='dashboard'>
				<Card.Body>
					<h2>Welcome to Your Dashboard, {currentUser.email}</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					<strong>How's it going?</strong>
					{/* <Link to='/update-profile' className='btn btn-primary w-100 mt-3'></Link> */}
				</Card.Body>
			</Card>

			<div className='w-100 text-center mt-2'>
				<Button variant='link' onClick={handleLogout}>Log Out</Button>
			</div>
		</>
	)
}