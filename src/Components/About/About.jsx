import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FaXing } from "react-icons/fa";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  const [pageLanguage, setPageLanguage] = useContext(LanguageContext);

  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          {pageLanguage == "en" ? <>Hello, I am</> : <>Hallo, ich bin</>}
          <span className="about__name">&nbsp;Habibur Rahman</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          {pageLanguage == "en" ? (
            <>
              Software developer with 4+ years of hands-on experience in the
              field of web development. I excel in designing and implementing
              scalable solutions, and my expertise spans such as full-stack
              development. Committed to delivering high-quality code and staying
              ahead in a rapidly evolving tech landscape. Let's connect to
              explore opportunities for collaboration and discuss how my skills
              can contribute to your next project!
            </>
          ) : (
            <>
              Softwareentwickler mit mehr als 4 Jahren praktischer Erfahrung in
              der Bereich der Webentwicklung. Ich bin ein Meister im Entwerfen
              und Umsetzen skalierbare Lösungen, und meine Expertise umfasst
              beispielsweise Full-Stack Entwicklung. Wir sind bestrebt,
              qualitativ hochwertigen Code zu liefern und zu bleiben in einer
              sich schnell entwickelnden Technologielandschaft die Nase vorn zu
              haben. Lassen Sie uns eine Verbindung herstellen Entdecken Sie
              Möglichkeiten zur Zusammenarbeit und besprechen Sie, wie meine
              Fähigkeiten aussehen kann zu Ihrem nächsten Projekt beitragen!
            </>
          )}
        </p>
        <div className="about__contact center">
          <a
            href="https://www.xing.com/profile/Habibur_Rahman211/cv"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <FaXing className="xingIcon" />
          </a>
          <a
            href="https://github.com/habib24457"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:habiburehman390@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+4915758268375"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/habib24457/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Timeline />
      <Introduction />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
