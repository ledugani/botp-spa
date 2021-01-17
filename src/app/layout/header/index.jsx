import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
	return <div className='__dml header'>
		<ul>
			<li>
				<Link to='/'>
					Home
				</Link>
			</li>

			<li>
				<Link to='/login'>
					Login
				</Link>
			</li>

			<li>
				<Link to='/about'>
					About
				</Link>
			</li>
		</ul>
	</div>
}