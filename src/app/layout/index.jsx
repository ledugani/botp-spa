import React from 'react';
import Header from './header';
import Footer from './footer';
import './styles.css';

export default function Layout({ children }) {
	return <div className="__dml container">
		<Header />
		<div className="page-content">
			{children}
		</div>
		<Footer />
	</div>;
}