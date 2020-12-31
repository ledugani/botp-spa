import React, { useContext } from 'react';
import cartContext from '../../cart-context';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header({ }) {
	const ctx = useContext(cartContext);
	return <div className='__dml header'>
		<ul>
			<li>
				<Link to='/'>
					Home
				</Link>
			</li>

			<li>
				<Link to='/about'>
					About
				</Link>
			</li>

			<li>
				<Link to='/merch'>
					Merch
				</Link>
			</li>

			<li>
				<Link to='/cart'>Cart:</Link> ({ctx.length})
			</li>
		</ul>
	</div>
}