import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();

    toast.success("registered successfully !", {
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
        <div className="drop2">
          <div className="relative flex flex-col justify-center items-center text-center p-[40px] gap-[15px]">
            <h1 className="relative text-[#0b0ebd] text-[1.5em] font-bold">
              Sign up
            </h1>
            <form action="" className="flex flex-col gap-[20px]">
              <div className="inputbox2">
                <input
                  className=""
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>
              <div className="inputbox2">
                <input
                  className=""
                  type="password"
                  name=""
                  id=""
                  placeholder="password"
                />
              </div>
              <div className="inputbox2">
                <input
                  className=""
                  type="password"
                  name=""
                  id=""
                  placeholder="retype password"
                />
              </div>
              <div className="inputbox2">
                <input onClick={handleSignup} type="submit" value="signup" />
              </div>
            </form>
          </div>
        </div>
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

export default Signup;
