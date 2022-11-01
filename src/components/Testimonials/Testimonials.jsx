import React from 'react'
import avtr from '../../assets/bg.jpg'
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import("./Testimonials.css")

const Testimonials = () => {

  const data = [{
    avatar: avtr,
    name: 'alex khan',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ullam aperiam delectus libero saepe perferendis quam quibusdam eos quasi dignissimos placeat eligendi tempore natus veniam consequuntur quae, tenetur et architecto",
  }, {
    avatar: avtr,
    name: 'alex khan',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ullam aperiam delectus libero saepe perferendis quam quibusdam eos quasi dignissimos placeat eligendi tempore natus veniam consequuntur quae, tenetur et architecto",
  },
  {
    avatar: avtr,
    name: 'alex khan',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ullam aperiam delectus libero saepe perferendis quam quibusdam eos quasi dignissimos placeat eligendi tempore natus veniam consequuntur quae, tenetur et architecto",
  },
  ]
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"

        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >


        {
          data.map(({ avatar, name, review }, index) => {

            return (

              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name' >{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          }


          )
        }

      </Swiper>

    </section >
  )
}

export default Testimonials