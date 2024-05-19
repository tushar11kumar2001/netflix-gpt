
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";
import { useFirebaseContext } from "../../utils/firebaseContext.jsx";
const Header2 = ({ btn }) => {
  const navigate = useNavigate();
  const firebaseContext = useFirebaseContext();
  function handleClick() {
    if(btn === "Sign In")  navigate(ROOT.LOGIN);
    else {
    firebaseContext.logout();
    }
  }
  return (
    <div>
      <nav className="flex justify-between items-center pl-6 pr-16  border-b">
        <img
          className=" w-52 h-22 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix"
        />
        <p
          className="text-xl font-semibold cursor-pointer"
          onClick={handleClick}
        >
          {btn}
        </p>
      </nav>
    </div>
  );
};

export default Header2;
