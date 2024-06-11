import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { authProvider } from "../../provider/AuthProvider";
import axios from "axios";

const Login = () => {
    const { signInUser } = useContext(authProvider);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then((result) => {
            console.log(result.user);
            const loggedUser = {email}
            axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
            .then(res => {
                console.log(res.data)
                if(res.data.success){
                    navigate(location?.state ? location?.state : '/')
                }
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-3xl font-semibold mt-5 pl-5">Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-base font-bold my-5 pl-5">Have an account? <Link to="/register" className="text-base font-bold text-orange-500">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;