import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import './Work.scss';

// let data = [
//   {
//     name: "Web App",
//     title: "Headphone App",
//     description: "this is an ecommerce web app",
//     image: "https://cdn.sanity.io/images/osz8d61d/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
//     codeLink: "https://github.com/AHAdd40451/Headphone-Web-App",
//     projectLink: "https://e-commerce-headphone-web-app.vercel.app/",
//     tags: "Web App",
//   },
//   {
//     name: "Mobile App",
//     title: "Headphone App",
//     description: "this is an ecommerce web app",
//     image: "",
//     codeLink: "https://github.com/AHAdd40451/Headphone-Web-App",
//     projectLink: "https://e-commerce-headphone-web-app.vercel.app/",
//     tags: "Mobile App",
//   },
// ];

const Work = () => {

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  let [works, setWorks] = useState(['All']);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <section id="work">
          <h5>My Recent Work</h5>

          <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>


          <div className='container portfolio__container'>

            <div className="app__work-filter">
              {['E-comm WebApp', 'WebApp', 'Portfolio WebApp', 'Blockchain WebApp', 'All'].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                  {item}
                </div>
              ))}
            </div>

            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="app__work-portfolio"
            >
              {filterWork.map((work, index) => (
                <div className="app__work-item app__flex" key={index}>
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <div
                      className="app__work-img app__flex"
                    >
                      <img src={urlFor(work.imgUrl)} alt={work.name} />


                      <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        className="app__work-hover app__flex"
                      >
                        <a href={work.projectLink} target="_blank" rel="noreferrer">

                          <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="app__flex"
                          >
                            <AiFillEye />
                          </motion.div>
                        </a>

                      </motion.div>
                    </div>
                  </a>

                  <div className="app__work-content app__flex">
                    <h4 className="bold-text">{work.title}</h4>
                    <p className="p-text-desc" style={{ marginTop: 10 }}>{work.description}</p>

                    <div className="app__work-tag app__flex">
                      <p className="p-text">{work.tags[0]}</p>
                      <a href={work.codeLink} target="_blank" rel="noreferrer">
                        <span className="p-code">Github</span></a>

                    </div>

                  </div>
                </div>

              ))}
            </motion.div>
          </div>
        </section >
      </motion.div >
    </>
  );
};

export default Work