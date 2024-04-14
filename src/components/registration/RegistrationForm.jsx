import React, { useRef, useState } from "react";
import Header2 from "./Header2";
import { EmailContext } from "../../utils/emailContext";
import { useContext } from "react";
import formValidation from "../../utils/formvalidation";


import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROOT } from "../../../route";
import { useFirebaseContext } from "../../utils/firebase";


const RegistrationForm = () => {
  const firebaseContext = useFirebaseContext();
  const { email } = useContext(EmailContext);
  const [useremail, setUserEmail] = useState(email);
  const [isvalid, setValid] = useState(null);
  const [hide, setHide] = useState(false);
  const emailref = useRef(null);
  const [password,setPassword] = useState(null);
  const nameref = useRef(null);
  const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [profileImg,setProfileImg] = useState(null);

  function handleValid() {
    const message = formValidation(
      emailref.current.value,
      password
    );
    setValid(message);
    if (message) return;

    //sign up logic
    firebaseContext.createNewUser(emailref.current.value,password,nameref.current.value,profileImg,setHide,setValid)
  }

  return (
    <div>
      <Header2 btn={hide === false ? "Sign In" : "Sign Out"} />
      {!hide && (
        <div className="flex flex-col w-1/3  mx-auto mt-8 py-5 px-8 gap-5">
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
              ref={nameref}
              type="text"
              className="border border-black h-12 rounded px-3"
              placeholder="Enter your name"
            />
            <input
              ref={emailref}
              type="text"
              className="border border-black h-12 rounded px-3"
              placeholder="Email address"
              value={useremail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <input
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="border border-black h-12 rounded px-3"
              placeholder="Add a password"
            />
            <p className="text-red-600 font-medium">{isvalid}</p>
            <label htmlFor="profileImg001">Add profile image</label>
            <input type="file" id="profileImg001" onChange={(e)=> setProfileImg(e.target.files[0])} />

            <button
              className="h-16 bg-red-700 rounded text-white font-normal text-2xl"
              onClick={handleValid}
            >
              Next
            </button>
          </form>
        </div>
      )}

      {hide && (
        <div className="flex flex-col w-1/3  mx-auto mt-8 py-5 px-8 gap-10">
          <div>
            <h1 className="text-5xl font-semibold text-gray-800 mb-5">
              Account Created
            </h1>
            <p className="text-gray-800">
              Use this email to access to your account
            </p>
          </div>
          <p className="font-semibold text-lg text-green-700">
            {userobj?.email}
          </p>
          <button
            className="h-16 bg-red-700 rounded text-white font-normal text-2xl"
            onClick={() => {
              navigate(ROOT.BROWSER);
            }}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
