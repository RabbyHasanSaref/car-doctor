import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Home";
import Error from "../page/sherd/Error/Error";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import CheckOut from "../page/CheckOut/CheckOut";
import Booking from "../page/Booking/Booking";
import BookServ from "../page/Booking/BookServ";
import Protect from "../protect/Protect";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "/booking/:id",
                element: <Protect>
                    <Booking></Booking>
                </Protect>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "/bookserv",
                element: <Protect>
                    <BookServ></BookServ>
                </Protect>
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            }
        ]
    },
]);

export default router;
