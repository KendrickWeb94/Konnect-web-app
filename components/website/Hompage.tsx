

import React from 'react'
import { Hero } from './shared/Hero'
import { Details } from './shared/Details'
import { Features } from './shared/Features'
import { Testimonial } from './shared/Testimonial'

const Hompage = () => {
  return (
    <div className=''>
      <Hero />
      <Details />
      <Features />
      <Testimonial />
    </div>
  )
}

export default Hompage

