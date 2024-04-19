import MavlonLogo from "../assets/MavlonLogo.svg";
import searchIcon from "../assets/search-icon.svg";
import mobileNav from "../assets/open-nav-icon.svg";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import closeIcon from "../assets/icons8-close.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  const navRef = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      if (isResponsive) {
        nav.classList.add("responsive_nav");
      } else {
        nav.classList.remove("responsive_nav");
      }
    }
  }, [isResponsive]);

  const toggleResponsive = () => {
    setIsResponsive((prevState) => !prevState);
  };

  return (
    <header className="flex justify-between h-[50px] lg:h-[80px] py-[18px] relative items-center container">
      <Link to={"/"}>
        <img
          className="w-[66px] h-[20px] lg:w-[79.22px] lg:h-[24px]"
          src={MavlonLogo}
          alt="mavlon logo"
        />
      </Link>
      <nav className="flex items-center gap-[40px]">
        <ul
          ref={navRef}
          className="flex gap-[70px] md:gap-[40px] absolute md:static flex-col items-center justify-center md:flex-row inset-0 top-20 h-[88vh] md:h-auto w-screen md:w-auto bg-darkgreen md:bg-inherit"
        >
          <li>
            <Link to={"/"} className="text-darkgreen font-medium text-1xl leading-[24px]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/programs"}
              className="text-darkgreen font-medium text-1xl leading-[24px]"
            >
              Trips & Programs
            </Link>
          </li>
          <li>
            <Link
              to={"/about-us"}
              className="text-darkgreen font-medium text-1xl leading-[24px]"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-darkgreen font-medium text-1xl leading-[24px]">
              Book Now
            </Link>
          </li>
        </ul>
        <div className="mobile-nav flex gap-[20px] md:hidden items-center">
          <img src={searchIcon} alt="search-icon" />
          <img
            className="w-[33px] h-[32px]"
            onClick={toggleResponsive}
            src={isResponsive ? closeIcon : mobileNav}
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
