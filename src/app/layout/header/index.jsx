import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

export default function Header({ onChange }) {
	return <div className="__dml header">
		<ul>
			<li>
				<Link to='/' onClick={onChange}>
					Home
				</Link>
			</li>

			<li>
				<Link to='/about' onClick={onChange}>
					About
				</Link>
			</li>
		</ul>
	</div>
}