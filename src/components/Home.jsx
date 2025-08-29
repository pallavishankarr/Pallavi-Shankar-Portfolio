import React from 'react'
import '../App.css'
import homeData from '../data/homeData'

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          
          <div className="home__img"></div>

          <div className="home__data">
            <h1 className="home__title">
              Hi, I'm <span className="home__title-name">{homeData.name}</span>!
            </h1>
            <h3 className="home__subtitle">{homeData.title}</h3>
            <p className="home__description">{homeData.description}</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home