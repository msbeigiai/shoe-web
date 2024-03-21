import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button
        onClick={() => setIsMobileMenu(!isMobileMenu)}
        className="lg:hidden hover:bg-gray=100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div className={`${isMobileMenu || "hidden"} w-full lg:w-auto lg:block`}>
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 rounded-lg p-4 lg:bg-transparent lg:border-none">
          {ROUTES.map((route, index) => {
            return (
              <li
                className={`rounded cursor-pointer py-2 px-3 ${index === 0 ? "bg-blue-500 lg:bg-transparent text-white lg:text-blue-500" : "hover:bg-gray-100"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="flex-center rounded-full bg-white shadow-md h-12 w-12">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
