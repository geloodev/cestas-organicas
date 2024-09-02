import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAiaQHVnQlCdUA0DNmU3p8wQhUE-8cuQXw",
    authDomain: "cestas-organicas.firebaseapp.com",
    projectId: "cestas-organicas",
    storageBucket: "cestas-organicas.appspot.com",
    messagingSenderId: "810460170618",
    appId: "1:810460170618:web:682b1d0de3c02ca60f2ec3"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
