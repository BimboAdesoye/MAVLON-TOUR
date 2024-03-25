import viewMoreArrow from "../../assets/view-more-arrow.svg";

const ViewMoreBtn = ({ text }) => {
  return (
    <button className="view-more-btn w-[136px] md:w-[208px] lg:w-[208px] h-[48px] md:h-[72px] lg:h-[72px] flex justify-between items-center text-[16px] md:text-[20px] lg:text-[24px] rounded-2xl md:rounded-[32px] lg:rounded-[32px] text-white font-medium">
      <p>{text}</p>
      <img
        className="view-more-btn-img w-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] h-[20px] lg:h-[28px] "
        src={viewMoreArrow}
        alt=""
      />
    </button>
  );
};

export default ViewMoreBtn;
