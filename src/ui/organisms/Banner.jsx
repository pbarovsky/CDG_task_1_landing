import { Info } from "../atoms/Info";
import { Button } from "../atoms/Button";
import { Container } from "../atoms/Container";
import { Link } from "react-scroll";
import sc from "./Banner.module.css";

const BannerParapgraphText =
  "Help you to create high-quality digital products that your clients will love and let your business thrive";

export const Banner = ({ id }) => {
  return (
    <Container>
      <div className={sc.banner} id={id}>
        <div className={sc.banner_text}>
          <div className={sc.banner_info_container}>
            <h1 className={`${sc.banner_title} title_h1`}>Hey, I’m Nick</h1>
            <p className={`${sc.banner_subtitle} body_text`}>
              Frontend developer
            </p>
          </div>
          <Info
            paragraphText={BannerParapgraphText}
            className={sc.banner_description}
          />
        </div>
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
        />
        <div className={sc.banner_photo}></div>
      </div>
    </Container>
  );
};
