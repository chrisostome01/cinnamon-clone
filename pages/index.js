import Grow from "../components/ui/Grow";
import Agile from "../components/sections/Agile";
import Blog from "../components/sections/Blog";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Offices from "../components/sections/Offices";
import Project from "../components/sections/Project"
import Service from "../components/sections/Service";
import Testimony from "../components/sections/Testimony";
import WhoWeAre from "../components/ui/WhoWeAre";
import HowItWorks from "../components/ui/HowItWorks";

export default function Home() {
  return (
    <>
      {/* ==== Start: header ==== */}
        <Header />
      {/* === end: header ======= */}
      
      {/* ==== Start: project === */}
        <Project />
      {/* ====== end: header ==== */}

      {/* ==== Start: service === */}
        <Service />
      {/* ====== end: service === */}

      {/* ==== Start: agile ===== */}
        <Agile />
      {/* ===== end: agile ====== */}

      {/* == Start: Testimony === */}
        <Testimony />
      {/* === end: Testimony ==== */}

      {/* == Start: WhoWeAre === */}
        <WhoWeAre />
      {/* === end: WhoWeAre ==== */}
   
      {/* == Start: HowItWorks === */}
        <HowItWorks />
      {/* === end: HowItWorks ==== */}

      {/* ==== Start: Grow ====== */}
        <Grow />
      {/* ===== end: Grow ======= */}
   
      {/* === Start: Offices ==== */}
        <Offices />
      {/* ==== end: Offices ===== */}
      
      {/* ==== Start: blog ====== */}
        <Blog />
      {/* ===== end: blog ======= */}

      {/* == Start: ContactUs === */}
        <ContactUs />
      {/* === end: ContactUs ==== */}

      {/* ==== end: footer ====== */}
        <Footer />
      {/* === end: footer ======= */}
    </>
  )
}
