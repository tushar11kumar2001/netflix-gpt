
import {Route, Routes, Navigate} from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/signup/SignUp"
import SignUpHI from "./components/signup/SignUpHI"
import Registration from "./components/registration/Registration"
import RegistrationHI from "./components/registration/RegistrationHI"
import RegistrationForm from "./components/registration/RegistrationForm"
import { EmailContext } from "./utils/emailContext"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import {addUser,removeUser} from "./redux/userSlice"
import { useDispatch } from "react-redux"
import Browser from "./components/browser/browser"


function App() {

   const [uid,setUid] = useState();
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
          const{displayName,email,uid} = user;
          dispatch(addUser({displayName:displayName,email:email,uid:uid}));
          setUid(sessionStorage.getItem("authuid"));
            // ...
          } else {
            dispatch(removeUser());
            console.log("signout");
          }
        });
    },[])
 return (
  <>
  <EmailContext.Provider  value = {{email : email , setEmail:setEmail}}>
   <Routes>
    <Route path="/" element= {<Login/>}/>
    <Route path="/in/" element= {<SignUp/>}/>
    <Route path="/in-hi/" element= {<SignUpHI/>}/>
    <Route path="/signup/registration" element= {<Registration/>}/>,
    <Route path="/signup/registration-hi" element= {<RegistrationHI/>}/>,
    <Route path="/signup/regform" element= {<RegistrationForm/>}/>,
    <Route path="/browser" element= {uid?<Browser/>:<Login/>}/>,

   </Routes>
   </EmailContext.Provider>
  </>
 )
}

export default App



