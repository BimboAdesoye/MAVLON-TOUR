import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Testimonial from "../../components/Testimonial";
import ViewPackages from "../../components/ViewPackages";
import OurGoals from "./OurGoals";
import OurValues from "./OurValues";

const AboutUs = () => {
  return (
    <section>
      <Navbar />
      <OurGoals />
      <OurValues />
      <Testimonial />
      <ViewPackages />
      <Footer />
    </section>
  );
};

export default AboutUs;
