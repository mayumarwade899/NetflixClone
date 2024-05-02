import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-[21rem] pl-40 pt-2"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex justify-center items-center">
        <button
          onClick={handleSignOut}
          className="mr-5 ml-3 text-xl font-semibold"
        >
          <FontAwesomeIcon icon={faUser} /> SignOut
        </button>
      </div>}
    </div>
  );
};

export default Header;
