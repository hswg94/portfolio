import { ChakraProvider } from "@chakra-ui/react";

import IntroSection from "./pages/IntroSection";
import CertSection from "./pages/CertsSection";
import ProjectSection from "./pages/ProjectsSection";
import SkillSection from "./pages/SkillsSection";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import Alert from "./components/Alert";
import { AlertProvider } from "./context/alertContext";
function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        {/* <Alert /> */}
        <Header />
        <IntroSection />
        <SkillSection />
        <ProjectSection />
        <CertSection />
        <Footer />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
