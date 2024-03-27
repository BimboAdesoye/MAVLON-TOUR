import Navbar from "../../components/Navbar";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Milestones from "./Milestones";
import OurPackages from "./OurPackages";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import ViewPackages from "../../components/ViewPackages";
import TopPackages from "./TopPackages";
import Testimonial from "../../components/Testimonial";

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
        <TopPackages />
        <Testimonial />
        <Contact />
        <ViewPackages />
      </main>
      <Footer />
    </main>
  );
};

export default LandingPage;
//
