import firebase from 'firebase/app';
import 'firebase/auth';
import  'firebase/firestore';

var firebaseConfig = {
	apiKey: "AIzaSyDlEvREpgSFNo_pg6Q0tmo1DBu9xnR-d6w",
	authDomain: "botp-spa.firebaseapp.com",
	projectId: "botp-spa",
	storageBucket: "botp-spa.appspot.com",
	messagingSenderId: "659216370630",
	appId: "1:659216370630:web:f96e2aa9afcdd094a140c7",
	measurementId: "G-3ZJS2RSPFJ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();