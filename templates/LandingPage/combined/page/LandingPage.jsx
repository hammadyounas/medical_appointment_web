'use client';
import Navbar from '@/components/organisms/Navbar'
import React from 'react'
import Healthcare_Solutions from '../../ui/organisms/Healthcare_Solutions'
import CardsSection from '../../ui/organisms/CardsSection'
import StatisticsCard from '../../ui/organisms/StatisticsCard';
import TestimonialSection from '../../ui/organisms/TestimonialSection';
import useLandingPage from '../../functional/page/useLandingPage';
import OurServices from '../../ui/organisms/OurServices';

export default function LandingPage() {
    const {selectedIndex, setSelectedIndex, t} = useLandingPage();
  return (
    <div className="bg-white w-full overflow-hidden">
         <Navbar />
         <Healthcare_Solutions t={t}/>
         <CardsSection t={t}/>
         <StatisticsCard t={t}/>
         <TestimonialSection selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} t={t}/>
         <OurServices t={t}/>
       </div>
  )
}
