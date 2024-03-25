import submitBtn from "../../assets/submit-arrow.svg";

const SubmitBtn = () => {
  return (
    <button className="submit-btn flex justify-between items-center bg-white rounded-full font-extrabold text-base lg:text-lg w-[201px] lg:w-[155px] h-[50px] lg:h-[58px] pr-[16px] pl-[32px]">
      <p>Submit</p> <img src={submitBtn} alt="" />
    </button>
  );
};

export default SubmitBtn;
