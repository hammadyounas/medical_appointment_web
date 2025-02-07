"use client";

import React from "react";
import DoctorDetails from "../../ui/organisms/DoctorDetails";
import useDoctorDetail from "../../functional/page/useDoctorDetail";
import Navbar from "@/components/organisms/Navbar";
import PageLayout from "@/components/organisms/PageLayout";

export default function DoctorDetailsPage() {
  const { doctor } = useDoctorDetail();
  return (
        <PageLayout className="bg-light_blue min-h-screen">
      <DoctorDetails doctor={doctor} />
    </PageLayout>
  );
}
