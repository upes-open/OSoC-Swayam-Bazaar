import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase-config/firebase-configuser';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser,
        login,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


