import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Login({ setToken }) {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await useEffect({
			username,
			password
		});
		setToken(token);
	}

	useEffect((credentials) => {
		return fetch('http://localhost:8080/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
		.then(data => data.json())
	}, []);

	return (
		<>
			<div className="login-wrapper">
				<h2>Login</h2>
				<form action="">
					<label htmlFor="">
						<p>Username: </p>
						<input type="text" onChange={e => setUsername(e.target.value)} />
					</label>

					<label htmlFor="">
						<p>Password: </p>
						<input type="password" onChange={e => setPassword(e.target.value)} />
					</label>

					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</>
	)
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired
}