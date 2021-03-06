import React from 'react';
import Header from './header';
import PrivateHeader from './header/private';
import Footer from './footer';
import { useAuth } from '../auth/Auth';
import './styles.css';
import { Container } from 'react-bootstrap';

export default function Layout({ children }) {
	const { currentUser } = useAuth();

	return (
		<div className="__dml page-container">
			{
				currentUser !== null
				? <PrivateHeader />
				: <Header />
			}
			<Container className="page-content pt-4">
				{children}
			</Container>
			<Footer />
		</div>);
}