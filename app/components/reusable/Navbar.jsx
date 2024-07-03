// components/reusable/Navbar.jsx
import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/WhiteLogo.svg";
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { useAuth } from "../../authContext";
import avatars from "../../assets/images/avatarImports";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const user = isLoggedIn ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-20 bg-opacity-70 bg-gray-800">
      <div className="flex items-center gap-2">
        {isLoggedIn && user ? (
          <>
            <Image
              src={avatars[user.avatar]}
              alt="user avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="changaregular text-lg text-white">
              {user.username}
            </span>
          </>
        ) : (
          <FaUser className="text-second text-xl" />
        )}
        <GoHomeFill className="text-second text-[22px]" />
      </div>
      <div>
        <Image src={Logo} className="w-24" alt="logo" priority />
      </div>
    </div>
  );
};

export default Navbar;
