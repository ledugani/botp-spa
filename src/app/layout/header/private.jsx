import React, { useState, useContext } from 'react';
import cartContext from '../../cart/context';
import { useAuth } from '../../auth/Auth';
import { useHistory } from 'react-router-dom';
import  { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../pages/img/BOTP-site-icon.png';

import './styles.css';

export default function PrivateHeader() {
	const [error, setError] = useState('');
	const { logout } = useAuth();
	const { cartItems } = useContext(cartContext);
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
		<Navbar
			bg='dark'
			variant='dark'
			className='w-100 __dml header private'
			sticky='top'
		>
			<Navbar.Brand href='#home'>
				<img
					alt='BOTP icon'
					src={logo}
					width='65'
					height='65'
					className='d-inline-block align-top'
				/>
			</Navbar.Brand>

			<Nav className='mr-auto'>
				<Nav.Link href='/'>Home</Nav.Link>

				<Nav.Link href='/dashboard'>Dashboard</Nav.Link>

				<Nav.Link href='/merch'>Merch</Nav.Link>

				<Nav.Link href='/cart'>
					Cart:
					({
						cartItems !== undefined
						? cartItems.reduce((acc, item) => acc + item.qty, 0)
						: ' '
					})
				</Nav.Link>
			</Nav>

			<Nav className="justify-content-end">
				<Nav.Item>
					<Nav.Link onClick={handleLogout}>
	 				Log Out
					</Nav.Link>
				</Nav.Item>

				{error && <Nav.Item>{error}</Nav.Item>}
			</Nav>
		</Navbar>
	);
}