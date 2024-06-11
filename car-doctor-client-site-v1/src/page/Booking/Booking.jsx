import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authProvider } from "../../provider/AuthProvider";

const Booking = () => {
    const booking = useLoaderData();
    const { user } = useContext(authProvider)
    const { _id, title, price, img } = booking;

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const due = form.due.value;
        const booking = {
            name,
            date,
            email,
            due,
            img: img,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(booking);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="my-10">
            <div>
                <h2 className="text-center text-2xl font-semibold">Booking</h2>
                <div className="my-3">
                    <h1 className="text-center">Booking : {title}</h1>
                </div>
                <div className="my-5 w-[900px] mx-auto border-2 p-5">
                    <form onSubmit={handleBooking}>
                        <div className="flex items-center gap-5">
                            <div>
                                <div className="w-[400px] mx-auto">
                                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className=" w-full my-3 p-3 border-2" />
                                </div>
                            </div>
                            <div>
                                <div className="w-[400px] mx-auto">
                                    <input type="date" name="date" placeholder="Date" className=" w-full my-3 p-3 border-2" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div >
                                <div className="w-[400px] mx-auto">
                                    <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="w-full p-3 border-2" />
                                </div>
                            </div>
                            <div className="w-[400px] mx-auto">
                                <input type="text" name="due" defaultValue={`$` + price} placeholder="due" className="w-full p-3 border-2" />
                            </div>
                        </div>
                        <button className="btn bg-orange-500 w-full my-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;