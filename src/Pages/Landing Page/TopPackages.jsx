import CityBtn from "../../components/Buttons/CityBtn";
import viewMoreArrow from "../../assets/view-more-arrow.svg";
// import arrow from "../../assets/top-packages-arrow.svg";

const TopPackages = () => {
  return (
    <section className="bg-darkgreen w-full h-auto pt-[74px] lg:pt-[63px] pb-[189.74px] lg:pb-0">
          {/* <img src={arrow} alt="" /> */}
      <div className="container flex flex-col lg:flex-row gap-[54px] lg:gap-[122px]">
        <div className="lg:mt-[63px]">
          <h4 className="text-white lg:text-whiteAccent font-bold text-lg lg:text-2xl">
            TOP PACKAGES
          </h4>
          <p className="text-white lg:w-[399px] text-3.5xl lg:text-5.5xl font-semibold leading-[26.88px] lg:leading-[40.32px] mt-[24px]">
            Select from <span className="text-mediumgreen"> top package </span>
            collection to guarantee the best travelling experience.
          </p>
        </div>
        <div className="top-packages w-full h-auto">
          <div className="h-[140px] lg:h-[264.33px] w-full rounded-[16.34px] top-package-1 flex flex-col border-2 lg:border-4 border-borderColor2 overflow-hidden">
            <span className="mt-auto w-[40%] lg:w-[215px] bg-btnColor2 backdrop-filter backdrop-blur-md rounded-tr-3xl">
              <CityBtn text={"Canada"} />
            </span>
          </div>
          <div className="h-[140px] lg:h-[264.33px] w-full rounded-[16.34px] top-package-2 flex flex-col border-2 lg:border-4 border-borderColor2 overflow-hidden">
            <span className="mt-auto w-[70%] lg:w-[215px] bg-btnColor2 backdrop-filter backdrop-blur-md rounded-tr-3xl">
              <CityBtn text={"London"} />
            </span>
          </div>
          <div className="h-[140px] lg:h-[264.33px] w-full rounded-[16.34px] top-package-3 flex flex-col border-2 lg:border-4 border-borderColor2 overflow-hidden">
            <span className="mt-auto w-[70%] lg:w-[215px] bg-btnColor2 backdrop-filter backdrop-blur-md rounded-tr-3xl">
              <CityBtn text={"Israel"} />
            </span>
          </div>
          <div className="h-[140px] lg:h-[150.33px] w-full rounded-[16.34px] lg:rounded-br-none lg:rounded-bl-none top-package-4 flex flex-col border-2 lg:border-4  border-borderColor2 lg:border-b-0 justify-center items-center">
            <button className="backdrop-filter backdrop-blur-md w-[136px] lg:w-[253px] h-[48px] lg:h-[72px] flex justify-between items-center text-white font-medium px-[16px] lg:px-[32px] md:text-[20px] lg:text-[24px] text-[16px] rounded-[32px] bg-black bg-opacity-25">
              View More
              <img
                className="view-more-btn-img w-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] h-[20px] lg:h-[28px]"
                src={viewMoreArrow}
                alt=""
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPackages;
