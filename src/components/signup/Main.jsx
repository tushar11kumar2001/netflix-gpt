
import { useNavigate } from 'react-router-dom';
import { useState,useRef } from 'react';
import formValidation from '../../utils/formvalidation';
import { ROOT } from '../../../route';
import { useContext } from 'react';
import { EmailContext } from '../../utils/emailContext';
const Main = ({lang,sign,heading,para1,para2,btn}) => {
  const {setEmail} = useContext(EmailContext);
    const navigate = useNavigate();
    const email = useRef(null);
    const [validEmail, setValidEmail] = useState(null);
  
    function isvalid() {
      let message = formValidation(email.current.value);
      if(message){
        if(lang==="English") message = "कृपया एक मान्य ईमेल दर्ज करें";
      }
      setValidEmail(message);
      if (message) return;
      if(lang==="English") navigate(ROOT.REGISTRATIONHI);
      else navigate(ROOT.REGISTRATION)
    }
  return (
    <div>
         <div className="absolute right-0 z-20 top-8 px-44 py-2 text-white">
        <span
          className="mr-5 cursor-pointer"
          onClick={() => {
          if(lang==="English") navigate(ROOT.SIGNUP);
          else navigate(ROOT.SIGNUPHI);
          }}
        >
         {lang}
        </span>{" "}
        <button
          className="px-3 py-1.5 bg-red-600 text-white rounded-md cursor-pointer"
          onClick={() => {
            navigate(ROOT.LOGIN);
          }}
        >
          {sign}
        </button>
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
          {heading}
        </h1>
        <p className="text-center py-7 text-2xl font-bold tracking-wider">
         {para1}
        </p>
        <p className="text-center text-xl font-medium mb-7">
          {para2}
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto left-0 right-0"
        >
          <input
            ref={email}
            type="text"
            className="px-2 py-4 mr-3 w-96 bg-black bg-opacity-50 border-white rounded-md "
            placeholder="Email address"
            required
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={isvalid}
            className="py-3 bg-red-600 px-5 text-2xl rounded-md font-medium"
          >
            {btn} 
          </button>
          <p className="text-rose-200 font-medium">{validEmail}</p>
        </form>
      </div>
    </div>
  )
}

export default Main
