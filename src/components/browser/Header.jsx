import React from 'react'
import { logoURL, profileLogoURL } from "../../utils/constant";
import { useEffect, useState } from "react";
import { useFirebaseContext } from "../../utils/firebaseContext";


const Header = ({ userobj }) => {
    const [photoURL, setPhotoURL] = useState(null);
    const firebaseContext = useFirebaseContext()

    useEffect(() => {
        firebaseContext.getUser(userobj.uid)
            .then(result => firebaseContext.getImageURL(result?.docs[0]?.data()?.imageURL)
                .then(result => setPhotoURL(result)));
    }, [])

    function handlelogout() { firebaseContext.logout() }

    return (
        <>
            <div className="fixed w-full bg-gradient-to-b from-black/75 px-10 py-1 flex justify-between items-center z-10">
                <img className=" w-36 " src={logoURL} alt="netflix logo" />
            </div>

            <div className=" fixed  right-14 top-4 group cursor-pointer flex flex-col items-end z-10">
                <div>
                    <img
                        src={photoURL ? photoURL : profileLogoURL}
                        alt="profile logo"
                        className="inline mr-2 rounded w-9 h-9"
                    />
                    <span>
                        <i className="fa-solid fa-caret-down group-hover:rotate-180 duration-300"></i>
                    </span>
                </div>
                <ul className=" border border-white w-44 bg-black bg-opacity-70 text-white mt-4 hidden group-hover:block">
                    <li className=" py-3 pl-3 hover:text-lg">
                        <img src={photoURL ? photoURL : profileLogoURL} className="w-10 h-10 rounded" />
                        {userobj?.displayName}
                    </li>
                    <li className=" py-3 pl-3 hover:text-lg">Manage Profile</li>
                    <li className=" py-3 pl-3 hover:text-lg">Account</li>
                    <li className=" py-3 pl-3 hover:text-lg">Help Center</li>
                    <li
                        className=" py-3 pl-3 border border-white hover:bg-red-600"
                        onClick={handlelogout}
                    >
                        Sign Out of netflix
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
