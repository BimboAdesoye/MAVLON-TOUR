import { useState } from "react";
import accordionOpenImg from "../../assets/close-acc-image.svg";
import accordionClosedImg from "../../assets/open-acc-image.svg";
// import packagesData from "../../data.json";

const SinglePackageAccordion = ({ id, content, title }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  // const data = packagesData[0].details["Package Content"];

  return (
    <div className="">
      <div
        onClick={handleAccordion}
        className={`flex justify-between cursor-pointer w-full h-[70px] items-center px-[20px] lg:px-[40px] rounded-tr-[16.54px] rounded-tl-[16.54px] ${
          accordionOpen ? "bg-lightgreen" : "bg-[#335D51]"
        }`}
      >
        <p
          className={`text-xl lg:text-2xl leading-[23.8px] lg:leading-[28.56px] font-semibold ${
            accordionOpen ? "text-darkgreen" : "text-white"
          }`}
        >
          {title}
        </p>
        <button onClick={handleAccordion}>
          {accordionOpen ? (
            <img src={accordionOpenImg} alt="accordion-open-icon" />
          ) : (
            <img src={accordionClosedImg} alt="accordion-closed-icon" />
          )}
        </button>
      </div>
      <div
        className={`w-full lg:px-[38px] pt-[26px] pb-[40px] grid overflow-hidden transition-all h-auto duration-300 ease-in-out bg-white ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } ${accordionOpen ? "pt-[13px] pb-[28px]" : ""}`}
      >
        <div className="text-black bg-white font-medium text-lg lg:text-1xl leading-[21.6px] lg:leading-[22.66px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius
          qui, vitae error hic veritatis atque maxime saepe consequatur
          repellendus?
        </div>
      </div>
    </div>
  );
};

export default SinglePackageAccordion;
