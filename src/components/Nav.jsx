import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/" className="hover:text-coral-red">Sign in</a>
          <span>/</span>
          <a href="/" className="hover:text-coral-red">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={toggle ? close : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-15 -right-5  z-10`}
          >
            <ul className="-mt-5">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/"
                  className="font-montserrat text-lg text-slate-gray hover:text-coral-red"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-montserrat text-lg text-slate-gray hover:text-coral-red"
                >
                  Explore now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
