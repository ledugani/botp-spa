import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Auth';
import './styles.css';

export default function SignUp() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const history = useHistory();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const { login } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch {
			setError('Failed to log in.')
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
					className='w-100 bg-color pb-5'
					style={{ maxWidth: '400px' }}
				>
					<Card>
						<Card.Header>
							<h2 className='text-center'>Log In</h2>
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

								<Button disabled={loading} className='w-100' type='submit'>
									Log In
								</Button>
							</Form>

							<div className='w-100 text-center mt-3'>
								<Link to='/forgot-password' className='modal-link'>Forgot Password?</Link>
							</div>
						</Card.Body>
					</Card>

					<div
						className='text-center'
					>
						Don't have an account? <Link to='/signup' className='modal-link'>Sign Up</Link>
					</div>
				</div>

			</Container>

	)
}