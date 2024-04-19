import Navbar from "../../components/Navbar";
import SinglePackageHero from "./SinglePackageHero";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";
import ViewPackages from "../../components/ViewPackages";
import MoreDetails from "./MoreDetails";

const SinglePackage = () => {
  return (
    <section>
      <Navbar />
      <SinglePackageHero />
      <MoreDetails />
      <Testimonial />
      <ViewPackages />
      <Footer />
    </section>
  );
};

export default SinglePackage;
