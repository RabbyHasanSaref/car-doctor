import { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
// import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { authProvider } from "../../provider/AuthProvider";

const BookServ = () => {

    const { user } = useContext(authProvider);
    const axiosSecuer = useAxios();

    const [bookserv, setBookserv] = useState([])

    const url = `/booking?email=${user.email}`;

    useEffect(() => {
        axiosSecuer.get(url)
            .then(res => {
                setBookserv(res.data)
            })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookserv(data))
    }, [url, axiosSecuer])

    const handleDelete = (id) => {
        fetch(`https://car-doctor-server-site-v1-0-1.vercel.app/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = bookserv.filter(book => book._id !== id)
                    setBookserv(remaining)
                }
            })
    }

    const handleUpdate = (id) => {
        fetch(`https://car-doctor-server-site-v1-0-1.vercel.app/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookserv.filter(book => book._id !== id);
                    const updateBooking = bookserv.find(book => book._id === id);
                    updateBooking.status = 'Confirm';
                    const update = [updateBooking, ...remaining];
                    setBookserv(update);
                }
            })
    }

    return (
        <div className="overflow-x-auto my-5">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Img</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>

                {
                    bookserv.map(booking => <TableRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    >
                    </TableRow>)
                }
            </table>
        </div>
    );
};

export default BookServ;