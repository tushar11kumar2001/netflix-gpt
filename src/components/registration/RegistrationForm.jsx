import React, { useRef, useState } from "react";
import Header2 from "./Header2";
import { EmailContext } from "../../utils/emailContext";
import { useContext } from "react";
import formValidation from "../../utils/formvalidation";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/userSlice";
import { ROOT } from "../../../route";
import { profileLogoURL } from "../../utils/constant";

const RegistrationForm = () => {
  const { email } = useContext(EmailContext);
  const [useremail, setUserEmail] = useState(email);
  const [isvalid, setValid] = useState(null);
  const [hide, setHide] = useState(false);
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const nameref = useRef(null);
  const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // console.log("username ",userobj);

  function handleValid() {
    const message = formValidation(
      emailref.current.value,
      passwordref.current.value
    );
    setValid(message);
    if (message) return;

    //sign up logic
    createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passwordref.current.value
    )
      .then((userCredential) => {
        // Signed up
        // console.log("createUserWithEmail");
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nameref.current.value,
          photoURL: profileLogoURL,
        })
          .then(() => {
            // Profile updated!
            // console.log("updateProfile");
            const { displayName, email, uid, photoURL } = auth.currentUser;
            dispatch(
              addUser({ displayName: displayName, email: email, photoURL:photoURL ,uid: uid })
            );
          })
          .catch((error) => {
            // An error occurred
          });

        sendEmailVerification(user).then(() => {
          alert("verification done");
        });

        // navigate(ROOT.SIGNIN);
        setHide(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValid(errorCode + errorMessage);
        // ..
      });
    //
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
