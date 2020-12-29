import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import './styles.css';

export default function Layout({ children, onChange }) {

	return <div className="__dml container">
		<Header onChange={onChange} />
			{children}
		<Footer />
	</div>;
}