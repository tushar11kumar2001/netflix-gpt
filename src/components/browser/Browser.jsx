import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";
import { logoURL, profileLogoURL } from "../../utils/constant";

const Browser = () => {
  const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);
  const userObj = useSelector((store) => store.user);
  function handlelogout() {
    signOut(auth)
      .then(() => {
        navigate(ROOT.LOGIN);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <>
      {userobj?.uid ? (
        <>
          <div className="fixed w-full bg-gradient-to-b from-black/75 px-10 py-1 flex justify-between items-center">
            <img className=" w-36 " src={logoURL} alt="netflix logo" />
          </div>

          <div className=" fixed  right-14 top-4 group cursor-pointer flex flex-col items-end ">
            <div>
              <img
                src={profileLogoURL}
                alt="profile logo"
                className="inline mr-2 rounded w-9"
              />
              <span>
                <i className="fa-solid fa-caret-down group-hover:rotate-180 duration-300"></i>
              </span>
            </div>
            <ul className=" border border-white w-44 bg-black bg-opacity-70 text-white mt-4 hidden group-hover:block">
              <li className=" py-3 pl-3 hover:text-lg">
                <img src={userObj?.photoURL } />
                {userObj?.displayName}
              </li>
              <li className=" py-3 pl-3 hover:text-lg">Manage Profile</li>
              <li className=" py-3 pl-3 hover:text-lg">Account</li>
              <li className=" py-3 pl-3 hover:text-lg">Help Center</li>
              <li
                className=" py-3 pl-3 border border-white hover:bg-red-600"
                onClick={handlelogout}
              >
                Sign Out of netflix
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Browser;
