import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
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

	return (
		<Container
			className='
				d-flex
				align-items-center
				justify-content-center
			'
			style={{ minHeight: '79.3vh' }}
		>
			<div
				className='w-100 bg-color'
				style={{ maxWidth: '400px' }}
			>
				<Card>
					<Card.Header>
						<h2 className='text-center mb-4'>Sign Up</h2>
					</Card.Header>

					<Card.Body>

						{error && <Alert variant='danger'>{error}</Alert>}

						<Form onSubmit={handleSubmit}>
							<Form.Group id='email'>
								<Form.Label>Email: </Form.Label>
								<Form.Control className='w-100' type='email' ref={emailRef} required />
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
				</Card>

				<div
					className='text-center mt-3'
				>
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
				</div>
			</div>

		</Container>
		// <>
		// 	<Card>
		// 		<Card.Body>
		// 			<h2 className='text-center mb-4'>Sign Up</h2>

		// 			{error && <Alert variant='danger'>{error}</Alert>}

		// 			<Form onSubmit={handleSubmit}>
		// 				<Form.Group id='email'>
		// 					<Form.Label>Email: </Form.Label>
		// 					<Form.Control type='email' ref={emailRef} required />
		// 				</Form.Group>

		// 				<Form.Group id='displayName'>
		// 					<Form.Label>Username: </Form.Label>
		// 					<Form.Control type='text' ref={displayNameRef} required />
		// 				</Form.Group>

		// 				<Form.Group id='password'>
		// 					<Form.Label>Password: </Form.Label>
		// 					<Form.Control type='password' ref={passwordRef} required />
		// 				</Form.Group>

		// 				<Form.Group id='password-confirm'>
		// 					<Form.Label>Confirm Password: </Form.Label>
		// 					<Form.Control type='password' ref={passwordConfirmRef} required />
		// 				</Form.Group>

		// 				<Button disabled={loading} className='w-100' type='submit'>
		// 					Sign Up
		// 				</Button>
		// 			</Form>
		// 		</Card.Body>
		// 	</Card>

		// 	<div style={{
		// 		color: 'var(--xanadu)'
		// 	}}>
		// 		Already have an account? <Link to='/login'>Log In</Link>
		// 	</div>
		// </>
	)
}