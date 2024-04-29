const GetStartedBtn = ({ text }) => {
  return (
    <button className="linear-gradient-bg text-white rounded-full font-semibold text-lg w-auto lg:h-[58px] py-[10px] px-[20px] flex justify-center items-center">
      <p className="text-center">{text}</p>
    </button>
  );
};

export default GetStartedBtn;
