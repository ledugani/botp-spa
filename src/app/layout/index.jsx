import React from 'react';
import Header from './header';
import PrivateHeader from './header/private';
import Footer from './footer';
import { useAuth } from '../auth/Auth';
import './styles.css';

export default function Layout({ children }) {
	const { currentUser } = useAuth();

	return <div className="__dml container">
		{
			currentUser !== null
			? <PrivateHeader />
			: <Header />
		}
		<div className="page-content">
			{children}
		</div>
		<Footer />
	</div>;
}