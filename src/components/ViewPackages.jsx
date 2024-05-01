import bgBubbles from "../assets/bg-bubbles.svg";
import GetStartedBtn from "./Buttons/GetStartedBtn";
import { Link } from "react-router-dom";

const ViewPackages = () => {
  return (
    <Link
      to={"/programs"}
      className="h-auto w-full flex flex-col items-center pt-[109px] pb-[60px] lg:py-[60.5px] md:py-[60.5px] gap-[24px] relative"
    >
      <h3 className="text-darkgreen max-w-[589px] text-3.5xl md:text-4xl lg:text-5.5xl font-semibold leading-[26.88px] lg:leading-[40.32px] mx-auto text-center z-1">
        Ready to engage with our packages & trips?
      </h3>
      <p className="font-medium text-ash text-base md:text-xl lg:text-1xl max-w-[326px] md:max-w-[400px] lg:min-w-[100%] mx-auto text-center">
        Browse through our catalogue to see amazing trips and educational
        packages.
      </p>
      <GetStartedBtn text={"View All Packages"} />
      <img
        className="absolute top-[-65px] left-[-140px] lg:left-[-10px] md:left-[-200px] lg:bottom-0 md:bottom-0 md:top-[10px] lg:top-0 h-full z-[-1] rotate-[23.37deg] lg:rotate-0"
        src={bgBubbles}
        alt=""
      />
    </Link>
  );
};

export default ViewPackages;
