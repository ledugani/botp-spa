import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
		});

		return unsubscribe;
	}, []);

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	const value = {
		currentUser,
		signup
	}

	return (
		<AuthContext.Provider value={ value }>
			{children}
		</AuthContext.Provider>
	)
}

export {
	AuthContext,
	AuthProvider
}