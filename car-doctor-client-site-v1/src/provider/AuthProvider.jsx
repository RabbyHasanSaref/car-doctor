import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const authProvider = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    // user create 
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user Sign In 
    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user log out 
    const handleLogOut = () => {
        setLoader(true)
       return signOut(auth);
    }

    // ovserver onAuthStateChanged
    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, currentUser => {
            console.log('ovserver',currentUser);
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unsubscrib();
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        signInUser,
        handleLogOut,
    }

    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthProvider;