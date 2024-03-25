const Milestones = () => {
  return (
    <section className=" h-[408px] lg:h-[215px] w-full flex flex-col lg:flex-row mb-8">
      <div className="h-full flex flex-1 lg:pl-[60px] text-center lg:text-left items-center">
        <div className="max-w-[150px] mx-auto lg:mx-0">
          <h1 className="text-5xl lg:text-6xl text-darkgreen font-semibold">
            200+
          </h1>
          <p className="text-lg lg:text-1xl text-darkgreen font-medium">
            Trips processed & Completed
          </p>
        </div>
      </div>
      <div className="h-full flex flex-1 bg-mediumgreen w-full lg:pl-[60px] mx-auto text-center lg:text-left items-center">
        <div className="max-w-[180px] mx-auto lg:mx-0">
          <h1 className="text-5xl lg:text-6xl text-darkgreen font-semibold">
            1000+
          </h1>
          <p className="text-lg lg:text-1xl text-darkgreen font-medium">
            Students{"'"} admissions facilitated
          </p>
        </div>
      </div>
      <div className="h-full flex flex-1 lg:pl-[60px] text-center lg:text-left items-center">
        <div className="max-w-[200px] mx-auto lg:mx-0">
          <h1 className="text-5xl lg:text-6xl text-darkgreen font-semibold">
            10+
          </h1>
          <p className="text-lg lg:text-1xl text-darkgreen font-medium">
            Years of experience as a Travelling agency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
