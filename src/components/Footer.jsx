import mavlonLogo from "../assets/mavlon-logo-2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-[48px] lg:pt[64px] bg-white">
      <div className="container">
        <div className="w-full h-[616px] lg:h-[240px] flex flex-col gap-[48px] lg:gap-0 lg:flex-row">
          <div className="w-full lg:w-1/2 h-auto lg:h-full">
            <img
              className="w-[125.81px] h-[56px] lg:w-[179.73px] lg:h-[80px]"
              src={mavlonLogo}
              alt="mavlon-logo"
            />
          </div>
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-wrap lg:gap-[32px] footer-nav">
            <ul className="w-1/2 lg:flex-1">
              <li>Nav</li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link to={"/programs"}>Packages</Link>
              </li>
              <li>
                <Link>Booking</Link>
              </li>
              <li>
                <Link to={"/contact-page"}>Contact Us</Link>
              </li>
            </ul>
            <ul className="w-1/2 lg:flex-1">
              <li>Educational</li>
              <li>
                <Link>Study Abroad</Link>
              </li>
              <li>
                <Link>Canada Post Graduate</Link>
              </li>
              <li>
                <Link>Advance Diploma</Link>
              </li>
              <li>
                <Link>MBA Program</Link>
              </li>
              <li>
                <Link>USA Summer</Link>
              </li>
              <li>
                <Link>Graduate Studies</Link>
              </li>
            </ul>
            <ul className="w-1/2 lg:flex-1">
              <li>Trips</li>
              <li>
                <Link>World Cup Deal</Link>
              </li>
              <li>
                <Link>London Packages</Link>
              </li>
              <li>
                <Link>Europe Packages</Link>
              </li>
              <li>
                <Link>USA Packages</Link>
              </li>
              <li>
                <Link>Nairobi Packages</Link>
              </li>
              <li>
                <Link>Kigali Packages</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[48px] lg:mt-[64px] border-t-2 border-borderColor w-full h-[172px] lg:h-[90px] flex flex-col lg:flex-row justify-between lg:items-end">
          <span className="mt-[32px] lg:mt-0">
            <h5 className="font-semibold lg:font-bold text-darkgreen text-lg lg:text-2xl">
              Move faster with Mavlon Consults
            </h5>
            <p className="font-medium text-[#475467] text-lg lg:">
              Save countless hours of design and ship great looking designs
              faster.
            </p>
          </span>
          <p className="font-medium text-[#475467] text-lg lg:">
            © {currentYear} Mavlon Consults. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
