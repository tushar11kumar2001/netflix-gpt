import { logoURL } from "../utils/constant";

const Header = () => {
  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-44 py-2 z-20 h-screen">
      <img className=" w-44 h-20 " src={logoURL} alt="netflix logo" />
    </div>
  );
};

export default Header;
