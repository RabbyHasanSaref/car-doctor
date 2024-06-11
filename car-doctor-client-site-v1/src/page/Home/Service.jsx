import { useState } from "react";
// import service1 from "../../assets/images/services/1.jpg"
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Service = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                setService(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <div className="my-5 w-[600px] mx-auto text-center">
                <h3 className="text-base font-semibold text-orange-500">Service</h3>
                <h2 className="text-3xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>

            <div className="my-5 grid grid-cols-3 gap-3">
                {
                    services.map(service => <div key={service._id} className="w-[450px] border-2 p-2 rounded-lg">
                        <img src={service.img} alt="" />
                        <div className="mt-5 space-y-2 p-2">
                            <h2 className="text-2xl font-semibold">{service.title}</h2>
                            <h3 className="text-orange-500"><span className="text-base font-bold">Price :</span> $ {service.price}</h3>
                            <Link to={`/booking/${service._id}`}>
                                <button className="btn btn-primary mt-2">Book</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;