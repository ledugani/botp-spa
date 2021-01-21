import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	function signup(email, password, username) {
		return auth.createUserWithEmailAndPassword(email, password)
		.then((result) => {
			return result.user.updateProfile({
				displayName: username
			})
		}).catch((err) => {
			console.error(err);
		});
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email);
	}

	const value = {
		currentUser,
		login,
		logout,
		signup,
		resetPassword
	}

	return (
		<AuthContext.Provider value={ value }>
			{ !loading && children }
		</AuthContext.Provider>
	)
}