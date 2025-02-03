'use client';
import Navbar from '@/components/organisms/Navbar'
import React from 'react'
import Healthcare_Solutions from '../../ui/organisms/Healthcare_Solutions'
import CardsSection from '../../ui/organisms/CardsSection'
import StatisticsCard from '../../ui/organisms/StatisticsCard';
import TestimonialSection from '../../ui/organisms/TestimonialSection';
import useLandingPage from '../../functional/page/useLandingPage';

export default function LandingPage() {
    const {selectedIndex, setSelectedIndex} = useLandingPage();
  return (
    <div className="bg-white w-full overflow-hidden">
         <Navbar />
         <Healthcare_Solutions />
         <CardsSection />
         <StatisticsCard />
         <TestimonialSection selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
       </div>
  )
}
