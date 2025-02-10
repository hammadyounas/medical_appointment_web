import { doctorsData } from "@/templates/DoctorsPage/functional/constant/doctors_contant";
import { servicesData } from "@/templates/LandingPage/functional/constant/services_constant";
import { useState } from "react";

export default function useAppointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    doctor: "",
    slot: "",
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState([]); // Store filtered doctors

  // Service options
  const serviceOptions = servicesData.map((service) => ({
    value: service.title,
    label: service.title,
  }));

  const handleChange = (selectedOption) => {
    setSelectedService(selectedOption);
    updateFormData({ service: selectedOption.value });

    // Filter doctors based on selected service
    const doctorsForService = doctorsData.filter((doctor) =>
      doctor.services.includes(selectedOption.value)
    );

    setFilteredDoctors(doctorsForService); // Update doctors list
    setSelectedDoctor(null); // Reset doctor selection
    updateFormData({ doctor: "" }); // Reset doctor field
  };

  // Doctor options (filtered based on selected service)
  const doctorsOptions = filteredDoctors.map((doctor) => ({
    value: doctor.name,
    label: doctor.name,
  }));

  const handleDoctorChange = (selectedOption) => {
    setSelectedDoctor(selectedOption);
    updateFormData({ doctor: selectedOption.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Appointment Booked Successfully!");
  };

  return {
    step,
    formData,
    nextStep,
    prevStep,
    updateFormData,
    handleSubmit,
    handleChange,
    selectedService,
    serviceOptions,
    doctorsOptions,
    handleDoctorChange,
    selectedDoctor,
  };
}
