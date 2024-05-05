import Header from "./Header";
import formValidation from "../utils/formvalidation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../route";
import { useFirebaseContext } from "../utils/firebaseContext.jsx";
import { useSelector } from "react-redux";
import { backgroundLogoURL } from "../utils/constant";

const Login = () => {
  const firebaseContext = useFirebaseContext();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [valid, setValid] = useState(null);
  const [showPassword,setShowPassword] = useState(false);
  const userObj = useSelector((store) => store.user);

  useEffect(()=>{ if(userObj?.uid) navigate(ROOT.BROWSER) },[userObj])
  const handleShowPassword = ()=>{
    setShowPassword(!showPassword)
  }
  const handlevalid = () => {
    const message = formValidation(email.current.value, password.current.value);
    setValid(message);
    if (message) return;
    firebaseContext.login(email.current.value,password.current.value,setValid);
    
  };
  return (

        <div className="">
          <Header />
          <div className="absolute">
            <img className="" src={backgroundLogoURL} alt="background image" />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-black absolute w-3/12 my-36 mx-auto left-0 right-0 p-12 text-white bg-opacity-80 rounded-lg z-20"
          >
            <h1 className="font-medium mb-6 text-3xl">Sign In</h1>
            <input
              ref={email}
              className="w-full p-4 my-4 bg-gray-600 rounded-lg outline-none hover:border-2 border-red-800"
              type="text"
              placeholder="Email Address"
            />
            <div className="flex justify-between items-center pr-3  w-full  my-4 bg-gray-600 rounded-lg hover:border-2 border-red-800">
            <input
              ref={password}
              className="p-4 w-11/12  bg-gray-600 rounded-lg outline-none "
              type={showPassword?"text":"password"}
              placeholder="Password"
            />
            {showPassword?<i className="fa-solid fa-eye-slash cursor-pointer" onClick={handleShowPassword}></i>: <i className="fa-solid fa-eye cursor-pointer" onClick={handleShowPassword}></i>}
           
            </div>
            <p className="text-red-600 font-medium">{valid}</p>
            <button
              className="w-full p-4 my-6 bg-red-600 rounded-lg "
              onClick={handlevalid}
            >
              Sign In
            </button>

            <p className="py-4">
              New to Netflix?{" "}
              <span
                className="cursor-pointer font-medium"
                onClick={() => {
                  navigate(ROOT.SIGNUP);
                }}
              >
                Sign Up Now
              </span>
            </p>
          </form>
        </div>

  );
};

export default Login;
