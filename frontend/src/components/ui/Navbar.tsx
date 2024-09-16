import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.tsx";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/SearchIcon.tsx";

// Functional component using TypeScript
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full font-helvetica ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"} transition-all duration-200 items-center z-[999]`}
      >
        <div className={"flex justify-between items-center py-4"}>
          <div className={"flex-[1_1_45%] relative"}>
            <div className="hidden lg:block ml-6">
              <span className="flex items-center relative">
                <SearchIcon
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] ${isScrolled ? "fill-black" : "fill-white"}`}
                />
                <input
                  type={"text"}
                  placeholder={"Search"}
                  className={`${isScrolled ? "placeholder:text-black" : "placeholder:text-white"} bg-transparent outline-none text-black border-none text-[16px] font-medium leading-[32px] pl-9`}
                />
              </span>
            </div>
            <div className={"block lg:hidden ml-6"}>
              <span className="flex items-center">Search</span>
            </div>
          </div>
          <Link to={"/"}>
            <div className={"flex-shrink-0 text-center opacity-100"}>
              <Logo
                className={
                  "text-primary_red max-w-[147px] max-h-[44px] p-[10px]"
                }
              />
            </div>
          </Link>
          <div className={"flex flex-[1_1_45%] justify-end"}>
            <ul className={"hidden lg:flex gap-5 mr-6"}>
              <li>
                <Link to={"/sneakers"}>Sneakers</Link>
              </li>
              <li>
                <Link to={"/sneakers"}>FC Apparel</Link>
              </li>
              <li>
                <Link to={"/sneakers"}>FC Fridays</Link>
              </li>
              <li>
                <Link to={"/sneakers"}>Stores</Link>
              </li>
              <li>
                <Link to={"/sneakers"}>Favorites</Link>
              </li>
              <li>
                <Link to={"/sneakers"}>Account</Link>
              </li>
            </ul>
            <ul className={"flex lg:hidden gap-5 mr-6"}>
              <li>
                <Link to={"/sneakers"}>Menu</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
