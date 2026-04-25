import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import userAvatar from "@/assets/user.png"

const Navbar = () => {

    const links = <>
        <li ><NavLink  href="/">Home</NavLink></li>
        <li><NavLink  href="/about">About</NavLink></li>
        <li><NavLink  href="/career">Career</NavLink></li>
    </>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-xl">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
            <Image 

            src={userAvatar}
            alt="User Avatar"
            width={50}
            height={50}
            >

            </Image>
          <button className="btn bg-purple-500 text-white text-xl "> <Link href={"/login"}>Login</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
