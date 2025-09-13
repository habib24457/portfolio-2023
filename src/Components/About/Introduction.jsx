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
          studying Mobility and Logistics with focus in IT and Business, at
          Rhein Waal University of Applied Sciences in Kamp Lintfort, Germany.
          <br />
          <br />
          <span className="different">
            I am passionate about building excellent software that solves real
            world issues. I am also passionate about writing clean code,
            developing stable software. Beside coding, I always motivated to
            influence people by sharing my knowledge and friendly behavior. In
            the free time I always focus on what technology is trending now a
            days, and try to upgrade myself. Or Sometimes I just go for a long
            walk with my Nikon camera to capture Life and moments.
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
          studiert derzeit Mobilität und Logistik mit Schwerpunkt Informatik und
          Wirtschaft an der Hochschule Rhein-Waal, Kamp-Lintfort, Germany.
          <br />
          <br />
          <span>
            Ich bin leidenschaftlich daran interessiert, hervorragende Software
            zu entwickeln, die reale Probleme löst. Außerdem lege ich großen
            Wert auf sauberen Code und die Entwicklung stabiler Software. Neben
            dem Programmieren motiviert es mich, Menschen durch das Teilen
            meines Wissens und mein freundliches Verhalten zu inspirieren. In
            meiner Freizeit informiere ich mich immer über aktuelle
            Technologietrends und versuche, mich weiterzuentwickeln. Oder
            manchmal mache ich einfach einen langen Spaziergang mit meiner
            Nikon-Kamera, um das Leben und besondere Momente einzufangen.
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
