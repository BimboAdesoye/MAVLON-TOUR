import notebookIcon from "../../assets/solar_notebook-bold.svg";
import calendarIcon from "../../assets/solar_calendar-date-bold.svg";
import mapIcon from "../../assets/solar_map-bold.svg";
// import heroBg from "../../assets/hero-bg.svg";
// import union1 from "../../assets/Union1.svg";
// import union2 from "../../assets/Union.svg";

const Hero = () => {
  return (
    <main className="hero-section">
      <section className="h-[542px] text-center pt-[52px] md:pt-[69px] relative container">
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
          <form
            action=""
            className="lg:flex w-full items-center justify-between py-[3px] px-[4px] lg:border-2 border-borderColor lg:rounded-[100px]"
          >
            <div className="lg:flex w-full items-center justify-between py-[3px] px-[4px] rounded-[16px] lg:rounded-[100px] border-2 lg:border-none mb-[8px] lg:mb-0">
              <div className="flex items-center flex-grow px-[20px] h-[56px] lg:h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-borderColor">
                <img src={notebookIcon} alt="" />
                <select
                  name=""
                  id=""
                  className="border-0 flex-grow text-ash text-lg font-semibold"
                >
                  <option disabled selected value="volvo">
                    Reason for travel
                  </option>
                </select>
              </div>
              <div className="flex items-center flex-grow px-[20px] h-[56px] lg:h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-borderColor">
                <img src={calendarIcon} alt="" />
                <select
                  name=""
                  id=""
                  className="border-0 flex-grow  text-ash text-lg font-semibold"
                >
                  <option disabled selected value="volvo">
                    Date
                  </option>
                </select>
              </div>
              <div className="flex items-center flex-grow px-[20px] h-[56px] lg:h-auto">
                <img src={mapIcon} alt="" />
                <select
                  name=""
                  id=""
                  className="border-0 flex-grow  text-ash text-lg font-semibold"
                >
                  <option disabled selected value="volvo">
                    Destination
                  </option>
                </select>
              </div>
            </div>
            <button className="bg-darkgreen text-white rounded-[50px] lg:rounded-[49px] px-[10px] py-[20px] w-full lg:w-[119px] h-[56px] lg:h-[58px] flex items-center justify-center font-semibold">
              Get Started
            </button>
          </form>
        </header>
        {/* <img className="union-1" src={union1} alt="" />
        <img className="union-2" src={union2} alt="" /> */}
      </section>
    </main>
  );
};

export default Hero;
