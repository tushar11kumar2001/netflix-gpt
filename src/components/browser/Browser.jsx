import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";

const Browser = () => {
    const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);

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
          <div>INside browser {userobj?.displayName}</div>
          <button onClick={handlelogout}>signout</button>
        </>
      ) : (
       <Login/>
      )}
    </>
  );
};

export default Browser;
