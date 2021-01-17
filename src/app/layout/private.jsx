import React from 'react';
import PrivateHeader from './header/private';
import Footer from './footer';
import './styles.css';

export default function PrivateLayout({ children }) {
	return <div className="__dml container">
		<PrivateHeader />
		<div className="page-content">
			{children}
		</div>
		<Footer />
	</div>;
}