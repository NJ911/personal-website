import "./App.css";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import WorkExperience from "./components/WorkExperience";
import theme from "./theme";
import Footer from "./components/Footer";
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <WorkExperience />
      <Projects />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
