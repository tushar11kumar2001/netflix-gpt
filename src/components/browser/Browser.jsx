import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";

const Browser = () => {
  const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);
  const userObj = useSelector(store=>store.user);
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
            <img
              className=" w-36 "
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="netflix"
            />
          </div>

          <div className=" fixed  right-14 top-4 group cursor-pointer flex flex-col items-end ">
            <div>
              <img
                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
                alt="profile logo"
                className="inline mr-2 rounded w-9"
              />
              <span>
                <i className="fa-solid fa-caret-down group-hover:rotate-180 duration-300"></i>
              </span>
            </div>
            <ul className=" border border-white w-44 bg-black bg-opacity-70 text-white mt-4 hidden group-hover:block">
              <li className=" py-3 pl-3">
                <img src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" className="inline rounded w-5 mr-2"/>
                {userObj?.displayName}
              </li>
              <li className=" py-3 pl-3">Manage Profile</li>
              <li className=" py-3 pl-3">Account</li>
              <li className=" py-3 pl-3">Help Center</li>
              <li
                className=" py-3 pl-3 border border-white"
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
