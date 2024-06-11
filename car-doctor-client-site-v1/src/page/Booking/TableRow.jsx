

const TableRow = ({ booking, handleDelete, handleUpdate }) => {
    const { _id, img, service, date, price, status } = booking

    return (
        <tbody>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)}>X</button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                img && <img src={img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                </td>
                <th>
                    <td>
                        {service}
                    </td>
                </th>
                <th><td>{date}</td></th>
                <th>
                    <td>$ {price}</td>
                </th>

                <th>
                    {
                        status === 'Confirm' ? <p>Confirm</p> :
                        <button onClick={() => handleUpdate(_id)}>Please Confirm</button>
                    }
                </th>
            </tr>
        </tbody>
    );
};

export default TableRow;