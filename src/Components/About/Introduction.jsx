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
          Sciences in Kamp Lintfort, Germany.
          <br />
          <br />
          <span className="different">
            This degree course primarily focuses on IT and Logistics. Having
            already studied computer science in my home country, I am eager to
            explore the intersection of IT and supply chain management. I
            believe that the field of Mobility and Logistics offers the perfect
            combination of both, allowing me to apply my IT skills while diving
            into the dynamic world of logistics and supply chain management.
          </span>
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
          studiert derzeit Mobilität und Logistik an der Hochschule Rhein-Waal,
          Kamp-Lintfort, Germany.
          <br />
          <br />
          <span>
            Der Schwerpunkt dieses Studiengangs liegt auf den Bereichen IT und
            Logistik. Haben Da ich in meinem Heimatland bereits Informatik
            studiert habe, bin ich gespannt darauf Entdecken Sie die
            Schnittstelle zwischen IT und Supply Chain Management. ICH glauben,
            dass der Bereich Mobilität und Logistik das Richtige bietet Eine
            Kombination aus beidem, die es mir ermöglicht, meine IT-Kenntnisse
            beim Tauchen anzuwenden in die dynamische Welt der Logistik und des
            Supply Chain Managements.
          </span>
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
