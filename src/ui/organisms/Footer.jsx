import { Container } from "../atoms/Container";
import sc from "./Footer.module.css";

export const Footer = () => {
  return (
    <Container>
      <footer className={sc.footer}>
        <p className={sc.footer__text}>© 2022 JetRuby. All Rights Reserved</p>
      </footer>
    </Container>
  );
};
