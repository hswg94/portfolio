import { ChakraProvider } from "@chakra-ui/react";

import IntroSection from "./pages/IntroSection";
import CertSection from "./pages/CertSection";
import ContactSection from "./pages/ContactSection";
import ProjectSection from "./pages/ProjectSection";

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";
import Alert from "./components/Alert";
import { AlertProvider } from "./context/alertContext";
function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <IntroSection />
          <ProjectSection />
          <CertSection />
          {/* <ContactSection /> */}
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App
