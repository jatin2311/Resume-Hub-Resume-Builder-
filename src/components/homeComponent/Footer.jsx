import Logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="sm:absolute left-0 bottom-0 right-0 py-auto bg-stone-200 h-auto flex mx-auto">
        <div className="">
          <Link to="/">
            <img
              className="mx-2 sm:mx-28 p-4 xl:p-8 w-48 sm:w-72 "
              src={Logo}
              alt=""
            />
          </Link>
          <p className="w-[200px] sm:w-auto mx-4 sm:mx-32 text-stone-600 text-center text-xs sm:text-xl italic mb-1 xl:mb-10">
            Build Your resume using templates.
          </p>
        </div>
        <div className="mx-auto p-8 ">
          <p className="font-medium text-stone-500 text-xl sm:text-2xl">
            Social
          </p>
          <a href="https://github.com/mfaizk/Resume-Hub-Resume-Builder-">
            <FaGithub className="mt-4 sm:mt-6 w-8 sm:w-12" size={40} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
