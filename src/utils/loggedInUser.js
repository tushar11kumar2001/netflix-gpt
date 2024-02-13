
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
const loggedInUser = () => {
   let tushar;
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
           tushar = user;
           console.log("fn loggedinuser" , tushar);
          // ...
        } else {
          // User is signed out
        }
      });
      return tushar;
}

export default loggedInUser
