import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion';
import("./Services.css")

const Services = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <section id="services">



        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className='container services__container'>


          <article className='service'>
            <div className='service__head'>
              <h3 className=''>MERN

              </h3>
            </div>

            <ul className='service__list'>
              <li><BiCheck className='service__list-icon' />
                <p>Experience building websites with MERN Stack (E-commerce)
                </p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>in depth knowledge of MongoDB, NodeJS, Express and React.
                </p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Creating RESTful services with Node.js.</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Familiarity with RESTful APIs</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p> modern authorization mechanisms, such as JSON Web Token
                </p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Working Experience with popular React.js workflows (such as Flux or Redux)
                </p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Troubleshooting and resolving varying levels of technical issues.</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Designing and developing enhancements on new and existing applications using Node.js and other scripting environments.</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Managing the interchange of data between servers and users.
                </p>
              </li>






            </ul>
          </article>

          {/* <article className='service'>
            <div className='service__head'>
              <h3 className=''>BLOCKCHAIN

              </h3>
            </div>

            <ul className='service__list'>
              <li><BiCheck className='service__list-icon' />
                <p> Cryptocurrency exchange development
                </p>
              </li>

              <li><BiCheck className='service__list-icon' />
                <p> Cryptocurrency and blockchain wallet development
                </p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p> Cryptocurrency coin and token creation
                </p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>ICO website development
                </p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Smart contract development</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Blockchain app and DAPP development</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Blockchain consulting</p>
              </li>

              <li><BiCheck className='service__list-icon' />
                <p>Decentralized Finance (DEFI) development</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p> Custom cryptocurrency, blockchain, NFT app development, and more.</p>
              </li>
            </ul>
          </article> */}



        </div>
      </section >
    </motion.div>
  )
}

export default Services