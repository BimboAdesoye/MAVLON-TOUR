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
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta
          name="description"
          content="We guarantee the best packages for trips abroad and academic programs."
        />
        <link rel="canonical" href="/" />
      </Helmet>
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
          <FrequentlyAskedQuestions />
          <Contact />
          <ViewPackages />
        </main>
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
//
