const Milestones = () => {
  return (
    <section className="h-[408px] lg:h-[215px] w-full flex flex-col lg:flex-row ">
      <div className="h-full flex flex-1 text-center lg:text-left items-center container">
        <div className="max-w-[150px] mx-auto lg:mx-0">
          <h2 className="text-5xl md:text-5.5xl lg:text-6xl text-darkgreen font-semibold">
            5000+
          </h2>
          <p className="text-lg md:text-xl lg:text-1xl text-darkgreen font-medium">
            Trips processed & Completed
          </p>
        </div>
      </div>
      <div className="h-full flex flex-1 bg-mediumgreen w-full lg:pl-[60px] mx-auto text-center lg:text-left items-center">
        <div className="max-w-[180px] mx-auto lg:mx-0">
          <h2 className="text-5xl md:text-5.5xl lg:text-6xl text-darkgreen font-semibold">
            1000+
          </h2>
          <p className="text-lg md:text-xl lg:text-1xl text-darkgreen font-medium">
            Students{"'"} admissions facilitated
          </p>
        </div>
      </div>
      <div className="h-full flex flex-1 lg:pl-[60px] text-center lg:text-left items-center container">
        <div className="max-w-[200px] mx-auto lg:mx-0">
          <h2 className="text-5xl md:text-5.5xl lg:text-6xl text-darkgreen font-semibold">
            10+
          </h2>
          <p className="text-lg md:text-xl lg:text-1xl text-darkgreen font-medium">
            Years of experience as a Travelling agency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
