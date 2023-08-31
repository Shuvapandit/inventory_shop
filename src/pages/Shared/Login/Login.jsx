import React from "react";
import loginimg from "../../../assets/images/loginimg/login.gif";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsersauthContext } from "../Userscontext/UsersContext";

const Login = () => {
  const {signIn} = useContext(UsersauthContext);
  const loginhandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
    .then(result=>{
      const loogedUser=result.user;
      /* console.log(loogedUser); */

    })
    .catch(error=>{
      console.log(error);

    })
  };
  return (
    <div className="flex flex-row">
      <div className="w-3/6">
        <img className="h-full" src={loginimg} alt="Login" />
      </div>
      <div className="w-3/6">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              LogIn
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={loginhandle}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form>
          
            <div className="mt-6  text-sm ">
          <Link  to="/signup"> 
          <p className=" link link-hover btn-link ">
          New to E-shop?
                  </p>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
