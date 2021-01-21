import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../pages/img/BOTP-site-icon.png';

import './styles.css';

export default function Header() {
	return (
		<Navbar
			bg='dark'
			variant='dark'
			className='w-100'
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
				{/* <Nav.Link href='/about'>About</Nav.Link> */}
				<Nav.Link href='/login'>Login</Nav.Link>
			</Nav>
			<Nav className='justify-content-end'>
				<Nav.Item>
					<Nav.Link href='/signup'>
	 					Sign Up
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	);
}