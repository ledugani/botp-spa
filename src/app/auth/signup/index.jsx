import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
// import { database } from '../../../firebase';
import { useAuth } from '../Auth';
import '../login/styles.css';

export default function SignUp() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const displayNameRef = useRef();
	const history = useHistory();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState('');
	const { signup } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords are not the same.')
		}

		try {
			setError('');
			setLoading(true);
			await signup(
				emailRef.current.value,
				passwordRef.current.value,
				displayNameRef.current.value
			);
			history.push('/');
		} catch {
			setError('Failed to create an account')
		}
		setLoading(false);
	}

	// function createUser() {
	// 	database.users.add(displayNameRef.current.value)
	// }

	return (
		<Container
			className='
				d-flex
				align-items-center
				justify-content-center
				mb-5
			'
			style={{ minHeight: '79.3vh' }}
		>
			<div
				className='w-100 bg-color'
				style={{ maxWidth: '400px' }}
			>
				<Card>
					<Card.Header>
						<h2 className='text-center'>Sign Up</h2>
					</Card.Header>

					<Card.Body id='signup-body'>

						{error && <Alert variant='danger'>{error}</Alert>}

						<Form onSubmit={handleSubmit}>
							<Form.Group id='email'>
		 						<Form.Label>Email: </Form.Label>
		 						<Form.Control className='w-100' type='email' ref={emailRef} required />
			 				</Form.Group>

							<Form.Group id='displayName'>
								<Form.Label>Username: </Form.Label>
								<Form.Control className='w-100' type='text' ref={displayNameRef} required />
							</Form.Group>

							<Form.Group id='password'>
								<Form.Label>Password: </Form.Label>
								<Form.Control className='w-100' type='password' ref={passwordRef} required />
							</Form.Group>

							<Form.Group id='password-confirm'>
								<Form.Label>Confirm Password: </Form.Label>
								<Form.Control type='password' ref={passwordConfirmRef} required />
							</Form.Group>

							<Button disabled={loading} className='w-100' type='submit'>
								Sign Up
							</Button>
						</Form>

						<div className='w-100 text-center mt-3'>
							<Link to='/forgot-password' className='modal-link'>Forgot Password?</Link>
						</div>
					</Card.Body>
					<Card.Footer className='text-center pt-4'>
						<p className='login-link'>
							Already have an account?
							<Link
								to='/login'
								className='login-link pl-2'
								style={{
									textDecoration: 'underline'
								}}
							>
								Log In
							</Link>
						</p>
					</Card.Footer>
				</Card>
			</div>
		</Container>
	)
}