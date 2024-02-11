import React, { useRef, useState } from "react";
import Header2 from "./Header2";
import { EmailContext } from "../../utils/emailContext";
import { useContext } from "react";
import formValidation from "../../utils/formvalidation";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegistrationForm = () => {
  const [isvalid, setValid] = useState(null);
  const [hide,setHide] = useState(false);
  const emailref = useRef(null);
  const passwordref = useRef(null);
  function handleValid() {
    const message = formValidation(emailref.current.value,passwordref.current.value);
    setValid(message);
    if(message) return;

    //sign up logic
    createUserWithEmailAndPassword(auth,emailref.current.value,passwordref.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    setHide(true);
    // console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValid(errorCode+errorMessage);
    // ..
  });
//   
  }
  const { email } = useContext(EmailContext);
  return (
    <div>
      <Header2 btn="Sign In" />
      {!hide && <div className="flex flex-col w-1/3  mx-auto mt-8 py-5 px-8 gap-5">
        <h1 className="text-4xl font-semibold text-gray-800">
          Create a password to start your membership
        </h1>
        <p className="text-xl text-gray-700">
          Just a few more steps and you're done! We hate paperwork, too
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col gap-5"
        >
          <input
          ref={emailref}
            type="text"
            className="border border-black h-12 rounded px-3"
            placeholder="Email address"
            // value={email}
          />
          <input
          ref={passwordref}
            type="password"
            className="border border-black h-12 rounded px-3"
            placeholder="Add a password"
          />
          <p className="text-red-600 font-medium">{isvalid}</p>
          <button
            className="h-16 bg-red-700 rounded text-white font-normal text-2xl"
            onClick={handleValid}
          >
            Next
          </button>
        </form>
      </div>
      }

      {hide && <h1>create successfully</h1>}
    </div>
  );
};

export default RegistrationForm;
