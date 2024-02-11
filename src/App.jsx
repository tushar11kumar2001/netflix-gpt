
import {Route, Routes, Navigate} from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/signup/SignUp"
import SignUpHI from "./components/signup/SignUpHI"
import Registration from "./components/registration/Registration"
import RegistrationHI from "./components/registration/RegistrationHI"
import RegistrationForm from "./components/registration/RegistrationForm"
import { EmailContext } from "./utils/emailContext"
import { useState } from "react"
function App() {
    const [email,setEmail] = useState("");
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
   </Routes>
   </EmailContext.Provider>
  </>
 )
}

export default App
