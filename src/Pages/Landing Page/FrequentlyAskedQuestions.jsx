import Accordion from "../../components/Accordion";
import accordionData from "../../question.json";
import { useState } from "react";

const FrequentlyAskedQuestions = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const filterItemsByTag = (tag) => {
    setSelectedTag(tag);
  };

  const filteredItems = selectedTag
    ? accordionData.filter((data) => data.tag === selectedTag)
    : accordionData;

  return (
    <div className="bg-white w-full">
      <div className="container w-full pt-[44px] lg:pt-[65px] pb-[77px] lg:pb-[131px] flex flex-col justify-center items-center h-auto">
        <header className="text-center">
          <h4 className="font-bold text-grey text-lg lg:text-xl">FAQs</h4>
          <p className="font-semibold text-darkgreen text-3.5xl lg:text-5.5xl leading-[26.88px] lg:leading-[40.32px]">
            All you need to know
          </p>
        </header>
        <main className="lg:min-w-[800px] lg:max-w-[800px] mt-[37px] border-2 border-borderColor rounded-[100px] flex overflow-hidden p-[4px]">
          <button
            onClick={() => filterItemsByTag(null)}
            className={`flex-1 py-[10px] px-[20px] font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[56px]  ${
              selectedTag === null
                ? "linear-gradient-bg rounded-[100px] text-white"
                : "bg-white text-grey"
            }`}
          >
            General
          </button>
          <button
            onClick={() => filterItemsByTag("educational")}
            className={`flex-1 py-[10px] px-[20px] font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[56px] border-r-2 border-borderColor ${
              selectedTag === "educational"
                ? "linear-gradient-bg text-white rounded-[100px]"
                : "bg-white text-grey"
            }`}
          >
            Education Program
          </button>
          <button
            onClick={() => filterItemsByTag("leisure")}
            className={`flex-1 py-[10px] px-[20px] text-grey font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[56px] border-r-2 border-borderColor  ${
              selectedTag === "leisure"
                ? "linear-gradient-bg text-white rounded-[100px]"
                : "bg-white text-grey"
            }`}
          >
            Leisure Trips
          </button>
          <button
            onClick={() => filterItemsByTag("booking")}
            className={`flex-1 py-[10px] px-[20px] text-grey font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[56px]  ${
              selectedTag === "booking"
                ? "linear-gradient-bg text-white rounded-[100px]"
                : "bg-white text-grey"
            }`}
          >
            Booking
          </button>
        </main>
        <div className="mt-[50px] flex flex-col gap-[12px]">
          {filteredItems.map((data) => {
            const { id, question, answer } = data;
            const isOpen = id === "01";
            return (
              <Accordion
                key={id}
                question={question}
                answer={answer}
                number={id}
                open={isOpen}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
