import React, { useState } from 'react';
import Private from './private';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout';
import Homepage from '../pages/homepage';
import Login from '../pages/login';
import AboutPage from '../pages/about';

import './styles.css';

export default function App() {
	const [token, setToken] = useState();

	// when user is NOT logged in

	if (!token) {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path='/'>
							<Homepage />
						</Route>

						<Route path='/login'>
							<Login setToken={setToken} />
						</Route>

						<Route path='/about'>
							<AboutPage />
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		)
	}

	// when user IS logged in

	return (
		<Private />
	);
}