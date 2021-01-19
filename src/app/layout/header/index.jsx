import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
	return (
		<Navbar
			bg='dark'
			variant='dark'
			className='w-100'
			sticky='top'
		>
			<Navbar.Brand href='/'>BOTP</Navbar.Brand>
			<Nav className='mr-auto'>
				<Nav.Link href='/'>Home</Nav.Link>
				<Nav.Link href='/about'>About</Nav.Link>
				<Nav.Link href='/login'>Login</Nav.Link>
			</Nav>
			{/* <Form inline>
				<FormControl type='text' placeholder='Search' className='mr-sm-2' />
				<Button variant='outline-info'>Search</Button>
			</Form> */}
		</Navbar>

		// <div className='__dml header'>
		// 	<ul>
		// 		<li>
		// 			<Link to='/'>
		// 				Home
		// 			</Link>
		// 		</li>

		// 		<li>
		// 			<Link to='/login'>
		// 				Login
		// 			</Link>
		// 		</li>

		// 		<li>
		// 			<Link to='/about'>
		// 				About
		// 			</Link>
		// 		</li>
		// 	</ul>
		// </div>
	);
}