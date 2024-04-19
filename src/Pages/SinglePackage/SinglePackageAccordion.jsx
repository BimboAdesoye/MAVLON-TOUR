import { useState } from "react";
import accordionOpenImg from "../../assets/close-acc-image.svg";
import accordionClosedImg from "../../assets/open-acc-image.svg";
import packagesData from "../../data.json";

const SinglePackageAccordion = ({ id, content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const data = packagesData[0].details["Package Content"];

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
          Package Content
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
        className={`w-full grid overflow-hidden transition-all h-auto duration-300 ease-in-out bg-white px-[20px] lg:px-[40px]  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="text-black font-semibold text-lg lg:text-1xl leading-[21.6px] lg:leading-[22.66px] overflow-hidden pb-[40px]">
          <p className="text-ash font-semibold text-lg lg:text-1xl pt-[26.5px] pb-[11.5px] border-b-2 border-borderColor">
            This package includes:
          </p>
          <div className="h-auto lg:h-[272px] flex flex-col flex-wrap">
            <span
              className="flex gap-[12px] py-[19px] lg:py-[32px] lg:pt-[15px] lg:pb-[23px] w-full lg:w-1/2 h-auto border-b-2 border-borderColor"
            >
              <div className="bg-darkgreen font-bold text-sm w-[24px] h-[24px] py-[3px] px-[2px] flex items-center justify-center rounded-full  leading-[18.9px] text-white">
                {id}
              </div>
              <p>{content}</p>
            </span>
            {/* {data.map((datum) => {
              const { id, content } = datum;
              return (
                <span
                  key={id}
                  className="flex gap-[12px] py-[19px] lg:py-[32px] lg:pt-[15px] lg:pb-[23px] w-full lg:w-1/2 h-auto border-b-2 border-borderColor"
                >
                  <div className="bg-darkgreen font-bold text-sm w-[24px] h-[24px] py-[3px] px-[2px] flex items-center justify-center rounded-full  leading-[18.9px] text-white">
                    {id}
                  </div>
                  <p>{content}</p>
                </span>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePackageAccordion;
