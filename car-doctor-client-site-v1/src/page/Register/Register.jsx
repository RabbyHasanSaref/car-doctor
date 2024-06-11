import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { authProvider } from "../../provider/AuthProvider";
const Register = () => {
    const { createUser } = useContext(authProvider);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
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
                    <h2 className="text-3xl font-semibold mt-5 pl-5">Sign Up</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className="text-base font-bold my-5 pl-5">Already have an account? <Link to="/login" className="text-base font-bold text-orange-500">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;