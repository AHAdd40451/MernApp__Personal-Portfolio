import React from 'react'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"


import("./About.css");


const About = () => {
  const myFunction = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  return (
    <section id='about'>

      <h2>About me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src="/images/me1.png" alt="about_Image" />

          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">


            <article className="about__card">
              <FaAward className='about__icon' />
              <h1>Experience</h1>
              <small>3 Years Experience</small>
            </article>


            <article className="about__card">
              <FiUsers className='about__icon' />
              <h1>Clients</h1>
              <small>10 Plus Clients</small>

            </article>


            {/* <article className="about__card">

              <VscFolderLibrary className='about__icon' />

              <h1>Project</h1>
              <small>10 Plus</small>

            </article> */}
          </div>

          <p class="para">Greetings ... My name is Abdul Ahad and I am a Full stack Web Developer When I was in school at 8 standards I started web development at FC future coaching center but unfortunately, they only provide me with basic for 6 months then I started with online learning from Youtube ,Udemy .. etc I try to become a self-learner <span id="dots">...</span><span id="more">now I am ALHAMDULILLAH when I was in college I completed Full stack development for myself it was a big achievement because I am the first one in my house and my friend circle who started programming it was difficult for me but I do with my pure passion and intention After hands-0n experience in web development, I started blockchain development it was too difficult because this field has fewer tutorials on Youtube and other platforms then I go for paid tutorials on Udemy and learn Chunk by Chunk and now completed 50 percent and am still in processing soon completed the full course I randomly scroll Upwork and see full stack development job and I applied they said you have to work as a Full Stack developer including Blockchain and I am easily said yes I can do then I do their many tasks but the Achievement was adding Wallet Connect integration on their website yeah at the age of 18 I do I am proud myself. Thank you for reading.</span><a href="#1" onClick={myFunction} id="myBtn"> Read more</a></p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>


      </div>
    </section >
  )
}

export default About