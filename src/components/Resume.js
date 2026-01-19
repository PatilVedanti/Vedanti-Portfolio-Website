import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1QiJO5VZ-ujcTRQPXVIG5cktz80KFaLu1/view?usp=drive_link";
  
  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Download My Resume</h2>
                <p>Get a comprehensive overview of my skills, experience, and projects</p>
                <a href={resumeLink} download className="resume-btn" target="_blank" rel="noopener noreferrer">
                  <span>📄 Download Resume</span>
                </a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
