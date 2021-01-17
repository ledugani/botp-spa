import React, { useContext, useState } from 'react';
import cartContext from '../../cart/context';
import { useAuth } from '../../auth/Auth';
import { Link, useHistory } from 'react-router-dom';
import  { Button } from 'react-bootstrap';

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

	return <div className='__dml header'>
		<ul>
			<li>
				<Link to='/'>
					Home
				</Link>
			</li>

			<li>
				<Link to='/dashboard'>
					Dashboard
				</Link>
			</li>

			<li>
				<Link to='/merch'>
					Merch
				</Link>
			</li>

			<li>
				<Link to='/cart'>
					Cart:
				</Link>

				({
					cartItems !== undefined
					? cartItems.reduce((acc, item) => acc + item.qty, 0)
					: console.log(cartItems)
				})
			</li>

			<li>
				<Button variant='link' onClick={handleLogout}>
					Log Out
				</Button>
			</li>

			{error && <li>{error}</li>}
		</ul>
	</div>
}