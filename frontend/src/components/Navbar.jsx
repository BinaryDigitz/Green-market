import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "./exportComp";
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { user, closeAllMenu,  setShowLoginPage, setUser, navigate } = useContext(AppContext);

  async function logout(){

  }
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/">
        <img className="h-9" src={assets.logo} alt="Green market logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="size-4" />
        </div>

        <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
          <img
            src={assets.cart_icon}
            alt="cart"
            className="size-4 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-[var(--primary-color)] w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {
            !user ? (
            <button onClick={() => setShowLoginPage(true)} className="cursor-pointer px-8 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-color-tone)] transition text-white rounded-full">
          Login
        </button>
            ) :(
                <div className="relative group">
                    <img src={ assets.profile_icon} className="w-10" alt="" />
                    <ul className="hidden absolute w-24 border rounded-sm top-10 right-0 bg-green-50  p-3 border-green-100 group-hover:block">
                        <li onClick={()=>navigate('/profile')} className="cursor-pointer bg-primary-color/10">Profile</li>
                        <li onClick={()=>navigate('/orders')} className="cursor-pointer bg-gray-100 py-2">Orders</li>
                        <li onClick={logout} className="text-red-600 min-w-full cursor-pointer bg-red-100 hover:bg-red-50 trans">Log out</li>
                    </ul>
                </div>
            )
        }
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu" />
      </button>

      {/* Mobile Menu */}
     {
        open && (
            <div
            className={`${
              open ? "flex" : "hidden"
            } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
          >
            <NavLink to="/" onClick={closeAllMenu} className="block">
              Home
            </NavLink>
            <NavLink to="/products" onClick={closeAllMenu} className="block">
              All Products
            </NavLink>
            <NavLink to="/contact" onClick={closeAllMenu} className="block">
              Contact
            </NavLink>
            {user && (
              <NavLink to="/orders" onClick={closeAllMenu} claLssName="block">
                My Orders
              </NavLink>
            )}
            {!user ? (
              <button
               onClick={() =>{
                closeAllMenu()
                setShowLoginPage(true)
               }} 
               className="cursor-pointer px-6 py-2 mt-2 bg-[var(--primary-color)] hover:bg-[var(--primary-color-tone)] transition text-white rounded-full text-sm">
                Login
              </button>
            ) : (
              <button 
              onClick={() =>{
                closeAllMenu()
                setUser(null)
                navigate('/')
              }}
               className="cursor-pointer px-6 py-2 mt-2 bg-[var(--primary-color)] hover:bg-[var(--primary-color-tone)] transition text-white rounded-full text-sm">
                Logout
              </button>
            )}
          </div>
        )
     }
    </nav>
  );
}

export default Navbar;
