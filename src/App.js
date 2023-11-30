import React, { useContext, useEffect, useState, createContext } from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Github } from "./Components/About/Github";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";

export const LanguageContext = createContext("en");

export default function App() {
  const [{ themename }] = useContext(ThemeContext);
  const [pageLanguage, setPageLanguage] = useState("en");

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <LanguageContext.Provider value={[pageLanguage, setPageLanguage]}>
      <div id="top" className={`${themename} app`}>
        <section id="#home">
          <Header />
        </section>
        <main>
          <About />
          <Github />
          <section id="#projects">
            <Projects />
          </section>
          <section id="#contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageContext.Provider>
  );
}