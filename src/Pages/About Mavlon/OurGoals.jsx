import image1 from "../../assets/about-us-img-1.svg";
import image2 from "../../assets/about-us-img-2.svg";

const OurGoals = () => {
  return (
    <div className="mt-[52px] lg:[71px]">
      <div className="container">
        <h5 className="text-grey font-bold text-xl leading-[20.6px] hidden lg:block mb-[8px]">
          ABOUT US
        </h5>
        <div className="flex flex-col lg:flex-row">
          <p className="font-semibold text-darkgreen text-4xl lg:text-6xl text-center lg:text-left leading-[30.24px] lg:leading-[57.6px] w-full lg:w-[700px]">
            Our goal is to become the best at bringing your travelling ambitions
            to life.
          </p>
          <p className="font-medium text-ash text-lg lg:text-1xl text-center lg:mt-auto lg:text-left leading-[18.54px] lg:leading-[22px] w-full lg:max-w-[389px] mt-[20px]">
            With over 12 years of experience, we have built a robust network and
            reputation that allows us to provide exceptional and excellent
            service to multiple clients.
          </p>
        </div>
        <div className="mt-[32px] lg:mt-[43px] mb-[19px] lg:mb-0 flex flex-col lg:flex-row gap-[16px] lg:gap-[24px]">
          <span className="rounded-[9.55px] lg:rounded-[16px] overflow-hidden lg:rounded-br-none lg:rounded-bl-none">
            <img className="w-full h-full object-cover" src={image1} alt="" />
          </span>
          <span className="rounded-[9.55px] lg:rounded-[16px] overflow-hidden lg:rounded-br-none lg:rounded-bl-none">
            <img className="w-full h-full object-cover" src={image2} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
