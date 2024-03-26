import Navbar from "../../components/Navbar";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Milestones from "./Milestones";

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
      </section>
    </main>
  );
};

export default LandingPage;
//
