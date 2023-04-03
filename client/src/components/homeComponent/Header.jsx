import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/user.store";
import { useLoadingStore } from "../../store/loading.store";
import animationData from "../../assets/loading.json";
import Lottie from "lottie-react";
const Header = () => {
  const user = useUserStore((state) => state.user);
  const logOutUser = useUserStore((state) => state.logOutUser);
  const [toggleMenu, settoggleMenu] = useState(false);
  const loading = useLoadingStore((state) => state.loading);

  const LoggedInMenu = () => (
    <>
      <Link
        to="/"
        className=" text-base font-medium text-gray-500 transition ease-in-out delay-150 hover:scale-110 hover:text-black duration-300"
        onClick={() => {
          settoggleMenu(false);
        }}
      >
        Home
      </Link>
      <Link
        to="/templates"
        className=" text-base font-medium text-gray-500 cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:text-black duration-300"
        onClick={() => {
          settoggleMenu(false);
        }}
      >
        Templates
      </Link>
      <Link
        to="/signIn"
        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm cursor-pointer transition ease-in-out delay-150  hover:scale-110 hover:bg-indigo-500 duration-300"
        onClick={() => {
          settoggleMenu(false);
        }}
      >
        Sign in
      </Link>
      <Link
        to="/signUp"
        className=" inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm transition ease-in-out delay-150  hover:scale-110 hover:bg-indigo-500 duration-300"
        onClick={() => {
          settoggleMenu(false);
        }}
      >
        Sign up
      </Link>
    </>
  );
  const Menu = () => (
    <>
      <Link
        to="/"
        className=" text-base font-medium text-gray-500 cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:text-black duration-300"
        onClick={() => {
          settoggleMenu(false);
        }}
      >
        Home
      </Link>
      <Link
        to="/templates"
        className=" text-base font-medium text-gray-500 cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:text-black duration-300"
        onClick={() => {
          settoggleMenu(false);
        }}
      >
        Templates
      </Link>

      <div
        className="text-base font-medium text-gray-500 cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:text-black duration-300"
        onClick={() => {
          settoggleMenu(false);
        }}
      >
        {user.email}
      </div>
      {user.email ? (
        <>
          <Link
            to="/auth/data"
            className=" text-base font-medium text-gray-500 cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:text-black duration-300"
            onClick={() => {
              settoggleMenu(false);
            }}
          >
            Saved Data
          </Link>
        </>
      ) : (
        <></>
      )}
      <>
        {loading ? (
          <>
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-16"
            />
          </>
        ) : (
          <>
            <Link
              to="/"
              className=" inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#EF5354] px-4 py-2 text-base font-medium text-white shadow-sm transition ease-in-out delay-150  hover:scale-110 hover:bg-[#B4161B] duration-300"
              onClick={() => {
                logOutUser();
                settoggleMenu(false);
              }}
            >
              Logout
            </Link>
          </>
        )}
      </>
    </>
  );

  return (
    <>
      <div className="bg-stone-200 w-auto px-10 mx-auto flex items-center justify-center border-b-2 border-gray-100 py-6  ">
        <div className="w-auto mx-auto ml-0 sm:mx-auto">
          <Link to="/">
            <img className="cursor-pointer  w-48 sm:w-56" src={Logo} alt="" />
          </Link>
        </div>
        <div className="hidden sm:flex gap-10 justify-center items-center w-auto h-auto mx-auto px-4 ">
          {Object.keys(user).length < 1 ? (
            <LoggedInMenu className=" " />
          ) : (
            <Menu />
          )}
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
              {Object.keys(user).length < 1 ? (
                <LoggedInMenu className=" " />
              ) : (
                <Menu />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
