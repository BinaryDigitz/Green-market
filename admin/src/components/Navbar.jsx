import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const isLogin =0
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Orders", link: "/orders" },
  ];
  return (
    <nav className="h-18 bg-green-50 flex justify-around items-center">
      <Link
        to="/"
        className="text-xl lg:text-3xl cursor-pointer font-medium text-green-800"
      >
        Admin
      </Link>
      <ul className="flex gap-4 text-[17px] ">
        {navlinks.map((link) => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        {
          isLogin ? (
            <button className="border font-medium border-red-200 px-5 py-1 rounded-sm bg-red-100 cursor-pointer text-red-800 hover:bg-red-300">Log out</button>
          ): (
            <button className="border font-medium border-green-200 px-6 py-1 rounded-sm bg-green-100 cursor-pointer text-green-800 hover:bg-green-300">Login</button>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;
