import { Info } from "../atoms/Info";
import { Avatar } from "../atoms/Avatar";
import { Education } from "../molecules/Education";
import { Interests } from "../molecules/Interests";
import { Button } from "../atoms/Button";
import { Container } from "../atoms/Container";
import { Link } from "react-scroll";
import sc from "./About.module.css";

const AboutParagraphText = (
  <>
    - specialist in Frontend development. Clear code is my passion.
    <br />
    Solving issues through negotiations
  </>
);

const GetInTouchButton = ({ className = "" }) => (
  <Button
    btn_text={
      <Link
        style={{ color: "var(--white)" }}
        to="form"
        smooth={true}
        duration={200}
      >
        Get in touch
      </Link>
    }
    className={className}
  />
);

export const About = ({ id }) => {
  return (
    <Container>
      <div className={sc.about} id={id}>
        <h2 className={`${sc.about_title} title_h2`}>About me</h2>
        <div className={sc.about_container}>
          <div className={sc.about_main}>
            <Avatar />
            <div className={sc.get_in_touch}>
              <Info
                boldText="Nick Richardson"
                paragraphText={AboutParagraphText}
                className={sc.about_info}
              />
              <GetInTouchButton className={sc.button_web_tablet} />
            </div>
          </div>

          <div className={sc.about_interests_education}>
            <Interests />
            <Education />
            <GetInTouchButton className={sc.button_mobile} />
          </div>
        </div>
      </div>
    </Container>
  );
};
