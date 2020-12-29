import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from "./layout";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/about";

export default function App() {
	return (
		<Layout>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>

					<Route path='/about'>
						<AboutPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</Layout>
		);
}