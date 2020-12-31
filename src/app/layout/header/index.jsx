import React from 'react';
import { Link } from 'react-router-dom';
import { getCartItems } from '../../../modules/cart';
import './styles.css';

export default function Header({  }) {
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
				<Link to='/cart'>Cart:</Link> ({getCartItems().length})
			</li>
		</ul>
	</div>
}