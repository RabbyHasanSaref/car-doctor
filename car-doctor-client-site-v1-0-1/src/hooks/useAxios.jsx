import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecuer = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxios = () => {
    const { handleLogOut } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecuer.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in then interceptors', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('log out the user');
                handleLogOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        })
    }, [])
    return axiosSecuer;
};

export default useAxios;