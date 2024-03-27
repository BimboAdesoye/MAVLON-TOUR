import { useState, useEffect } from "react";
import accordionOpenImg from "../assets/accordion-open-icon.svg";
import accordionClosedImg from "../assets/accordion-closed-icon.svg";

const Accordion = ({ question, answer, number, open }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  useEffect(() => {
    if (open) {
      setAccordionOpen(true);
    }
  }, [open]);

  return (
    <div className="lg:min-w-[800px] lg:max-w-[800px] border-b-2 border-borderColor lg:border-b-0">
      <div className="flex gap-[40px] justify-between">
        <p className="hidden lg:block font-bold text-darkgreen text-2xl">
          {number}
        </p>
        <button onClick={handleAccordion} className="w-full text-left">
          <p
            className={`font-bold text-xl lg:text-2xl lg:leading-[24.72px] leading-[20.6px] ${
              accordionOpen ? "text-darkgreen" : "text-[#757575]"
            }`}
          >
            {question}
          </p>
        </button>
        <button onClick={handleAccordion}>
          {accordionOpen ? (
            <img src={accordionOpenImg} alt="accordion-open-icon" />
          ) : (
            <img src={accordionClosedImg} alt="accordion-closed-icon" />
          )}
        </button>
      </div>
      <div
        className={`w-full mt-[22px] lg:mt-[13px] lg:mr-[8px] lg:ml-[11px] lg:px-[51px] pt-[13px] pb-[28px] lg:border-l-2 border-borderColor h-auto grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="text-black font-medium text-lg lg:text-1xl leading-[21.6px] lg:leading-[22.66px] overflow-hidden ">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
