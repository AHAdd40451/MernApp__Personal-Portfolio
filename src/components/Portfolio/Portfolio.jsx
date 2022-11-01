import React from 'react'
import port from '../../assets/port.png'
import("./Portfolio.css")




const Portfolio = () => {

  const data = [{
    id: 1,
    image: port,
    title: 'React Portfolio Website Tutorial From Scratch - Build & Deploy React JS Portfolio Website    ',
    github: "https://github.com/AHAdd40451/uniswap-clone",
    demo: "https://github.com/AHAdd40451/uniswap-clone"
  },
  {
    id: 2,
    image: port,
    title: 'React Portfolio Website Tutorial From Scratch - Build & Deploy React JS Portfolio Website    ',
    github: "https://github.com/AHAdd40451/uniswap-clone",
    demo: "https://github.com/AHAdd40451/uniswap-clone"
  },
  {
    id: 3,
    image: port,
    title: 'React Portfolio Website Tutorial From Scratch - Build & Deploy React JS Portfolio Website    ',
    github: "https://github.com/AHAdd40451/uniswap-clone",
    demo: "https://github.com/AHAdd40451/uniswap-clone"
  },


  ]
  return (
    <section id="portfolio">

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>


        {
          data.map(({
            id,
            image,
            title,
            github,
            demo
          }) => {
            return (

              <article className='portfolio_item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>


              </article>

            )
          })
        }



      </div>
    </section>
  )
}

export default Portfolio