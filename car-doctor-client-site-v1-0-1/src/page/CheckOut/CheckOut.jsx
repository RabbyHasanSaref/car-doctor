import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const checkOut = useLoaderData();
    const { title } = checkOut;

    return (
        <div className="my-10">
            <div>
                <h2 className="text-center text-2xl font-semibold">Check Out</h2>
                <div className="my-3">
                    <h1 className="text-center">Check Out : {title}</h1>
                </div>
                <div className="my-5 w-[900px] mx-auto border-2 p-5">
                    <form>
                        <div className="flex items-center gap-5">
                            <div>
                                <div className="w-[400px] mx-auto">
                                    <input type="text" name="fname" placeholder="First Name" className=" w-full my-3 p-3 border-2" />
                                </div>
                            </div>
                            <div>
                                <div className="w-[400px] mx-auto">
                                    <input type="text" name="lname" placeholder="Last Name" className=" w-full my-3 p-3 border-2" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div >
                                <div className="w-[400px] mx-auto">
                                    <input type="text" name="phone" placeholder="Phone" className="w-full p-3 border-2" />
                                </div>
                            </div>
                            <div className="w-[400px] mx-auto">
                                <input type="email" name="email" placeholder="Email" className="w-full p-3 border-2" />
                            </div>
                        </div>

                        <div>
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" className="w-full my-3 border-2 p-3"></textarea>
                        </div>

                        <button className="btn bg-orange-500 w-full">Order Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;