import { useState } from "react";
import testimonials from "../testimonial.json";
import forwardArrow from "../assets/forward-arrow.svg";
import backwardArrow from "../assets/backward-arrow.svg";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const numberFormat = () => {
    if (testimonials[currentIndex].id <= "9") {
      return "0";
    } else {
      return "";
    }
  };

  return (
    <div className="w-full h-auto">
      <div className="bg-white pt-[44px] lg:[pt-72px] pb-[59px] lg:pb-[48px] w-full h-auto text-center">
        <h6 className="text-grey font-bold text-lg lg:text-xl">TESTIMONIALS</h6>
        <h3 className="text-darkgreen max-w-[589px] text-3.5xl lg:text-5.5xl font-semibold leading-[26.88px] lg:leading-[40.32px] mx-auto text-center">
          Hear from some of our satisfied customers
        </h3>
      </div>
      <div className="bg-darkgreen w-full h-auto py-11 text-white pt-[84px] lg:pt-[50px] pb-[69px] lg:pb-[72px]">
        <div className="container">
          <div className="w-full lg:max-w-[550px] mx-auto text-left lg:text-center flex gap-[35px] lg:gap-[14px] lg:flex-col">
            <p className="font-semibold text-xl lg:text-2xl leading-[18.6px] lg:leading-[22.32px] text-[#FFFFFF3D]">{`${numberFormat()}${
              testimonials[currentIndex].id
            }`}</p>
            <span>
              <p className="font-bold text-white text-xl lg:text-3.5xl leading-[20px] lg:leading-[32px] lg:ml-0 pb-[40px] lg:pb-0 border-b-[1px] border-[#FFFFFF1A] lg:border-0">
                {testimonials[currentIndex].statement}
              </p>
              <p className="font-bold text-mediumgreen text-xl lg:text-2xl leading-[20px] lg:leading-[24px] mt-[16px] lg:mt-[32px]">
                {testimonials[currentIndex].name}
              </p>
              <p>Canadian Undergraduate Studies</p>
            </span>
          </div>
          <span className="mt-[29px] lg:mt-[31px] w-full lg:max-w-[383px] mx-auto flex justify-between items-center">
            <button>
              <img onClick={prevSlide} src={backwardArrow} alt="" />
            </button>
            <span className="font-semibold text-xl lg:text-2xl leading-[18.6px] lg:leading-[22.32px] text-[#FFFFFF3D]">
              <span className="text-white">{`${numberFormat()}${
                testimonials[currentIndex].id
              }`}</span>
              /{testimonials.length}
            </span>
            <button>
              <img onClick={nextSlide} src={forwardArrow} alt="" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
