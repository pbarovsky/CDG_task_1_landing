import React from 'react';
import AboutInfo from "./AboutInfo";
import Avatar from "./Avatar";
import Education from "./Education";
import Interests from "./Interests";
import Button from "../Button";
import sc from "./About.module.css";

const boldText = "Nick Richardson";
const AboutParagraphText = (
  <>
    - specialist in Frontend development. Clear code is my passion.
    <br />
    Solving issues through negotiations
  </>
);

const About = () => {
  return (
    <div className={sc.about}>
      <h2 className={sc.about__title}>About me</h2>
      <div className={sc.about__grid_container}>
        <div className={sc.about__avatar}>
          <Avatar />
        </div>
        <div className={sc.about__info}>
          <AboutInfo boldText={boldText} paragraphText={AboutParagraphText} classSize={sc['about-info__container-size']} classFont={sc['about-info_font-size']}/>
        </div>
        <div className={sc.about__button}>
          <Button btn_text="Get in touch" />
        </div>
        <div className={sc.about__interests}>
          <Interests />
        </div>
        <div className={sc.about__education}>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default About;
