import React from 'react'
import { ServiceCard } from '../Components/ServiceCard'

function Services() {
  return (
    <>
      <div className="services text-center mt-30">
        <h3 className='text-[48px] font-[700] text-purple-700'>Services We Offer</h3>
        <h3 className='text-[30px] font-[500]'>Get a full-scale <span className='text-purple-600'>development team</span> without <br /> costing a fortune.</h3>
        <p className='text-[18px] font-[400]'>Proudly serving businesses across the <b>United States, United Kingdom, Europe, the <br /> Middle East,</b> and beyond — wherever innovation is needed.</p>
      </div>
      <div className="cards flex flex-wrap justify-center items-center gap-10 mt-15">
        <ServiceCard title = 'Web Development' />
        <ServiceCard title = 'Ui/Ux' />
        <ServiceCard title = 'App Development' />
        <ServiceCard title = 'Seo Optimization' />
      </div>
    </>
  )
}

export default Services
