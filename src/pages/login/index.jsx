import React from 'react';
import './styles.css';

export default function Login() {
	return (
		<>
			<div className="login-wrapper">
				<h2>Login</h2>
				<form action="">
					<label htmlFor="">
						<p>Username: </p>
						<input type="text"/>
					</label>

					<label htmlFor="">
						<p>Password: </p>
						<input type="password"/>
					</label>

					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</>
	)
}