import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Milestones from "./Milestones";

const LandingPage = () => {
  return (
    <main className="container">
      <header>
        <Navbar />
      </header>
      <section>
        <Hero />
        <Milestones/>
      </section>
    </main>
  );
};

export default LandingPage;
//
