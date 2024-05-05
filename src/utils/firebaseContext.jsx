// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  onAuthStateChanged, 
  sendEmailVerification, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile } from "firebase/auth";
import { getDocs, getFirestore, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage } from "firebase/storage";
import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { ROOT } from "../../route";
import { useNavigate } from "react-router-dom";
import { profileLogoURL } from "./constant";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzAwRP5JD-0noUbsli2RqO87MQB1ns_dY",
  authDomain: "netflix-gpt-73203.firebaseapp.com",
  projectId: "netflix-gpt-73203",
  storageBucket: "netflix-gpt-73203.appspot.com",
  messagingSenderId: "433675501572",
  appId: "1:433675501572:web:4294994b1ee3e6cf16f551",
  measurementId: "G-KER8LBRG2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const firebaseStore = getFirestore(app);
export const fiebaseStorage = getStorage(app);

const firebaseContext = createContext({});
export const useFirebaseContext = () => useContext(firebaseContext);

const FirebaseContextProvider = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authChanged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("onauthStateChanged");
        const { displayName, email, uid, photoURL } = user;
        dispatch(addUser({ displayName: displayName, email: email, photoURL: photoURL, uid: uid }));
      } else {
        dispatch(removeUser());
      }
    });
  };

  const login = (email, password, setValid) => {
    //login logic
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigate(ROOT.BROWSER);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValid(errorCode + errorMessage);
      });
  };

  const createNewUser = (email, password, name, profileImg, setHide, setValid) => {
    createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profileLogoURL,
        })
          .then(() => {
            const { displayName, email, uid, photoURL } = auth.currentUser;
            dispatch(addUser({ displayName: displayName, email: email, photoURL: photoURL, uid: uid, password: password }));
            addDataToFireStore(displayName, email, uid, password, profileImg);

          })
          .catch((error) => {
            // An error occurred
          });

        sendEmailVerification(user).then(() => {
          alert("verification done");
        });
        setHide(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValid(errorCode + errorMessage);
        // ..
      });
  }
  const addDataToFireStore = async (name, email, uid, password, profileImg) => {
    const imageRef = ref(fiebaseStorage, `uploads/images/${Date.now()}-${profileImg.name}`);
    const uploadResult = await uploadBytes(imageRef, profileImg);
    return await addDoc(collection(firebaseStore, 'users'), {
      username: name,
      email: email,
      uid: uid,
      password: password,
      imageURL: uploadResult.ref.fullPath,
    })


  }

  const getUser = async (uid) => {
    const collectionRef = collection(firebaseStore, "users");
    const q = query(collectionRef, where('uid', '==', uid));
    return await getDocs(q);
  }

  //get image
  const getImageURL = (path) => {
    return getDownloadURL(ref(fiebaseStorage, path));
  }

  const logout = () => {
    signOut(auth).then(() => { navigate(ROOT.LOGIN) })
  }
  return (
    <firebaseContext.Provider
      value={{
        authChanged,
        login,
        createNewUser,
        logout,
        getUser,
        getImageURL
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};
export default FirebaseContextProvider;
