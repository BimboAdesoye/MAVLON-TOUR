import Accordion from "../../components/Accordion";
// import { useEffect } from "react";

const FrequentlyAskedQuestions = () => {
  
  // useEffect(() => {
  //   // Store the current scroll position in localStorage
  //   const handleScroll = () => {
  //     localStorage.setItem("scrollPosition", window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     // Remove the stored scroll position when the component unmounts
  //     window.removeEventListener("scroll", handleScroll);
  //     localStorage.removeItem("scrollPosition");
  //   };
  // }, []);

  // useEffect(() => {
  //   // Scroll to the stored position when the component re-renders
  //   const storedScrollPosition = localStorage.getItem("scrollPosition");
  //   if (storedScrollPosition) {
  //     window.scrollTo(0, parseInt(storedScrollPosition));
  //   }
  // }, []);

  return (
    <div className="bg-white w-full">
      <div className="container w-full pt-[44px] lg:pt-[65px] pb-[77px] lg:pb-[131px] flex flex-col justify-center items-center h-auto">
        <header className="text-center">
          <h6 className="font-bold text-grey text-lg lg:text-xl">FAQs</h6>
          <p className="font-semibold text-darkgreen text-3.5xl lg:text-5.5xl leading-[26.88px] lg:leading-[40.32px]">
            All you need to know
          </p>
        </header>
        <main className="lg:min-w-[800px] lg:max-w-[800px] mt-[37px] border-2 border-borderColor rounded-[100px] flex overflow-hidden p-[4px]">
          <button className="flex-1 py-[10px] px-[20px] font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[56px] bg-darkgreen rounded-[100px] text-white">
            General
          </button>
          <button className="flex-1 py-[10px] px-[20px] text-grey font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[56px] border-r-2 border-borderColor">
            Education Program
          </button>
          <button className="flex-1 py-[10px] px-[20px] text-grey font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[56px] border-r-2 border-borderColor">
            Leisure
          </button>
          <button className="flex-1 py-[10px] px-[20px] text-grey font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[56px]">
            Trips
          </button>
        </main>
        <div className="mt-[50px] flex flex-col gap-[12px]">
          <Accordion
            question="What destinations do you offer in your London Packages?"
            answer="Our London Packages encompass a comprehensive exploration of iconic landmarks such as the Tower of London, Buckingham Palace, the British Museum, and more. Additionally, our itineraries often include day trips to nearby attractions like Stonehenge or Windsor Castle."
            number="01"
            open="open"
          />
          <Accordion
            question="Can I customize my Europe Package according to my preferences?"
            answer="Our London Packages encompass a comprehensive exploration of iconic landmarks such as the Tower of London, Buckingham Palace, the British Museum, and more. Additionally, our itineraries often include day trips to nearby attractions like Stonehenge or Windsor Castle."
            number="02"
          />
          <Accordion
            question="Tell me more about the Canada Packages you provide."
            answer="Our London Packages encompass a comprehensive exploration of iconic landmarks such as the Tower of London, Buckingham Palace, the British Museum, and more. Additionally, our itineraries often include day trips to nearby attractions like Stonehenge or Windsor Castle."
            number="03"
          />
          <Accordion
            question="What makes your Israel Pilgrimage unique?"
            answer="Our London Packages encompass a comprehensive exploration of iconic landmarks such as the Tower of London, Buckingham Palace, the British Museum, and more. Additionally, our itineraries often include day trips to nearby attractions like Stonehenge or Windsor Castle."
            number="04"
          />
          <Accordion
            question="Do you offer specialized USA Packages for different regions?"
            answer="Our London Packages encompass a comprehensive exploration of iconic landmarks such as the Tower of London, Buckingham Palace, the British Museum, and more. Additionally, our itineraries often include day trips to nearby attractions like Stonehenge or Windsor Castle."
            number="05"
          />
          <Accordion
            question="What attractions are included in your South Africa Packages?"
            answer="Our London Packages encompass a comprehensive exploration of iconic landmarks such as the Tower of London, Buckingham Palace, the British Museum, and more. Additionally, our itineraries often include day trips to nearby attractions like Stonehenge or Windsor Castle."
            number="06"
          />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
