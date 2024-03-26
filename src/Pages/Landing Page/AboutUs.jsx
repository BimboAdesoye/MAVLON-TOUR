import aboutUsImg from "../../assets/about-us-image.svg";

const AboutUs = () => {
  return (
    <section className="bg-darkgreen">
      <div className="flex flex-col lg:flex-row min-h-[815px] lg:min-h-[650px]">
        <div className="container mt-[74px] lg:mt-[94px] w-full h-[407.5px] lg:h-full lg:w-1/2">
          <h6 className="text-lg lg:text-xl font-bold text-white lg:text-whiteAccent mb-[16px] lg:[mb-0]">
            ABOUT MAVLON
          </h6>
          <h2 className="text-3.5xl lg:text-5.5xl text-lightgreen font-medium lg:max-w-[518px] leading-[31.68px] lg:leading-[47.52px]">
            At Mavlon Consults, our ultimate goal is to provide unlimited
            support to all our customers and get them safely to their
            destinations.
          </h2>
        </div>
        <div className="w-full lg:w-1/2 h-[407.5px] lg:h-full">
          <img className="w-full h-full object-cover" src={aboutUsImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
