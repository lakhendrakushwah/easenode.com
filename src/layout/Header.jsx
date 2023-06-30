import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [toggleBar, setToggleBar] = useState(false);
  return (
    <header className="bg-transparent">
      <nav className="container h-16 flex justify-between items-center gap-1 lg:gap-10 ">
        <div>
          <Link to="/">
            <img
              className="w-8/12 mt-3"
              src="/images/logo.png"
              alt="Easexpense logo"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex gap-3 lg:gap-20 items-center font-poppins font-semibold">
          <li>
            <NavLink
              className="text-[#999999] hover:text-secondary transition-all"
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <HashLink
              className="text-[#999999] hover:text-secondary transition-all"
              to="/#blog-section-id"
              smooth
            >
              Blog
            </HashLink>
          </li>

          <li>
            <HashLink
              className="text-[#999999] hover:text-secondary transition-all"
              to="/"
            >
              About us
            </HashLink>
          </li>
          
          <li>
            <NavLink
              className="text-[#999999] hover:text-secondary transition-all"
              to="contact"
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-2 md:gap-5">
          <ul className=" gap-5 font-medium font-roboto hidden lg:flex">
            <li>
              <Link className="text-main ">Sing In</Link>
            </li>

            <li>
              <Link className="bg-[#D0EDFB] text-main rounded-lg py-3 px-4">
                Free trial
              </Link>
            </li>
          </ul>
          <div
            className="block lg:hidden"
            onClick={() => setToggleBar(!toggleBar)}
          >
            <span className="text-xl">
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
        {toggleBar && (
          <ul className=" flex flex-col gap-10  font-poppins font-semibold absolute top-0 bottom-0 left-0 bg-[#D0EDFB] w-9/12 h-screen z-10 shadow-xl px-10">
            <div>
              <Link to="/">
                <img
                  className="w-60 mt-10 mb-8"
                  src="/images/logo.png"
                  alt="Easexpense logo"
                />
              </Link>
            </div>
            <li>
              <Link to="/" onClick={() => setToggleBar(!toggleBar)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/blog" onClick={() => setToggleBar(!toggleBar)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setToggleBar(!toggleBar)}>
                About us
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={() => setToggleBar(!toggleBar)}>
                Contact us
              </Link>
            </li>

            <li>
              <div className=" gap-3 font-medium font-roboto flex flex-col text-center">
                <Link className="text-main inline-block  text-md  lg:text-lg font-medium hover:bg-main hover:text-light border border-main rounded py-5 px-8 transition-all duration-300">
                  Sing In
                </Link>

                <Link className="hover:text-main inline-block text-md  lg:text-lg font-medium hover:bg-transparent bg-main text-light border border-main rounded py-5 px-8 transition-all duration-300">
                  Free trial
                </Link>
              </div>
            </li>
            <div
              className="absolute top-5 right-5"
              onClick={() => setToggleBar(!toggleBar)}
            >
              <span className="text-xl">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
