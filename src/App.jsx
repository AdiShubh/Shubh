import "./App.css";
import HeroSection from "./Components/HeroSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectsSection from "./Components/ProjectsSection";
import ExperienceSection from "./Components/ExperienceSection";
import EducationSection from "./Components/EducationSection";
import ContactSection from "./Components/ContactSection";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NeonCursor from "./Components/ui/NeonCursor";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your actual ID
    ReactGA.send("pageview");
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />

      <ExperienceSection />
      {/* <EducationSection /> */}
      <ContactSection />
      <Footer />
      <NeonCursor />
    </>
  );
}

export default App;
