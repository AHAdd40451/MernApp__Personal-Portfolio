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
        <h2>PERKS</h2>
        <div className='container services__container'>


          <article className='service'>
            <div className='service__head'>
              <h3 className=''>PERKS

              </h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Comprehensive end-to-end development services</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Seamless integration of front-end and back-end functionalities</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Customized and visually appealing user interfaces</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Reliable and secure applications with robust database management</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>Rigorous testing and debugging for high-quality code</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Performance-optimized applications for faster user experiences</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Timely project delivery and efficient deployment processes</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Ongoing support and maintenance for long-term success</p>
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