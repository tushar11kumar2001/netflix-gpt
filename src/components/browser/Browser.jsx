import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROOT } from '../../../route';
import { auth } from '../../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";


const Browser = () => {
const navigate = useNavigate();

function handlelogout(){
    // console.log("handlelogout");
signOut(auth).then(() => {
  // Sign-out successful.
  sessionStorage.clear();
  navigate(ROOT.SIGNIN);
}).catch((error) => {
  // An error happened.
});
  }



    // const [loggedInUser,setloggedIn] = useState();
    // useEffect(()=>{
    //     console.log("loggedinuser browser" , loggedInUser);
    // },[loggedInUser])
    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/auth.user
    //         setloggedIn(user);
    //           // ...
    //         } else {
    //           // User is signed out
    //           navigate(ROOT.SIGNIN);
    //         }
    //       });
    // },[])

   
    
return (
    <div>
        <div>INside browser</div>
        <button onClick={handlelogout}>signout</button>
    </div>
)
  
}

export default Browser;
