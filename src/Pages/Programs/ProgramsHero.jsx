import programsImg from "../../assets/programs-img.jpg";

const ProgramsHero = () => {
  return (
    <section>
      <div className="w-full">
        <div className="bg-darkgreen">
          <div className="container text-center py-[54px] lg:py-[45px]">
            <h1 className="text-mediumgreen font-semibold text-5.5xl lg:text-6xl leading-[43.2px] lg:leading-[53.76px] w-full lg:max-w-[650px] mx-auto">
              Browse & Select an opportunity of your choice
            </h1>
          </div>
        </div>
        <div className="w-full h-[230px] lg:h-[297px]">
          <img
            className="h-full w-full object-cover object-center"
            src={programsImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
