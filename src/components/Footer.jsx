import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="sm:absolute left-0 bottom-0 right-0 py-auto bg-stone-200 h-auto flex mx-auto">
        <div className="">
          <img className="mx-2 sm:mx-28 p-8 w-56 sm:w-72 " src={Logo} alt="" />
          <p className="w-[200px] sm:w-auto mx-4 sm:mx-32 text-stone-600  italic mb-10">
            Build Your resume using templates.
          </p>
        </div>
        <div className="mx-auto  p-8 ">
          <p className="font-medium text-stone-500 text-2xl">Social</p>
          <FaGithub className="mt-6" size={40} />
        </div>
      </div>
    </>
  );
};

export default Footer;
