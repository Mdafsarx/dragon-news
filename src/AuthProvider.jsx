import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])

    function createAccount(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
            
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, User => {
            console.log('onAuthChanged', User)
            setUser(User)

            return () => {
                unsubscribe()
            }
        })
    }, [])

    const authInfo = { createAccount, user, Login ,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export {AuthContext}
export default AuthProvider;