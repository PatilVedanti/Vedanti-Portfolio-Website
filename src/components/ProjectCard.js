import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <div className="proj-link">
              <a href={link} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}