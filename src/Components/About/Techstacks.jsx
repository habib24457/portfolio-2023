import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import {
  SiJavascript,
  SiHeroku,
  SiTypescript,
  SiDotnet,
  SiCsharp,
  SiMysql,
  SiAwsamplify,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  const [pageLanguage, setPageLanguage] = useContext(LanguageContext);

  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">
          {pageLanguage == "en" ? "Skills" : "Fähigkeiten"}
        </h2>
        <div className="techsection">
          <div>
            <SiCsharp />
            <h5>C#</h5>
          </div>
          <div>
            <SiDotnet />
            <h5>.Net core</h5>
          </div>
          <div>
            <SiMysql />
            <h5>SQL</h5>
          </div>
          <div>
            <SiAwsamplify />
            <h5>AWS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>

          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
        </div>
      </div>
    </>
  );
};
