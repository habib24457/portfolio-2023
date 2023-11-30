import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../App";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = useContext(ThemeContext);
  const [pageLanguage, setPageLanguage] = useContext(LanguageContext);
  const [linecolor, setlinecolor] = useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          Professional <span className="different">Experiences</span>
        </h2>
        {/*Work experience 1-Socialbnb*/}
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"Mar 2023 - Current"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              {pageLanguage == "en" ? (
                <> Internship: Web developer (React JS, Node JS)</>
              ) : (
                <>Praktikum: Webentwickler (React JS, Node JS)</>
              )}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              {pageLanguage == "en" ? (
                <> at Socialbnb GMBH, Cologne, Germany</>
              ) : (
                <> bei Socialbnb GMBH, Cologne, Germany</>
              )}
            </h4>

            <ul style={{ marginTop: "20px" }} data-aos="fade-right">
              {pageLanguage == "en" ? (
                <>
                  <li style={{ marginTop: "10px" }}>
                    &#8226; Developing interactive and intuitive user interfaces
                    using React JS.
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    &#8226;Building REST APIs using Node JS.
                  </li>
                  <li>
                    &#8226;Contributing to a web project which used by more than
                    1000 daily users and improving the performance.{" "}
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    &#8226;
                    {"Link:"}
                    <a> https://www.socialbnb.org/</a>
                  </li>
                </>
              ) : (
                <>
                  <li style={{ marginTop: "10px" }}>
                    &#8226; Entwicklung interaktiver und intuitiver
                    Benutzeroberflächen mit React JS.
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    &#8226;Erstellen von REST-APIs mit Node JS.
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    &#8226;Mitwirken an einem Webprojekt, das von mehr als
                    genutzt wurde 1000 tägliche Benutzer und Verbesserung der
                    Leistung.{" "}
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    &#8226;
                    {"Link:"}
                    <a> https://www.socialbnb.org/</a>
                  </li>
                </>
              )}
            </ul>
          </VerticalTimelineElement>

          {/*Work experience 2-Tegoly*/}
          <VerticalTimelineElement
            date={"June 2021 - December 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Werkstudent: Frontend Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Tegoly GMBH, Bochum, Germany
            </h4>
            <ol data-aos="fade-right">
              {pageLanguage == "en" ? <></> : <></>}

              <li style={{ marginTop: "10px" }}>
                {pageLanguage == "en" ? (
                  <>
                    {" "}
                    Developing web application integrated with microsoft teams
                    using React JS and Typescript in the frontend
                  </>
                ) : (
                  <>
                    Entwickeln einer Webanwendung, die in Microsoft-Teams
                    integriert ist Reagieren Sie im Frontend auf JS und
                    Typescript
                  </>
                )}
              </li>

              {pageLanguage == "en" ? (
                <li style={{ marginTop: "10px" }}>
                  Developing REST APIs using dotnet core web API
                </li>
              ) : (
                <li>
                  Entwickeln von REST-APIs mithilfe der Dotnet-Core-Web-API
                </li>
              )}
              <li style={{ marginTop: "10px" }}>
                {"Link:"}
                <a>https://tegoly.com/</a>
              </li>
            </ol>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </>
  );
};
