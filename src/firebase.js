import firebase from 'firebase/app'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAiaQHVnQlCdUA0DNmU3p8wQhUE-8cuQXw",
    authDomain: "autenticacao-53942.firebaseapp.com",
    projectId: "autenticacao-53942",
    storageBucket: "autenticacao-53942.appspot.com",
    messagingSenderId: "910794912881",
    appId: "1:910794912881:web:875cfd2d19e4e4841a57d0"
};

firebase.initializeApp(firebaseConfig)

export default firebase;
