import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

export default function Header({ onChange }) {
	return <div className="__dml header">
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
		</ul>
	</div>
}