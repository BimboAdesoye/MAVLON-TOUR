import Navbar from "../../components/Navbar";
import SinglePackageHero from "./SinglePackageHero";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";
import ViewPackages from "../../components/ViewPackages";
import MoreDetails from "./MoreDetails";
import { useRef } from "react";

const SinglePackage = () => {
  const scrollRef = useRef(null);

  const scrollToComponent = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <Navbar />
      <SinglePackageHero scrollToComponent={scrollToComponent} />
      <MoreDetails scrollRef={scrollRef} />
      <Testimonial />
      <ViewPackages />
      <Footer />
    </section>
  );
};

export default SinglePackage;
