import Navbar from "../../components/Navbar";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Milestones from "./Milestones";
import OurPackages from "./OurPackages";

const LandingPage = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <Hero />
        <Milestones />
        <AboutUs />
        <OurPackages />
      </section>
    </main>
  );
};

export default LandingPage;
//
