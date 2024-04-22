import Footer from "../../components/Footer";
import packagesData from "../../data.json";
import PackageCard from "./PackageCard";
import { useState } from "react";

const Packages = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const filterItemsByTag = (tag) => {
    setSelectedTag(tag);
  };

  const filteredItems = selectedTag
    ? packagesData.filter((packageData) => packageData.tag === selectedTag)
    : packagesData;

  return (
    <section className="w-full h-auto pt-[21px] lg:pt-[43px] bg-[#F2F2F2]">
      <div className=" pb-[59px] lg:pb-[60px]">
        <div className="container w-full">
          <span className="flex flex-col-reverse lg:flex-row lg:justify-between justify-end gap-[20px] lg:gap-0 lg:items-center items-start  mb-[10px]">
            <header className="flex items-center justify-normal gap-[14px] lg:gap-[16px]">
              <h2 className="font-semibold text-3.5xl lg:text-5.5xl text-darkgreen leading-[26.88px] lg:leading-[40.32px]">
                All Packages
              </h2>
              <button className="rounded-[615.38px] bg-darkgreen text-white h-[28px] w-[41px] font-bold text-base mt-auto">
                {packagesData.length}
              </button>
            </header>
            <div className=" rounded-[1000px] flex overflow-hidden p-[4px] bg-white">
              <button
                onClick={() => filterItemsByTag(null)}
                className="flex-1 w-[74px] lg:w-[120px] py-[10px] px-[20px] font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[52px] bg-darkgreen rounded-[1000px] text-mediumgreen "
              >
                All
              </button>
              <button
                onClick={() => filterItemsByTag("Academic")}
                className="flex-1 w-[74px] lg:w-[120px] py-[10px] px-[20px] text-darkgreen font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[52px]"
              >
                Educational
              </button>
              <button
                onClick={() => filterItemsByTag("Trip")}
                className="flex-1 w-[74px] lg:w-[120px] py-[10px] px-[20px] text-darkgreen font-semibold text-sm lg:text-lg leading-[16.8px] lg:leading-[21.6px] h-[46px] lg:h-[52px]"
              >
                Trips
              </button>
            </div>
          </span>
          <div className="pt-[18px] packages w-full">
            <div className="flex flex-wrap gap-[24px]">
              {filteredItems.map((item) => {
                const { id, image, tag, title, subject, options } = item;
                return (
                  <PackageCard
                    key={id}
                    id={id}
                    image={image}
                    tag={tag}
                    title={title}
                    subject={subject}
                    options={options}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Packages;
