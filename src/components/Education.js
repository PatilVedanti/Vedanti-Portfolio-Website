import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"

export const Education = () => {
  const educationData = [
    {
      degree: "B.E. in Information Technology",
      institution: "AISSMS IOIT, Pune",
      year: "2021 – 2025",
      score: "CGPA: 8.6"
    },
    {
      degree: "12th Class",
      institution: "N.T. Mundada Junior College",
      year: "2019 – 2021",
      score: "Percentage: 94%"
    },
    {
      degree: "10th Class",
      institution: "N.T. Mundada Global View School",
      year: "2018 – 2019",
      score: "Percentage: 93%"
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Education</h2>
                <p>My educational journey and academic achievements that have shaped my technical expertise and professional growth.</p>
                
                <div className="education-timeline">
                  {
                    educationData.map((edu, index) => {
                      return (
                        <div key={index} className="timeline-item-wrapper">
                          <TrackVisibility>
                            {({ isVisible: itemVisible }) =>
                            <div className={`timeline-item ${itemVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                              <div className="timeline-year">{edu.year}</div>
                              <div className="timeline-content">
                                <div className="timeline-dot"></div>
                                <div className="timeline-body">
                                  <h4>{edu.degree}</h4>
                                  <p className="institution">📍 {edu.institution}</p>
                                  <p className="score">⭐ {edu.score}</p>
                                </div>
                              </div>
                            </div>
                            }
                          </TrackVisibility>
                        </div>
                      )
                    })
                  }
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
