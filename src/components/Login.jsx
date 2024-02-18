import Header from "./Header";
import formValidation from "../utils/formvalidation";
import Browser from "./browser/Browser";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../route";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector } from "react-redux";
import { backgroundLogoURL } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [valid, setValid] = useState(null);
  const userObj = useSelector((store) => store.user);

  const handlevalid = () => {
    const message = formValidation(email.current.value, password.current.value);
    setValid(message);
    if (message) return;

    //login logic
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigate(ROOT.BROWSER);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValid(errorCode + errorMessage);
      });
  };
  return (
    <>
      {userObj?.uid ? (
        <Browser />
      ) : (
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
              className="w-full p-4 my-4 bg-gray-600 rounded-lg"
              type="text"
              placeholder="Email Address"
            />
            <input
              ref={password}
              className="w-full p-4 my-4 bg-gray-600 rounded-lg"
              type="password"
              placeholder="Password"
            />
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
      )}
    </>
  );
};

export default Login;
