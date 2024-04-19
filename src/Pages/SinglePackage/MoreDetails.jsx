import SinglePackageAccordion from "./SinglePackageAccordion";
import packagesData from "../../data.json";

const MoreDetails = () => {
  //   const data = packagesData[0].details["Package Content"];
  let details;

  packagesData.map((packageData) => {
    details = packageData.details;
  });

  let id;
  let content;

  const programs = details["Available programs"];
  programs.map((program) => {
    id = program.id;
    content = program.content;
  });

  return (
    <section className="bg-darkgreen w-full h-auto pt-[74px] lg:pt-[80px] pb-[50px] lg:pb-[100px]">
      <div className="text-left lg:text-center w-full lg:max-w-[700px] mx-auto container">
        <h6 className="text-base lg:text-xl font-bold leading-[18.54px] lg:leading-[20.6px] text-white">
          MORE DETAILS
        </h6>
        <h2 className="font-semibold text-4xl lg:text-5.5xl leading-[30.24px] lg:leading-[40.32px] text-white mt-[16px] lg:mt-[4px]">
          Read all you need to know
          <span className="text-mediumgreen ml-2">before you make a call</span>
        </h2>
      </div>
      <div className="container w-full mt-[40px] lg:mt-[64px] text-white flex flex-col gap-[8px]">
        <SinglePackageAccordion id={id} content={content} />
        <SinglePackageAccordion />
        <SinglePackageAccordion />
        <SinglePackageAccordion />
        <SinglePackageAccordion />
      </div>
    </section>
  );
};

export default MoreDetails;
