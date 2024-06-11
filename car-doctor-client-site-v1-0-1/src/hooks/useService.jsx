import { useEffect, useState } from "react";
import { axiosSecuer } from "./useAxios";

const useService = (asc, search) => {
    const [services, setService] = useState([])
    useEffect(() => {
        // fetch('https://car-doctor-server-site-v1-0-1.vercel.app/service')
        //     .then(res => res.json())
        //     .then(data => {
        //         setService(data)
        //         console.log(data)
        //     })
        axiosSecuer(`/service?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res => setService(res.data))
    }, [asc, search])
    return services ;
};

export default useService;