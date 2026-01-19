import { useState } from "react";
import 'animate.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const skillsByCategory = {
    "Languages": ["Python", "JavaScript", "SQL", "HTML", "CSS"],
    "Web Technologies": ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS", "Bootstrap"],
    "AI/ML": ["OpenAI API", "Whisper", "NLP"],
    "Databases": ["MongoDB", "MySQL", "Firebase"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Netlify", "Hostinger", "Figma"]
  };

  const categoryIcons = {
    "Languages": "💻",
    "Web Technologies": "🌐",
    "AI/ML": "🤖",
    "Databases": "🗄️",
    "Tools & Platforms": "🛠️"
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>Expertise in full-stack web development with AI integration, specializing in building scalable applications using modern technologies and frameworks.</p>
              
              <div className="skills-grid">
                {Object.entries(skillsByCategory).map((([category, skills], index) => (
                  <div 
                    key={index} 
                    className="skill-category-card"
                    onMouseEnter={() => setExpandedCategory(category)}
                    onMouseLeave={() => setExpandedCategory(null)}
                  >
                    <div className="category-header">
                      <span className="category-icon">{categoryIcons[category]}</span>
                      <h3>{category}</h3>
                      <span className="skill-count">{skills.length}</span>
                    </div>
                    
                    {expandedCategory === category && (
                      <div className="skills-list">
                        {skills.map((skill, idx) => (
                          <div key={idx} className="skill-item">
                            <span className="skill-dot">•</span>
                            <span className="skill-name">{skill}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}