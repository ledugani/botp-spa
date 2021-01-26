import React, { useState } from 'react';
import { Card, Alert, Button, Container } from 'react-bootstrap';
import { useAuth } from '../../app/auth/Auth';
import { useHistory } from 'react-router-dom';
import './styles.css';

export default function Dashboard() {
	const { error, setError } = useState();
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

	return (
		<Container>
			<h1 className='mb-4'>User Dashboard</h1>
			<Card className='dashboard'>
				<Card.Header>Artist Selector</Card.Header>
				<Card.Body className='dashboard-card'>
					<em>
						<ol>
							<li>Select a genre you like from the dropdown menu.</li>
							<li>Select a playlist that might have some artists you like.</li>
							<li>Pick your favorite artists.</li>
						</ol>
					</em>
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