import Navbar from "../../components/Navbar";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Milestones from "./Milestones";
import OurPackages from "./OurPackages";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Milestones />
        <AboutUs />
        <OurPackages />
      </main>
      <Footer />
    </main>
  );
};

export default LandingPage;
//
