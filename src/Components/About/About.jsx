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
              Software developer with 3 years of hands-on experience in the
              field of Web Application Development and Software development. I
              excel in designing and implementing scalable solutions. I have
              achieved certifications in C# from Microsoft and AWS Cloud
              computing fundamentals from AWS. My strong point is my contenuous
              learning mindset.
            </>
          ) : (
            <>
              Softwareentwickler mit 3 Jahren praktischer Erfahrung in der
              Bereich Webanwendungsentwicklung und Softwareentwicklung. Ich bin
              ein Meister im Entwerfen und Umsetzen skalierbare Lösungen. Ich
              habe Zertifizierungen in C# von Microsoft und AWS Cloud
              Computing-Grundlagen von AWS erhalten. Meine Stärke ist meine
              Einstellung zum kontinuierlichen Lernen.
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
