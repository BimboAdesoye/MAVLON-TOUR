import SinglePackageAccordion from "./SinglePackageAccordion";
import packagesData from "../../data.json";
import { useParams } from "react-router-dom";

const MoreDetails = ({ scrollRef }) => {
  const { id } = useParams();

  function findProductById(id) {
    const numericId = parseInt(id);
    const singlePackage = packagesData.find(
      (packageData) => packageData.id === numericId
    );
    return singlePackage;
  }

  const product = findProductById(id);

  const details2 = product.details;

  const subheading = product.subheading;

  return (
    <section
      ref={scrollRef}
      className="bg-darkgreen w-full h-auto pt-[74px] lg:pt-[80px] pb-[50px] lg:pb-[100px] more-details"
    >
      <div className="text-left lg:text-center w-full lg:max-w-[700px] mx-auto container">
        <h6 className="text-base lg:text-xl font-bold leading-[18.54px] lg:leading-[20.6px] text-white">
          MORE DETAILS
        </h6>
        <h2 className="font-semibold text-4xl lg:text-5.5xl leading-[30.24px] lg:leading-[40.32px] text-white mt-[16px] lg:mt-[4px]">
          Read all you need to know
          <span className="text-mediumgreen ml-2">before you make a call</span>
        </h2>
      </div>
      <div className="container w-full mt-[40px] lg:mt-[64px] text-white flex flex-col gap-[4px]">
        {Object.entries(details2).map(([key, value]) => {
          // console.log(value)
          return (
            <SinglePackageAccordion
              key={key}
              title={key}
              content={value}
              subheading={subheading}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MoreDetails;
