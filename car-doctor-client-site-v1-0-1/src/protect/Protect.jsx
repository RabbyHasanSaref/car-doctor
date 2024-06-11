import { useContext } from "react";
import { authProvider } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Protect = ({children}) => {
    const {user, loader} = useContext(authProvider);
    const location = useLocation();
    // console.log(location.pathname)

    if(loader){
       return <span className="loading loading-bars loading-lg"></span>
    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default Protect;