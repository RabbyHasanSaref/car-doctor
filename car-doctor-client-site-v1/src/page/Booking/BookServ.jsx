import { useContext, useEffect, useState } from "react";
import { authProvider } from "../../provider/AuthProvider";
import TableRow from "./TableRow";
import axios from "axios";

const BookServ = () => {

    const { user } = useContext(authProvider);

    const [bookserv, setBookserv] = useState([])
    console.log(bookserv)

    const url = `http://localhost:5000/booking?email=${user.email}`;

    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookserv(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookserv(data))
    }, [url])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
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
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status: 'Confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bookserv.filter(book => book._id !== id);
                const updateBooking = bookserv.find(book => book._id === id);
                updateBooking.status = 'Confirm';
                const update = [updateBooking, ... remaining];
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