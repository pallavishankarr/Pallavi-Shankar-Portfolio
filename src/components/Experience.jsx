import React from 'react'
import '../App.css'
import experiences from '../data/experience'

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        
        <div className="experience__container">
          <div className="experience__stack">
                         {experiences.map((experience, index) => (
               <div 
                 key={experience.id} 
                 className="experience__card"
                 style={{
                   transform: `translateY(${index * 8}px)`,
                   zIndex: experiences.length - index,
                   height: '200px' 
                 }}
               >
                <div className="experience__content">
                  <div className="experience__header">
                    <h3 className="experience__title">{experience.title}</h3>
                    <span className="experience__timeline">{experience.timeline}</span>
                  </div>
                  <p className="experience__description">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
