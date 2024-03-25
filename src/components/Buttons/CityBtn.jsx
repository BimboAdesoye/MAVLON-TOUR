import viewMoreArrow from "../../assets/view-more-arrow.svg";

const CityBtn = ({ text }) => {
  return (
    <button className=" w-[136px] md:w-[208px] lg:w-[253px] h-[48px] md:h-[72px] lg:h-[72px] flex justify-between items-center text-[16px] md:text-[20px] lg:text-[24px] rounded-tr-[16px] lg:rounded-tr-[32px] text-white font-medium mt-11 ml-7 bg-btnColor lg:bg-btnColor2 px-[16px] lg:px-[32px]">
      <p>{text}</p>
      <img
        className="view-more-btn-img w-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] h-[20px] lg:h-[28px] "
        src={viewMoreArrow}
        alt=""
      />
    </button>
  );
};

export default CityBtn;
