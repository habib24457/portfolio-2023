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
              Software developer with 4 years of hands-on experience in Germany.
              I excel in designing and implementing scalable solutions. I have
              worked in large Enterprise .NET Applications. Migrating old .NET
              Applications into the modern .NET. I have worked with large
              international teams. Collaborated with QA, DevOps teams. I can
              communicate fluently in English and German. I have integrated
              myself to the German work culture, and ready for a fulltime
              position.
            </>
          ) : (
            <>
              Softwareentwickler mit 4 Jahren praktischer Erfahrung im
              Deutschland . Ich bin spezialisiert auf die Entwicklung und
              Implementierung skalierbarer Lösungen. Ich habe an großen
              Enterprise .NET-Anwendungen gearbeitet und alte .NET-Anwendungen
              in moderne .NET-Technologien migriert. Ich habe mit großen
              internationalen Teams gearbeitet und mit QA- und DevOps-Teams
              zusammengearbeitet. Ich kann fließend Englisch und Deutsch
              kommunizieren. Ich habe mich erfolgreich in die deutsche
              Arbeitskultur integriert und bin bereit für eine Festanstellung.
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
