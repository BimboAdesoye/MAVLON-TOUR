// import heroBg from "../../assets/hero-bg.svg";
// import union1 from "../../assets/Union1.svg";
// import union2 from "../../assets/Union.svg";

const Hero = () => {
  return (
    <main className="hero-section">
      <section className="h-auto lg:h-[542px] text-center pt-[52px] md:pt-[69px] pb-[40px] lg:pb-0 relative container ">
        <header className="max-w-[804px] mx-auto flex flex-col gap-[41px]">
          <div className="mx-0 lg:mx-[19.5px]">
            <h1 className="text-5xl lg:text-6xl text-darkgreen font-semibold leading-[35.28px] md:leading-[53.76px]">
              Overseas trips & educational programs made easy
            </h1>
            <p className="text-lg lg:text-1xl font-medium text-ash mt-[20px] max-w-[432px] mx-auto">
              We guarantee the best packages for trips abroad and academic
              programs.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[15px] justify-center">
            <button className="bg-white text-darkgreen rounded-[50px] lg:rounded-[49px] px-[10px] py-[20px] w-full mx-auto h-[56px] lg:h-[58px] flex items-center justify-center font-semibold border-2 border-darkgreen m-0">
              Book Now
            </button>
            <button className="bg-darkgreen text-white rounded-[50px] lg:rounded-[49px] px-[10px] py-[20px] w-full mx-auto h-[56px] lg:h-[58px] flex items-center justify-center font-semibold">
              Get Started
            </button>
          </div>
        </header>
        {/* <img className="union-1" src={union1} alt="" />
        <img className="union-2" src={union2} alt="" /> */}
      </section>
    </main>
  );
};

export default Hero;
