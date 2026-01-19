import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Mandet India",
      position: "Software Development Intern",
      duration: "June 2025 – October 2025",
      duration_short: "5 months",
      icon: "💼",
      highlights: [
        "Led frontend development for client-facing production websites using React.js and Next.js.",
        "Implemented responsive UI/UX designs using Tailwind CSS and Bootstrap.",
        "Integrated REST APIs and Firebase Authentication for secure, scalable web applications.",
        "Deployed and managed applications on Netlify and Hostinger with performance optimization."
      ]
    },
    {
      id: 2,
      company: "BMC Software",
      position: "Technical Support Intern (L1)",
      duration: "January 2024 – June 2024",
      duration_short: "6 months",
      icon: "🛠️",
      highlights: [
        "Provided L1 support for BMC Intelligent Integration platform.",
        "Troubleshot Linux, Docker, and MySQL issues in enterprise environments.",
        "Collaborated with L2 teams by documenting logs and root cause observations."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Professional Experience</h2>
                <p>Building scalable web applications and AI systems with proven track record in frontend development, API integration, and performance optimization.</p>
                
                <div className="experience-boxes">
                  <Row className="align-items-stretch">
                    {experiences.map((exp) => (
                      <Col size={12} md={6} key={exp.id} className="mb-4">
                        <div className="experience-box">
                          <div className="exp-icon">{exp.icon}</div>
                          
                          <div className="exp-header">
                            <h3>{exp.company}</h3>
                            <p className="exp-position">{exp.position}</p>
                          </div>

                          <div className="exp-duration">
                            <span className="duration-label">{exp.duration_short}</span>
                            <span className="duration-date">{exp.duration}</span>
                          </div>

                          <div className="exp-highlights">
                            {exp.highlights.map((highlight, idx) => (
                              <div key={idx} className="exp-highlight">
                                <span className="highlight-dot">▪</span>
                                <p>{highlight}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
