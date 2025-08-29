import React from 'react'
import '../App.css'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        
        <div className="projects__grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project__card"
            >
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.shortDescription}</p>
              <div className="project__tech">
                {project.technologies.join(', ')}
              </div>
              <p className="project__full-description">{project.fullDescription}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project__link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

