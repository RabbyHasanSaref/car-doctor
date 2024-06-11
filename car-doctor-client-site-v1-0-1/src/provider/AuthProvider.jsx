import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

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
            console.log('ovserver', currentUser);

            const userLogged = currentUser?.email || user?.email
            const loggedUser = { email: userLogged }

            setUser(currentUser);
            setLoader(false);
            // if user exsit to issue token 
            if (currentUser) {
                axios.post('https://car-doctor-server-site-v1-0-1.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token respons', res.data);
                    })
            }
            else {
                axios.post('https://car-doctor-server-site-v1-0-1.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
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