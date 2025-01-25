import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiBootstrap,
  SiJavascript,
  SiDotnet,
  SiCsharp,
  SiMysql,
} from "react-icons/si";
import prismImg from "../../assets/projectImages/prism.png";
import cryptoImg from "../../assets/projectImages/crypto.png";
import picnicImg from "../../assets/projectImages/picnic.png";
import cityImg from "../../assets/projectImages/city.png";
import birdImg from "../../assets/projectImages/bird.png";
import apiImg from "../../assets/projectImages/endpoints.png";

export const Projects = () => {
  const [pageLanguage, setPageLanguage] = useContext(LanguageContext);

  const myProjects = [
    {
      id: 1,
      projectName: "NZWalk .Net Web API",
      liveSiteLink: "https://github.com/habib24457/NZWalks.Updated",
      frontendGitLink:
        "https://github.com/habib24457/NZWalks.Updated/tree/main/test",
      backendGitLink: "https://github.com/habib24457/NZWalks.Updated",
      projectImg: apiImg,
      projectDescriptionEn:
        "New Zone Walk is an .Net Core Web API that I have been developing to build a web platform for walk enthusiast. End user can suggest a new walking region and set the difficulty, for other users to follow. ",
      projectDescriptionDe:
        "New Zone Walk ist eine .Net Core-Web-API, die ich entwickelt habe, um eine Webplattform für Wanderbegeisterte aufzubauen. Der Endbenutzer kann eine neue Wanderregion vorschlagen und den Schwierigkeitsgrad festlegen, damit andere Benutzer ihm folgen können.",
      techStack: ".Net 7, EF Core, MS SQL Database",
      hasFrontend: false,
    },
    {
      id: 2,
      projectName: "React, Node, Mongo Project:Prism Photography",
      liveSiteLink: "https://prism-photo-studio.web.app/",
      frontendGitLink: "https://github.com/habib24457/Prism-photography-client",
      backendGitLink: "https://github.com/habib24457/prism-photo-server",
      projectImg: prismImg,
      projectDescriptionEn:
        "A full-stack website with authentication(Firebase) and payment(Stripe) gateaway. React and Node is used in frontend and backend & MongoDB as database.",
      projectDescriptionDe:
        "Eine Full-Stack-Website mit Authentifizierungs- (Firebase) und Zahlungs- (Stripe) Gateway. React and Node wird im Frontend und Backend und MongoDB als Datenbank verwendet",
      techStack: "mern",
      hasFrontend: true,
    },
    {
      id: 3,
      projectName: "React, Typescrip Project: Awesome Crypto",
      liveSiteLink: "https://funny-pavlova-88e535.netlify.app/",
      frontendGitLink:
        "https://github.com/habib24457/awesome-crypto-typescript",
      backendGitLink: "",
      projectImg: cryptoImg,
      projectDescriptionEn:
        "A React & Typescript app. Showing crypto information from REST API.",
      projectDescriptionDe:
        "Eine React & Typescript-App. Kryptoinformationen von REST API anzeigen.",
      techStack: "mern",
      hasFrontend: true,
    },
    {
      id: 4,
      projectName: "React, Node, Mongo Project: Picnic Super Market",
      liveSiteLink: "https://picnic-supermarket-auth.web.app/home",
      frontendGitLink: "https://github.com/habib24457/Picnic-e-commerce",
      backendGitLink: "https://github.com/habib24457/picnic-ecommerce-server",
      projectImg: picnicImg,
      projectDescriptionEn:
        "A full-stack e-commerce website with authentication(Firebase) and payment(Stripe) gateaway. React and Node is used in frontend and backend & MongoDB as database.",
      projectDescriptionDe:
        "Eine Full-Stack-E-Commerce-Website mit Authentifizierungs- (Firebase) und Zahlungs- (Stripe) Gateway. React and Node wird im Frontend und Backend und MongoDB als Datenbank verwendet.",
      techStack: "mern",
      hasFrontend: true,
    },

    {
      id: 5,
      projectName: "Javascript project: Handling REST API",
      liveSiteLink: "https://habib24457.github.io/my-fency-slider/",
      frontendGitLink: "https://github.com/habib24457/my-fency-slider",
      backendGitLink: "",
      projectImg: birdImg,
      projectDescriptionEn:
        "A simple Javascript project that gives you high quality pictures.",
      projectDescriptionDe:
        "Ein einfaches Javascript-Projekt, das Ihnen qualitativ hochwertige Bilder liefert.",
      techStack: "mern",
      hasFrontend: true,
    },
  ];

  return (
    <>
      <div className="section">
        <h2 className="section__title different">
          {pageLanguage == "en" ? "Projects" : "Projekte"}
        </h2>

        <div className="allProjects">
          {myProjects.map((project) => (
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img src={project.projectImg} alt="Rockstar Games" />
                  </div>
                </div>
                <div className="project_information">
                  <h4>{project.projectName}</h4>
                  <p>
                    {pageLanguage == "en"
                      ? project.projectDescriptionEn
                      : project.projectDescriptionDe}
                  </p>
                  {project.techStack == "mern" ? (
                    <div style={{ margin: "20px" }}>
                      <FaReact />
                      <SiNodedotjs />
                      <SiExpress />
                      <SiMongodb />
                      <SiBootstrap />
                    </div>
                  ) : (
                    <div style={{ margin: "20px" }}>
                      <SiDotnet />
                      <SiCsharp />
                      <SiMysql />
                    </div>
                  )}

                  {project.techStack == "normal" && (
                    <div style={{ margin: "20px" }}>
                      <SiJavascript />
                    </div>
                  )}

                  <div>
                    <a
                      href={project.liveSiteLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.hasFrontend ? (
                        <span type="button" className="btns onbt onbt">
                          See live site
                        </span>
                      ) : (
                        <span type="button" className="btns onbt onbt">
                          Check code
                        </span>
                      )}
                    </a>
                    <a
                      href={project.frontendGitLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.hasFrontend ? (
                        <span type="button" className="btns onbt onbt">
                          View Code
                        </span>
                      ) : (
                        <span type="button" className="btns onbt onbt">
                          Unit tests
                        </span>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
