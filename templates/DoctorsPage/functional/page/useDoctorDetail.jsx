"use client";

import { useParams } from "next/navigation";
import { doctorsData } from "../constant/doctors_contant";

export default function useDoctorDetail() {
  const { id } = useParams(); // Get doctor ID from URL
  const doctor = doctorsData[id];

  return { doctor };
}
