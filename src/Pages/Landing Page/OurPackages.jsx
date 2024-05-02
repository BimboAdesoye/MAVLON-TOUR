import arrow from "../../assets/view-more-arrow.svg";
import { Link } from "react-router-dom";

const OurPackages = () => {
  return (
    <section className="container w-full h-auto text-center pb-[14px] lg:pb-0">
      <div className="pt-[44px] lg:[pt-72px] max-w-[589px] mx-auto">
        <h3 className="text-grey font-bold text-lg lg:text-xl">OUR PACKAGES</h3>
        <p className="text-darkgreen font-semibold text-3.5xl lg:text-5.5xl leading-[26.88px] lg:leading-[40.32px]">
          Gain access to the best opportunities in
        </p>
      </div>
      <div className="mt-[48px] flex flex-col lg:flex-row w-full gap-[14px] lg:[gap-14px]">
        <div className="h-[332px] lg:min-h-[571px] w-full lg:w-1/2 rounded-[24px] lg:rounded-br-none lg:rounded-bl-none package-bg-1 flex flex-col">
          <Link
            to={"/programs"}
            className="backdrop-filter backdrop-blur-md h-[150px] lg:h-[200px] mt-auto flex items-center justify-between relative px-[21px] lg:px-[32px] rounded-[24px] lg:rounded-[32px] lg:rounded-br-none lg:rounded-bl-none "
          >
            <span className="text-white lg:max-w-[383px] text-left">
              <h3 className="font-semibold text-2xl lg:text-4.5xl">
                Educational Packages
              </h3>
              <p className="font-medium text-lg lg:text-1xl leading-[18px] lg:leading-[22px]">
                Our London Packages encompass a comprehensive exploration of
                iconic landmarks such as.
              </p>
            </span>
            <img
              className="h-[32px] w-[32px] lg:h-[57px] lg:w-[57px] absolute top-3 right-3 lg:static"
              src={arrow}
              alt="arrow-icon"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="h-[332px] lg:min-h-[571px] w-full lg:w-1/2 rounded-[24px] lg:rounded-br-none lg:rounded-bl-none package-bg-2 flex flex-col">
          <Link
            to={"/programs"}
            className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-md h-[150px] lg:h-[200px] mt-auto flex items-center justify-between relative px-[21px] lg:px-[32px] rounded-[24px] lg:rounded-[32px] lg:rounded-br-none lg:rounded-bl-none"
          >
            <span className="text-white  text-left">
              <h3 className="font-semibold text-2xl lg:text-4.5xl md:leading-[37.2px]">
                Trips & Vacation Packages
              </h3>
              <p className="font-medium text-lg lg:max-w-[387px] lg:text-1xl leading-[18px] lg:leading-[22px] mt-2">
                Our London Packages encompass a comprehensive exploration of
                iconic landmarks such as.
              </p>
            </span>
            <img
              className="h-[32px] w-[32px] lg:h-[57px] lg:w-[57px] absolute top-3 right-3 lg:static"
              src={arrow}
              alt="arrow-icon"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPackages;
