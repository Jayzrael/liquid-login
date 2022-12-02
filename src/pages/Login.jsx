import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [modal, setModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();

    setModal(!modal);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    toast.success("Logged in successfully !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="container">
        <div className="drop">
          <div className="relative flex flex-col justify-center items-center text-center p-[40px] gap-[15px]">
            <h1 className="relative text-[#333] text-[1.5em] font-bold">
              Sign in
            </h1>
            <form action="" className="flex flex-col gap-[20px]">
              <div className="inputbox">
                <input
                  className=""
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>
              <div className="inputbox">
                <input
                  className=""
                  type="password"
                  name=""
                  id=""
                  placeholder="password"
                />
              </div>
              <div className="inputbox">
                <input onClick={handleLogin} type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
        <Link to="signup" className="btn" href="">
          Sign up
        </Link>
        <a onClick={handleModal} className="btn signup" href="">
          Forgot password
        </a>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
};

export default Login;
