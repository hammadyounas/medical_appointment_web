"use client";

import React from 'react'
import DoctorDetails from '../../ui/organisms/DoctorDetails'
import useDoctorDetail from '../../functional/page/useDoctorDetail'
import Navbar from '@/components/organisms/Navbar';

export default function DoctorDetailsPage() {
    const {doctor} = useDoctorDetail();
  return (
    <div className='bg-light_blue min-h-screen'>
        <Navbar />
      <DoctorDetails doctor={doctor} />
    </div>
  )
}
