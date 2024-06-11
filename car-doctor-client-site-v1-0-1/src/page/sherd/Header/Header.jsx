import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { authProvider } from "../../../provider/AuthProvider";

const Header = () => {
    const { user, handleLogOut } = useContext(authProvider);
    const handleUserLogOut = () => {
        handleLogOut()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const navItem = <>
        <li className="text-base font-semibold mr-5"><Link>Home</Link></li>
        <li className="text-base font-semibold mr-5"><Link>About</Link></li>
        <li className="text-base font-semibold mr-5"><Link>Service</Link></li>
        <li className="text-base font-semibold mr-5"><Link>Blog</Link></li>
        <li className="text-base font-semibold mr-5"><Link>Contact</Link></li>
        {
            user ? <>
            <li className="text-base font-semibold mr-5"><Link to="/bookserv">My Booking</Link></li>
            <button onClick={handleUserLogOut} className="btn bg-orange-500">Log Out</button>
            </> :
                <li className="btn bg-orange-500"><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/"><img className="w-[100px] h-[50px]" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center lg:gap-5 gap-2 lg:mr-5 mr-2">
                    <FaCartShopping className="text-2xl font-semibold cursor-pointer"></FaCartShopping>
                    <FaSearch className="text-2xl font-semibold cursor-pointer"></FaSearch>
                </div>
                <a className="btn border-2 border-orange-500 text-orange-500">Appointment</a>
            </div>
        </div>
    );
};

export default Header;