import Footer from "../../components/Footer";
import packagesData from "../../data.json";
import PackageCard from "./PackageCard";

const Packages = () => {
  return (
    <section className="w-full h-auto pt-[21px] lg:pt-[43px]">
      <div className="bg-[#F2F2F2] pb-[59px] lg:pb-[60px]">
        <div className="container w-full">
          <header className="flex items-center gap-[14px] lg:gap-[16px]">
            <h2 className="font-semibold text-3.5xl lg:text-5.5xl text-darkgreen">
              All Packages
            </h2>
            <button className="rounded-[615.38px] bg-darkgreen text-white h-[28px] w-[41px] font-bold text-base">
              {packagesData.length}
            </button>
          </header>
          <div className="pt-[18px] packages w-full ">
            <PackageCard />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Packages;
