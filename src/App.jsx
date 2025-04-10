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

function App() {
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
