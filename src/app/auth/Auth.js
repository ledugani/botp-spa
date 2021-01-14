import React, { useEffect, useState } from 'react';
import firebaseData from '../../firebase';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		firebaseData.auth().onAuthStateChanged(setCurrentUser);
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export {
	AuthContext,
	AuthProvider
}