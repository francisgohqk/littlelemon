import Header from "./Components/Header";
import AboutSection from "./Components/AboutSection";
import MenuSection from "./Components/MenuSection";
import ReservationSection from "./Components/ReservationSection";
import Footer from "./Components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
