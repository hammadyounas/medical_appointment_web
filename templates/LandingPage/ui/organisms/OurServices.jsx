import React from 'react'
import { servicesData } from '../../functional/constant/services_constant'
import Image from 'next/image'

export default function OurServices({t}) {
  return (
    <div className=' xl:p-28 sm:p-10 p-5 '>
       <div className="lg:text-4xl sm:text-2xl text-xl md:mt-8 mt-3 text-gray-700 font-semibold">
          <h1 className='text-center'>Our Services</h1>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 lg:my-10 my-5">
        {t.services.map((service, index) => (
          <div key={index} className="pb-5 bg-white rounded-b-md shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image 
              src={service.image} 
              alt={service.title} 
              width={300} 
              height={300} 
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
            <h3 className=" sm:text-lg font-semibold text-gray-800 text-center text-primary">{service.title}</h3>
            <p className="mt-2 text-sm text-gray-600 text-center text-gray">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
