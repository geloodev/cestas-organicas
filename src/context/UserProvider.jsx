import React, { useEffect, useState} from 'react';
import { auth, db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore';
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

export const UserContext = React.createContext()

function UserProvider(props) {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })

        return () => unsubscribe()
    })

    async function storeUser(user) {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, user.email, user.password
            )
            const userId = userCredential.user.uid
            console.log('USER CREATED: ', userId)
            setCurrentUser(userCredential.user)

            const usersCollectionRef = collection(db, "users")
            const docRef = await addDoc(usersCollectionRef, {
                email: user.email,
                address: user.address
            })
            console.log("Document written with ID: ", docRef.id)
        } catch (error) {
            console.error("ERROR ON STOREUSER: ", error)
            console.error(error.message)
        }
    }

    async function authenticateUser(user) {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, user.email, user.password
            )
            console.log("USER AUTHENTICATED: ", userCredential.user.uid)
            setCurrentUser(userCredential.user)
            return true
        } catch (error) {
            console.error("ERROR ON AUTH: ", error.message)

            return false
        }
    }

    async function logoutUser() {
        try {
            await signOut(auth)
            setCurrentUser(null)
            console.log('USER LOGGED OUT')
        } catch (error) {
            console.error('ERROR ON LOGOUT: ', error.message)
        }
    }

    return (
        <UserContext.Provider
            value={{
                currentUser: currentUser,
                storeUser: storeUser,
                authenticateUser: authenticateUser,
                logoutUser: logoutUser
            }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;
