import MavlonLogo from "../assets/MavlonLogo.svg";
import mobileNavIcon from "../assets/open-nav-icon.svg";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import closeIcon from "../assets/icons8-close.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  // const navRef = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    if (navRef.current) {
      if (isResponsive) {
        navRef.current.classList.add("responsive");
      } else {
        navRef.current.classList.remove("responsive");
      }
    }
  }, [isResponsive]);

  function openNav() {
    setIsResponsive(true);
  }

  function closeNav() {
    setIsResponsive(false);
  }

  return (
    <header className="border-b border-darkgreen">
      <nav
        ref={navRef}
        className="container pt-[20.5px] pb-[15.5px] flex justify-between relative w-full"
      >
        <Link to={"/"}>
          <img
            src={MavlonLogo}
            alt="Mavlon Logo"
            className="w-[66.01px] lg:w-[79.22px] h-[20px] lg:h-[24px]"
            loading="lazy"
          />
        </Link>
        <div className="mobile-nav">
          <ul className="flex nav-list">
            <li className="text-darkgreen font-medium text-1xl leading-[24px]">
              <Link className="list" to={"/"}>
                Home
              </Link>
            </li>
            <li className="text-darkgreen font-medium text-1xl leading-[24px]">
              <Link className="list" to={"/programs"}>
                Trips & Programs
              </Link>
            </li>
            <li className="text-darkgreen font-medium text-1xl leading-[24px]">
              <Link className="list" to={"/about-us"}>
                About Us
              </Link>
            </li>
            <li className="text-darkgreen font-medium text-1xl leading-[24px]">
              <Link className="list" to={"/contact-page"}>
                Book Now
              </Link>
            </li>
          </ul>
          <button onClick={closeNav} className="close-nav-btn">
            <img src={closeIcon} alt="" loading="lazy" />
          </button>
        </div>
        <button onClick={openNav} className="open-nav-btn">
          <img src={mobileNavIcon} alt="toggle navbar icon" loading="lazy"/>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
