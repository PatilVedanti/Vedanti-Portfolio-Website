import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import multimodalimg from "../assets/img/multimodal image.jpg";
import ecommerceimg from "../assets/img/e-commerce.avif";
import jobalignimg from "../assets/img/jobalign.png";
import one6icbimg from "../assets/img/one6icb.png";
import adminemployeeimg from "../assets/img/employee.jpg";
import adminpartnerimg from "../assets/img/admin-partner portal.png";
import associateimg from "../assets/img/associate portal.png";
import partnerimg from "../assets/img/partner portal.png";
import adminvolunteerimg from "../assets/img/admin-volunteer.webp";
import volunteerimg from "../assets/img/volunteer.png";
import animapetimg from "../assets/img/animapet.webp";
import bloodbankimg from "../assets/img/blood bank.webp";
import qrgeneratorimg from "../assets/img/qr generator.jpg";
import quizappimg from "../assets/img/quiz app.png";
import shadowgeneratorimg from "../assets/img/shadow generator.jpg";
import stationaryimg from "../assets/img/stationary e-commerce.jpg";
import stopwatchimg from "../assets/img/stopwatch.png";
import textsummarizationimg from "../assets/img/text summarization.png";
import todolistimg from "../assets/img/to-do list.jfif";
import weatherimg from "../assets/img/weather app.webp";
import adminpanelimg from "../assets/img/admin-dashboard.png";
import amazonimg from "../assets/img/amazon clone.jfif";
import analogclockimg from "../assets/img/analogue clock.webp";
import calculatorimg from "../assets/img/calculator.webp";
import formvalidationimg from "../assets/img/form validation.png";
import gymimg from "../assets/img/gym landing.jpg";
import myportfolioimg from "../assets/img/portfolio.webp";
import netfliximg from "../assets/img/netflix clone.webp";
import nftimg from "../assets/img/NFT.webp";
import passwordimg from "../assets/img/password generator.jpg";
import modalimg from "../assets/img/pop up modal.jfif";
import registrationimg from "../assets/img/registration form.avif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';

export const Projects = () => {
  const [expandedTabs, setExpandedTabs] = useState({
    all: false,
    personal: false,
    internship: false,
    mini: false
  });

  const toggleExpand = (tabKey) => {
    setExpandedTabs(prev => ({
      ...prev,
      [tabKey]: !prev[tabKey]
    }));
  };

  // Main Projects
  const mainProjects = [
    {
      title: "Multimodal Regional Language Video Summarizer",
      description: "AI + Web Development",
      imgUrl: multimodalimg,
      details: "Built a Next.js web app for video upload, AI-based summarization, and regional language narration. Integrated FastAPI backend using Whisper, OpenCV, and gTTS.",
      link: "https://github.com/PatilVedanti/Final_Year_Project"
    },
    {
      title: "E-commerce Web Application",
      description: "Full-Stack Development",
      imgUrl: ecommerceimg,
      details: "Developed a full-stack e-commerce platform using React, Node.js, and MongoDB with Firebase Authentication and Razorpay payment gateway.",
      link: "https://github.com/PatilVedanti"
    },
    {
      title: "JobAlign – AI Resume–JD Aligner",
      description: "AI-Powered Web Tool",
      imgUrl: jobalignimg,
      details: "Built an AI-powered web tool using OpenAI API to match resumes with job descriptions with skill-gap analysis.",
      link: "https://github.com/PatilVedanti"
    }
  ];

  // Internship Work Projects
  const internshipProjects = [
    // {
    //   title: "one6icb",
    //   description: "Web Application",
    //   imgUrl: one6icbimg,
    //   details: "A modern web application project built with latest web technologies. Responsive and user-friendly interface.",
    //   link: "https://github.com/PatilVedanti/one6icb"
    // },
    {
      title: "Admin Employee Portal",
      description: "Admin Dashboard",
      imgUrl: adminemployeeimg,
      details: "TypeScript-based admin dashboard for employee management. Built with modern frontend technologies for seamless user experience.",
      link: "https://github.com/PatilVedanti/admin-employee"
    },
    {
      title: "Admin Partner Portal",
      description: "Admin Dashboard",
      imgUrl: adminpartnerimg,
      details: "TypeScript admin portal for managing partner operations. Comprehensive dashboard with analytics and management tools.",
      link: "https://github.com/PatilVedanti/admin-partner"
    },
    {
      title: "Associate Portal",
      description: "Web Portal",
      imgUrl: associateimg,
      details: "TypeScript-based portal for associates. Feature-rich platform with user-friendly interface and robust functionality.",
      link: "https://github.com/PatilVedanti/associate-portal"
    },
    {
      title: "Partner Portal",
      description: "Web Portal",
      imgUrl: partnerimg,
      details: "TypeScript partner management portal. Streamlined interface for efficient partner collaboration and operations.",
      link: "https://github.com/PatilVedanti/partner-portal"
    },
    // {
    //   title: "Admin Volunteer Portal",
    //   description: "Admin Dashboard",
    //   imgUrl: adminvolunteerimg,
    //   details: "Administrative platform for managing volunteers. Comprehensive tools for volunteer coordination and management.",
    //   link: "https://github.com/PatilVedanti/admin-volunteer"
    // },
    // {
    //   title: "Volunteer Portal",
    //   description: "Web Portal",
    //   imgUrl: volunteerimg,
    //   details: "Platform for volunteers to manage activities and collaborate. User-centric design with intuitive navigation.",
    //   link: "https://github.com/PatilVedanti/volunteer-portal"
    // }
  ];

  // Mini Projects from WebDevelopment_Projects
  const miniProjects = [
    {
      title: "AnimaPet",
      description: "Web Application",
      imgUrl: animapetimg,
      details: "Interactive pet animation project. Beautiful animations and engaging user interface built with HTML, CSS, and JavaScript.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/AnimaPet"
    },
    {
      title: "Blood Bank Website",
      description: "Medical Web App",
      imgUrl: bloodbankimg,
      details: "Blood bank management website for finding blood donors and managing blood inventory. Full-featured web application.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/Blood-Bank-Website-main"
    },
    {
      title: "QR Code Generator",
      description: "Utility Tool",
      imgUrl: qrgeneratorimg,
      details: "Generate QR codes easily. Simple and effective web tool for creating QR codes for various purposes.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/QR%20Code%20Generator"
    },
    {
      title: "Quiz Application",
      description: "Educational App",
      imgUrl: quizappimg,
      details: "Interactive quiz application with scoring system. Great for testing knowledge on various topics.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/Quiz%20Application"
    },
    {
      title: "Shadow Generator",
      description: "Design Tool",
      imgUrl: shadowgeneratorimg,
      details: "CSS shadow generator tool. Create perfect shadows for your web design projects.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/Shadow-generator"
    },
    {
      title: "Stationary E-Commerce",
      description: "Online Store",
      imgUrl: stationaryimg,
      details: "E-commerce website for stationery products. Complete shopping experience with product catalog.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/Stationary%20E-Com"
    },
    {
      title: "Stopwatch",
      description: "Utility Tool",
      imgUrl: stopwatchimg,
      details: "Functional stopwatch application. Perfect for tracking time with start, stop, and reset functionality.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/Stopwatch"
    },
    {
      title: "To Do List",
      description: "Productivity App",
      imgUrl: todolistimg,
      details: "Task management application. Add, edit, and delete tasks to organize your daily activities.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/To%20Do%20List"
    },
    {
      title: "Weather App",
      description: "Weather App",
      imgUrl: weatherimg,
      details: "Real-time weather information. Get weather updates for any location with a clean interface.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/Weather%20App"
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard UI",
      imgUrl: adminpanelimg,
      details: "Admin panel dashboard with analytics and controls. Professional interface for managing applications.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/admin%20dashboard"
    },
    {
      title: "Amazon Clone",
      description: "E-commerce Clone",
      imgUrl: amazonimg,
      details: "Amazon-like e-commerce website. Project showcasing modern web design and layout techniques.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/amazon%20clone"
    },
    {
      title: "Analog Clock",
      description: "Interactive Display",
      imgUrl: analogclockimg,
      details: "Working analog clock. Shows current time with rotating hands and smooth animations.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/analog%20clock"
    },
    {
      title: "Calculator",
      description: "Utility Tool",
      imgUrl: calculatorimg,
      details: "Functional calculator application. Perform basic mathematical operations easily.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/calculator"
    },
    {
      title: "Form Validation",
      description: "Web Component",
      imgUrl: formvalidationimg,
      details: "Form validation with JavaScript. Ensures data integrity with client-side validation.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/form-validation"
    },
    {
      title: "Gym Landing Page",
      description: "Landing Page",
      imgUrl: gymimg,
      details: "Professional gym website landing page. Designed to attract fitness enthusiasts.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/gym%20landing%20page"
    },
    {
      title: "My Portfolio",
      description: "Personal Portfolio",
      imgUrl: myportfolioimg,
      details: "Personal portfolio website showcasing skills and projects. Professional design and layout.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/my%20portfolio"
    },
    {
      title: "Netflix Clone",
      description: "Streaming UI",
      imgUrl: netfliximg,
      details: "Netflix-inspired UI clone. Showcases modern web design and responsive layout.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/netflix%20clone"
    },
    {
      title: "NFT Preview Card",
      description: "UI Component",
      imgUrl: nftimg,
      details: "NFT preview card component. Modern design for displaying NFT information.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/nft-preview-card-component-main"
    },
    {
      title: "Password Generator",
      description: "Utility Tool",
      imgUrl: passwordimg,
      details: "Generate secure passwords. Create random passwords with customizable options.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/password%20generator"
    },
    {
      title: "Pop-up Modal",
      description: "UI Component",
      imgUrl: modalimg,
      details: "Modal pop-up component. Reusable component for displaying modal dialogs.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/pop-up%20model"
    },
    {
      title: "Registration Form",
      description: "Form Component",
      imgUrl: registrationimg,
      details: "User registration form with validation. Complete form for user sign-up.",
      link: "https://github.com/PatilVedanti/WebDevelopment_Projects/tree/main/registration%20form"
    }
  ];

  // Combine all projects for "All Projects" tab
  const allProjects = [...mainProjects, ...internshipProjects, ...miniProjects];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Showcasing my work in full-stack web development and AI integration, demonstrating expertise in building intelligent, scalable applications with modern technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="all">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="all" className="tab-link"><span className="tab-icon">⭐</span> All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="personal" className="tab-link"><span className="tab-icon">🎯</span> Personal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="internship" className="tab-link"><span className="tab-icon">💼</span> Internship</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="mini" className="tab-link"><span className="tab-icon">🚀</span> Mini Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="all">
                      <Row>
                        {
                          allProjects.slice(0, expandedTabs.all ? allProjects.length : 3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {allProjects.length > 3 && (
                        <Row className="mt-5">
                          <Col size={12} className="text-center">
                            <button className="btn-see-more" onClick={() => toggleExpand('all')}>
                              {expandedTabs.all ? 'See Less' : 'See More'}
                            </button>
                          </Col>
                        </Row>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="personal">
                      <Row>
                        {
                          mainProjects.slice(0, expandedTabs.personal ? mainProjects.length : 3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {mainProjects.length > 3 && (
                        <Row className="mt-5">
                          <Col size={12} className="text-center">
                            <button className="btn-see-more" onClick={() => toggleExpand('personal')}>
                              {expandedTabs.personal ? 'See Less' : 'See More'}
                            </button>
                          </Col>
                        </Row>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="internship">
                      <Row>
                        {
                          internshipProjects.slice(0, expandedTabs.internship ? internshipProjects.length : 3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {internshipProjects.length > 3 && (
                        <Row className="mt-5">
                          <Col size={12} className="text-center">
                            <button className="btn-see-more" onClick={() => toggleExpand('internship')}>
                              {expandedTabs.internship ? 'See Less' : 'See More'}
                            </button>
                          </Col>
                        </Row>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="mini">
                      <Row>
                        {
                          miniProjects.slice(0, expandedTabs.mini ? miniProjects.length : 3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {miniProjects.length > 3 && (
                        <Row className="mt-5">
                          <Col size={12} className="text-center">
                            <button className="btn-see-more" onClick={() => toggleExpand('mini')}>
                              {expandedTabs.mini ? 'See Less' : 'See More'}
                            </button>
                          </Col>
                        </Row>
                      )}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}