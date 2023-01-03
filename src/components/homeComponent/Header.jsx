import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const Menu = () => (
    <>
      <Link
        to="/"
        className=" text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer hover:underline hover:uppercase hover:font-bold"
      >
        Home
      </Link>
      <Link
        to="/templates"
        className=" text-base font-medium text-gray-500 cursor-pointer hover:text-gray-900 hover:underline hover:font-bold hover:uppercase"
      >
        Templates
      </Link>
      <Link
        to="/SignIn"
        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer hover:uppercase"
      >
        Sign in
      </Link>
      <Link
        to="/SignUp"
        className=" inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer hover:uppercase"
      >
        Sign up
      </Link>
    </>
  );

  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <>
      <div className="bg-stone-200 w-auto px-10 mx-auto flex items-center justify-center border-b-2 border-gray-100 py-6  ">
        <div className="w-auto mx-auto ml-0 sm:mx-auto">
          <Link to="/">
            <img className="cursor-pointer  w-48 sm:w-56" src={Logo} alt="" />
          </Link>
        </div>
        <div className="hidden sm:flex gap-10 justify-center items-center w-auto h-auto mx-auto px-4 ">
          <Menu className=" " />
        </div>
        <div className="md:hidden">
          {toggleMenu ? (
            <MdClose
              size={25}
              onClick={() => {
                settoggleMenu(false);
              }}
            />
          ) : (
            <FaBars
              size={25}
              onClick={() => {
                settoggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <div className="bg-stone-300 rounded-lg flex flex-col w-auto h-auto justify-end p-6  absolute right-8 top-20 mt-4 min-w-min items-end gap-y-6">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
