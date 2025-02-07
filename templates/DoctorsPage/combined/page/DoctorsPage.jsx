"use client"; // ✅ Add this at the top

import React from 'react';
import useDoctors from '../../functional/page/useDoctors';
import DoctorsCard from '../../ui/organisms/DoctorsCard';
import Navbar from '@/components/organisms/Navbar';

export default function DoctorsPage() {
    const { t } = useDoctors();

    return (
        <div>
            <Navbar />
            <DoctorsCard t={t} />
        </div>
    );
}
