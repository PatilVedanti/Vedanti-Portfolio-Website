import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12}>
            <MailchimpForm />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col size={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vedanti-patil/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/vedanti-patil"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_vedantipatil?igsh=MTZ4eG1jM2pkZzlvdg=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright @Vedanti Patil 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}