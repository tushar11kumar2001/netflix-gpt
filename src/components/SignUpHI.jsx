import Header from "./Header";
import { Link } from "react-router-dom";
const SignUpHI = () => {
  return (
    <div >
      <Header />
      <div className="absolute right-0 z-20 top-8 px-44 py-2 text-white">
       
      <Link to="/in/"> <span className="mr-5">English</span></Link>
        <Link to="/">
          {" "}
          <button className="px-3 py-1.5 bg-red-600 text-white rounded-md">
          साइन इन करें
          </button>
        </Link>
      </div>
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <div className="absolute mx-auto right-0 left-0 my-72 text-white z-20 flex flex-col items-center">
        <h1 className="text-center text-5xl font-bold">
        अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ
        </h1>
        <p className="text-center py-7 text-2xl font-bold tracking-wider">
        जहां चाहें देखें. जब चाहें कैंसल करें.
        </p>
        <p className="text-center text-xl font-medium mb-7">
        देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.
        </p>
        <form onSubmit = {(e)=> e.preventDefault()}className="mx-auto left-0 right-0">
            <input type="text" className="px-2 py-4 mr-3 w-96 bg-black bg-opacity-50 border-white rounded-md "placeholder="Email address" required/>
            <button className="py-3 bg-red-600 px-5 text-2xl rounded-md font-medium">शुरू करें</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpHI;
