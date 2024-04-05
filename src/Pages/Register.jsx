import { Link } from "react-router-dom";
import Navbar from "../components/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Register = () => {
    const { createAccount } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const name = from.get('name');
        const url = from.get('url');
        const email = from.get('email');
        const password = from.get('password');
        createAccount(email, password)
            .then(result => {
                const user = result.user;
                alert('account Create successfully')
            })
            .catch(error => console.log(error))}


    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <h1 className="text-4xl font-bold text-black py-4 border-b-2 my-7">Register your account</h1>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Enter your name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo-url</span>
                                </label>
                                <input type="text" name="url" placeholder="Photo-url" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center text-sm">Already Have An Account? <Link to={'/Login'} className="text-blue-600 ">Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;