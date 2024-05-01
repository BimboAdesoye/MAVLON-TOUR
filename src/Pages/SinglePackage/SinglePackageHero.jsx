import packagesData from "../../data.json";
import { useParams } from "react-router-dom";
import arrow from "../../assets/guide-back-arrow.svg";
import { Link } from "react-router-dom";

const SinglePackageHero = ({ scrollToComponent }) => {
  const { id } = useParams();

  function findProductById(id) {
    const numericId = parseInt(id);
    const singlePackage = packagesData.filter(
      (packageData) => packageData.id === numericId
    );
    return singlePackage;
  }

  const product = findProductById(id);
  const productDetails = product[0];

  return (
    <section className="lg:flex flex-row-reverse w-full h-auto pb-[37px] lg:pb-0">
      <div className="h-[260px] lg:h-[670px] lg:w-[836px] w-full">
        <img
          className="w-full h-full object-cover object-top"
          src={productDetails.image}
          alt=""
        />
      </div>
      <div className="container h-full text-white w-full lg:w-1/2">
        <span className="mt-[13px] lg:mt-[10px] flex items-center gap-[8px]">
          <img src={arrow} alt="" />
          <p className="text-darkgreen font-semibold text-lg lg:text-1xl leading-[24.3px] lg:leading-[29.7px]">
            Back
          </p>
        </span>
        <h1 className="text-darkgreen font-semibold text-4xl lg:text-6xl leading-[30.24px] lg:leading-[57.6px] lg:max-w-[350px] mt-[14.8px]">
          {productDetails.title}
        </h1>
        <p className="mt-[16px] lg:[24px] font-medium text-ash lg:text-darkgreen text-lg lg:text-1xl max-w-[251px] lg:max-w-[327px] leading-[18.54px] lg:leading-[26.4px]">
          {productDetails.subject}
        </p>
        <div className="mt-[31px] lg:mt-[24px] font-medium">
          <span className="h-[64px] w-full lg:max-w-[389px] py-[9px] flex justify-between items-center border-b-2 border-borderColor">
            <p className="text-ash text-lg lg:text-1xl leading-[24.3px] lg:leading-[29.7px]">
              Number of Programs
            </p>
            <button className="font-semibold text-darkgreen text-lg lg:text-1xl px-[5px] lg:px-[8px] h-[36px] bg-[#E5FFEC] rounded-[12px] flex items-center justify-center">
              4 programs available
            </button>
          </span>
          <span className="h-[64px] w-full lg:max-w-[389px] py-[9px] flex justify-between items-center border-b-2 border-borderColor">
            <p className="text-ash text-lg lg:text-1xl leading-[24.3px] lg:leading-[29.7px]">
              Program Type
            </p>
            <button className="font-semibold text-darkgreen text-lg lg:text-1xl px-[5px] lg:px-[8px] h-[36px] bg-[#E5FFEC] rounded-[12px] flex items-center justify-center">
              {productDetails.tag}
            </button>
          </span>
        </div>
        <div className="flex gap-[8px] w-full lg:max-w-[310px] mt-[77px] lg:mt-[90px]">
          <button
            onClick={scrollToComponent}
            className="text-base lg:text-lg px-[32px] flex-1  py-[10px] rounded-[50px] text-darkgreen border-2 font-semibold border-darkgreen"
          >
            More Details
          </button>
          <button className="text-base lg:text-lg flex-1 px-[32px] py-[10px] rounded-[50px] text-white font-semibold linear-gradient-bg">
            <Link to={"/contact-page"}>Book Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SinglePackageHero;
