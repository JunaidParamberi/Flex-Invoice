import React, { useContext } from "react";
import Logo from "../assets/main-logo-white.svg";
import avatar from "../assets/avatar.svg";
import noti from "../assets/Notofication.svg";
import gear from "../assets/gear.svg";
import arrowDown from "../assets/arrow-down.svg";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const currentUser = useContext(AuthContext);
  return (
    <div className="navbar-container w-full flex pl-[2%] pr-[2%] justify-between pt-[20px] pb-[10px] bg-[#090852] ">
      <img className="w-[100px] cursor-pointer" src={Logo} />

      <div className="flex gap-[20px]">
        <div className="flex gap-[10px] mr-[30px] icons">
          <img className="w-[20px] cursor-pointer" src={noti} alt="" />
          <img className="w-[20px] cursor-pointer" src={gear} alt="" />
        </div>
        <div className="user flex gap-[10px] items-center">
          {currentUser && (
            <p className="text-white font-thin max-w-[100px] overflow-hidden text-ellipsis">
              {currentUser.displayName || currentUser.email}
            </p>
          )}
          <img className="w-[30px] cursor-pointer" src={avatar} alt="" />
          <img className=" cursor-pointer" src={arrowDown} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
