import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [pageLanguage, setPageLanguage] = useContext(LanguageContext);

  const AboutMeSectionEn = () => {
    return (
      <div className="introduction_datacontainer">
        <h4>
          Hi Everyone, My name is
          <span className="different"> Habibur Rahman </span> I am currently
          studying Mobility and Logistics at Rhein Waal University of Applied
          Sciences.
          <br />
          <br />I have a bachelor degree in Computer Science and Engineering.
          <span className="different">Daffodil International University.</span>
          I also have interest in Supply Chain Management, therfore I am doing
          another bachelor in Mobility and Logistics.
          <br />
        </h4>
        <h4>Terms That can describe me apart form Coding :</h4>
        <h4 className="different">
          <span className="icons">
            <ExitToAppIcon />
          </span>
          Film Lover{" "}
        </h4>
        <h4 className="different">
          <span className="icons">
            <ExitToAppIcon />
          </span>
          Photographer{" "}
        </h4>
      </div>
    );
  };

  const AboutMeSectionDe = () => {
    return (
      <div className="introduction_datacontainer">
        <h4>
          Hallo,Ich heiße
          <span className="different">&nbsp;Habibur Rahman &nbsp;</span> Ich bin
          studiert derzeit Mobilität und Logistik an der Hochschule Rhein-Waal.
          <br />
          <br />
          Ich habe einen Bachelor-Abschluss in Informatik.
          <span className="different">Daffodil International University.</span>
          I also have interest in Supply Chain Management, therfore I am doing
          another bachelor in Mobility and Logistics. <br />
          <br />
        </h4>
        <h4>Begriffe, die mich neben Coding beschreiben können:</h4>
        <h4 className="different">
          <span className="icons">
            <ExitToAppIcon />
          </span>
          Film Lover{" "}
        </h4>
        <h4 className="different">
          <span className="icons">
            <ExitToAppIcon />
          </span>
          Photographer{" "}
        </h4>
      </div>
    );
  };

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            {pageLanguage == "en" ? (
              <>
                About <span className="different">Me</span>
              </>
            ) : (
              <>
                Über <span className="different">mich</span>
              </>
            )}
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            {pageLanguage == "en" ? <AboutMeSectionEn /> : <AboutMeSectionDe />}
          </div>
        </div>
      </section>
    </>
  );
};
