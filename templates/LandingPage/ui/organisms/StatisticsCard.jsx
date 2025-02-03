import React from 'react'
import { StatisticsCardData } from '../../functional/constant/statistics_card_constant'
import { Icon } from '@iconify/react'

export default function StatisticsCard() {
  return (
    <div className='xl:p-28 sm:p-10 p-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
        {StatisticsCardData.map((item, index) => (
             <div
             key={index}
             className="group xl:p-10 p-5  text-gray_dark rounded-2xl transition-all duration-300"
           >
             <div className="flex flex-col justify-between items-center">
             <Icon
                 icon={item.icon}
                 className="text-primary p-1 rounded-md text-6xl"
               />
               <div className="tracking-wider leading-snug mt-5">
                 <h1 className="">{item.title}</h1>
               </div>

               <div>
                <p className='mt-5 font-bold text-3xl'>{item.count}</p>
               </div>
             
             </div>
           
           </div>
           
            ))}
    </div>
  )
}
