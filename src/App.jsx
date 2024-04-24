import "./App.css";
// import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const LandingPage = lazy(() => import("./Pages/Landing Page/LandingPage"));
// const AboutUs = lazy(() => import("./Pages/About Mavlon/AboutUs"));

import LandingPage from "./Pages/Landing Page/LandingPage";
import AboutUs from "./Pages/About Mavlon/AboutUs";
import Programs from "./Pages/Programs/Programs";
import SinglePackage from "./Pages/SinglePackage/SinglePackage";
import ContactPage from "./Pages/Contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/single-package/:id" element={<SinglePackage />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
