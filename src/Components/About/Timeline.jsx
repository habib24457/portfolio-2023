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
        {/*Work experience 1-RWE*/}
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
                <> Working Student: Software Developer</>
              ) : (
                <>Werkstudent: Software Entwicklung</>
              )}
            </h3>
            <h2
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              {pageLanguage == "en" ? (
                <> at RWE Supply & Trading, Essen, Germany</>
              ) : (
                <> bei RWE Supply & Trading, Essen, Germany</>
              )}
            </h2>

            {pageLanguage == "en" ? (
              <span>
                RWE is one of the leading renewable energy companies globally,
                and I have had the opportunity to contribute to several credit
                risk projects within the company. This role provided an
                excellent learning experience, particularly in the areas of
                Cloud & DevOps technologies and software development. Working
                alongside many experienced senior developers has greatly
                enhanced my technical skills and broadened my knowledge in these
                fields.
              </span>
            ) : (
              <span>
                RWE ist eines der weltweit führenden Unternehmen im Bereich der
                erneuerbaren Energien und Ich hatte die Gelegenheit, zu mehreren
                Kreditrisiken beizutragen Projekte im Unternehmen. Diese
                Funktion bot eine hervorragende Lernerfahrung, insbesondere in
                den Bereichen Cloud & DevOps Technologien und
                Softwareentwicklung. Zusammenarbeit mit vielen erfahrene
                Senior-Entwickler haben meine technische Fähigkeiten und
                erweiterte mein Wissen in diesen Bereichen.
              </span>
            )}
          </VerticalTimelineElement>

          {/*Work experience 2-SocialBnb*/}
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
              {pageLanguage == "en" ? (
                <> Internship: Web Application Developer</>
              ) : (
                <>Praktikum: Webentwickler</>
              )}
            </h3>
            <h2
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              {pageLanguage == "en" ? (
                <> at Socialbnb GMBH, Cologne, Germany</>
              ) : (
                <> bei Socialbnb GMBH, Cologne, Germany</>
              )}
            </h2>

            {pageLanguage == "en" ? (
              <span>
                Socialbnb is a travel organization, and I was part of the team
                responsible for developing their web application. The platform
                allows users to browse and book available accommodations.
                Additionally, I contributed to the development of several
                internal applications, which the company used to manage their
                finances.
              </span>
            ) : (
              <span>
                Socialbnb ist eine Reiseorganisation, und ich war Teil des
                Teams, das für die Entwicklung ihrer Webanwendung verantwortlich
                war. Die Plattform ermöglicht es den Nutzern, verfügbare
                Unterkünfte zu durchsuchen und zu buchen. Darüber hinaus habe
                ich an der Entwicklung mehrerer interner Anwendungen mitgewirkt,
                mit denen das Unternehmen seine Finanzen verwaltete.
              </span>
            )}
          </VerticalTimelineElement>

          {/*Work experience 3-ASIT*/}
          <VerticalTimelineElement
            date={"April 2017 - October 2019"}
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
              Werkstudent: Web Application Developer
            </h3>
            <h2
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Tegoly GMBH, Bochum, Germany
            </h2>
            {pageLanguage == "en" ? (
              <span>
                Tegoly GmbH is a start up that develops business software. One
                of their key software was a document signature software
                integrated with microsoft teams.I was a part of developing this
                software since the beginning and there were some other internal
                projects where I have contributed.
              </span>
            ) : (
              <span>
                Die Tegoly GmbH ist ein Start-up, das Business-Software
                entwickelt. Eins Eine ihrer wichtigsten Software war eine
                Software zur Signatur von Dokumenten Integriert mit Microsoft
                Teams. Ich war an der Entwicklung beteiligt Software von Anfang
                an und es gab einige andere interne Projekte, an denen ich
                mitgewirkt habe.
              </span>
            )}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
