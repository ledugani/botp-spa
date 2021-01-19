import React from 'react';
import Header from './header';
import PrivateHeader from './header/private';
import Footer from './footer';
import { useAuth } from '../auth/Auth';
import './styles.css';
import { Container } from 'react-bootstrap';

export default function Layout({ children }) {
	const { currentUser } = useAuth();

	// <Container
	// 		className='
	// 		d-flex
	// 		align-items-center
	// 		justify-content-center
	// 		background-color
	// 	'
	// 	style={{ minHeight: '100vh' }}
	// >

	return (
		<div className="__dml page-container">
			{
				currentUser !== null
				? <PrivateHeader />
				: <Header />
			}
			<Container className="page-content">
				{children}
			</Container>
			<Footer />
		</div>);
}