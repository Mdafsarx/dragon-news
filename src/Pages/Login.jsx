import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Login = () => {
    const navigate = useNavigate()
    const { Login } = useContext(AuthContext)
    const state = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');
        Login(email, password)
            .then(() => {
               navigate(state.state)
               alert('successfully login')
            })

    }

    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <h1 className="text-4xl font-bold text-black py-4 border-b-2 my-7">Login your account</h1>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered " required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center text-sm">Dont’t Have An Account? <Link to={'/Register'} className="text-blue-600 ">Register</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;