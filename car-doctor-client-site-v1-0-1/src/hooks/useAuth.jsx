import { useContext } from "react";
import { authProvider } from "../provider/AuthProvider";

const useAuth = () => {
    const auth = useContext(authProvider);
    return auth ;
};

export default useAuth;