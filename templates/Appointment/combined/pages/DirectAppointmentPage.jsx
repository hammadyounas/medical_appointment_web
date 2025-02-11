'use client';

import PageLayout from '@/components/organisms/PageLayout'
import React from 'react'
import SelectAvailableSlots from '../../ui/SelectAvailableSlots'

export default function DirectAppointmentPage() {
  return (
    <PageLayout>
      <SelectAvailableSlots />
    </PageLayout>
  )
}
