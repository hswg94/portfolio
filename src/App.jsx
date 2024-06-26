import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/layout/NavBar";
import HeroSection from "./pages/HeroSection";
import SkillsSection from "./pages/SkillsSection";
import ProjectsSection from "./pages/ProjectsSection";
import CertsSection from './pages/CertsSection';
import ContactsSection from "./pages/ContactsSection";
import Footer from "./components/layout/Footer";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <Container fluid>
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertsSection />
      <ContactsSection />
      <Footer />
    </Container>
  );
}

export default App;