import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/theme";
import { LanguageContext } from "../../App";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const [pageLanguage, setPageLanguage] = useContext(LanguageContext);
  const [isDeutsch, setIsDeutsch] = useState(false);

  const handlaLanguageChange = () => {
    setIsDeutsch(!isDeutsch);
    setPageLanguage(isDeutsch ? "en" : "de");
  };

  const deMsg = {
    navHome: "Home",
    navAbout: "Über",
    navSkill: "Fahigkeiten",
  };

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <a
            href="#home"
            onClick={() => toggleNavList("#home")}
            className="link link--nav"
          >
            Home
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#about"
            onClick={() => toggleNavList("#about")}
            className="link link--nav"
          >
            {pageLanguage == "en" ? "About" : "Über"}
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#skills"
            onClick={() => toggleNavList("#skills")}
            className="link link--nav"
          >
            {pageLanguage == "en" ? "Skills" : "Fähigkeiten"}
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#projects"
            onClick={() => toggleNavList("#projects")}
            className="link link--nav"
          >
            {pageLanguage == "en" ? "Projects" : "Projekte"}
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#contact"
            onClick={() => toggleNavList("#contact")}
            className="link link--nav"
          >
            {pageLanguage == "en" ? "Contact" : "Kontakt"}
          </a>
        </li>
        {/* <li className="nav__list-item">
          <a
            href="https://www.linkedin.com/feed/"
            onClick={toggleNavList}
            className="link link--nav"
            target="_blank"
            rel="noreferrer"
          >
            {pageLanguage == "en" ? "Resume" : "Lebenslauf"}
          </a>
        </li> */}
      </ul>
      <button
        type="button"
        onClick={toggeltheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
        style={{ backgroundColor: "inherit" }}
      >
        {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>

      <button className="langBtn" onClick={() => handlaLanguageChange()}>
        {isDeutsch ? "English" : "Deutsch"}
      </button>
    </nav>
  );
};
