import qualityIcon from "../../assets/quality-icon.svg";
import speedIcon from "../../assets/speed-icon.svg";
import securityIcon from "../../assets/security-icon.svg";

const OurValues = () => {
  return (
    <section className="w-full bg-darkgreen pt-[74px] lg:pt-[70px]">
      <div className="container pb-[51px] lg:pb-0">
        <h5 className="font-bold text-whiteAccent text-lg lg:text-2xl leading-[18.54px] lg:leading-[24.72px] mb-[16px] lg:mb-[24px]">
          WHO ARE WE
        </h5>
        <div className="w-full flex flex-col lg:flex-row gap-[32px]">
          <div className="flex flex-col gap-[32px] font-semibold text-white text-2xl leading-[24px] flex-1">
            <span>
              From Nigeria to the rest of the world, Mavlon Consult offers you
              exciting vacation packages to top destinations within and outside
              Africa for your Holidays, Honeymoon, Sightseeing trips and
              relaxation.
            </span>
            <span>
              Your experience of the wonders of the best beaches, Island
              Resorts,
            </span>
          </div>
          <div className="flex flex-col gap-[32px] font-semibold text-white text-2xl leading-[24px] flex-1">
            <span>
              Architectural Masterpieces, Art, Culture and Cuisine is just a
              click away at the most affordable rates!
            </span>
            <span>
              We have conferences and Training for corporate travelers that can
              enhance your professional experience and business network and wish
              to secure a Business Visa.
            </span>
          </div>
          <div className="flex flex-col gap-[32px] font-semibold text-white text-2xl leading-[24px] flex-1">
            <span>
              We also help you achieve your dream of relocation to Canada or
              United Kingdom through our study programs and Study permit
              processing assistance.
            </span>
            <span>
              All you have to do is select your destination, make your booking
              and off you go!, because we handle the rest.
            </span>
          </div>
        </div>
      </div>
      <div className="container custom-container mt-[58px] lg:mt-[72px]">
        <h4 className="font-semibold text-white text-5.5xl leading-[43.2px] text-center">
          Our Values
        </h4>
        <div className="flex flex-col lg:flex-row lg:rounded-tr-lg lg:rounded-tl-lg overflow-hidden mt-[56px] lg:[42px]">
          <div className="flex flex-col flex-1 gap-[22px] min-h-[136px] lg:h-[203px] items-center lg:items-start justify-center pl-0 lg:pl-[22px] bg-white">
            <span className="flex items-center gap-[16px]">
              <img
                className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
                src={qualityIcon}
                alt="icon"
              />
              <p className="text-darkgreen text-3xl lg:text-3.5xl font-semibold leading-[26.88px]">
                Quality
              </p>
            </span>
            <p className="lg:max-w-[284px] max-w-[300px] mx-auto lg:mx-0 text-center lg:text-left font-semibold text-ash text-xl lg:text-2xl leading-[18.54px] lg:leading-[24px]">
              Your experience of the wonders of the best beaches, Island
              Resorts,
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-[22px] min-h-[136px] lg:h-[203px] items-center lg:items-start justify-center pl-0 lg:pl-[22px] bg-mediumgreen">
            <span className="flex items-center gap-[16px]">
              <img
                className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
                src={speedIcon}
                alt="icon"
              />
              <p className="text-darkgreen text-3xl lg:text-3.5xl font-semibold leading-[26.88px]">
                Speed
              </p>
            </span>
            <p className="lg:max-w-[284px] max-w-[300px] mx-auto lg:mx-0 text-center lg:text-left font-semibold text-ash text-xl lg:text-2xl leading-[18.54px] lg:leading-[24px]">
              Your experience of the wonders of the best beaches, Island
              Resorts,
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-[22px] min-h-[136px] lg:h-[203px] items-center lg:items-start justify-center pl-0 lg:pl-[22px] bg-white">
            <span className="flex items-center gap-[16px]">
              <img
                className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
                src={securityIcon}
                alt="icon"
              />
              <p className="text-darkgreen text-3xl lg:text-3.5xl font-semibold leading-[26.88px]">
                Security
              </p>
            </span>
            <p className="lg:max-w-[284px] max-w-[300px] mx-auto lg:mx-0 text-center lg:text-left font-semibold text-ash text-xl lg:text-2xl leading-[18.54px] lg:leading-[24px]">
              Your experience of the wonders of the best beaches, Island
              Resorts,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
