import arrow from "../../assets/guidance_up-arrow.png";
import { Link } from "react-router-dom";

const PackageCard = ({ id, image, tag, title, subject, options }) => {
  return (
    <Link
      onClick={() => console.log(id)}
      to={`/single-package/${id}`}
      key={id}
      className="bg-white pt-[8px] pb-[24px] px-[8px] rounded-[8px] w-full lg:w-[390px]"
    >
      <div className="h-[200px] rounded-[8px] relative">
        <img
          src={image}
          className="w-full h-full object-cover object-top rounded-[6px]"
          alt=""
        />
        <button className="absolute top-0 right-0 w-auto px-[10px] h-[36px] font-medium text-1xl leading-[20.46px] flex items-center justify-center bg-darkgreen rounded-bl-[12px] rounded-tr-[8px] text-white">
          {tag}
        </button>
      </div>
      <div className="pt-[12px]">
        <h2 className="font-bold text-3.5xl leading-[29.76px] text-darkgreen">
          {title}
        </h2>
        <p className="mt-[8px] text-ash text-1xl leading-[22px] font-medium">
          {subject}
        </p>
        <span className="mt-[12px] flex justify-between items-center w-full">
          <p className="font-normal text-1xl leading-[19px] text-ash">
            <span className="text-darkgreen mr-1 font-bold">{options}</span>
            available
          </p>
          <img src={arrow} alt="arrow" />
        </span>
      </div>
    </Link>
  );
};

export default PackageCard;
