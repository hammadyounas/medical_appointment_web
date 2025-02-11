"use client";

import React from "react";
import SelectServices from "../../ui/SelectServices";
import SelectDoctor from "../../ui/SelectDoctor";
import SelectAvailableSlots from "../../ui/SelectAvailableSlots";
import useAppointment from "../../functional/pages/useAppointment";

export default function MultiStepForm() {
  const {
    step,
    formData,
    nextStep,
    prevStep,
    updateFormData,
    handleSubmit,
    selectedService,
    handleChange,
    serviceOptions,
    doctorsOptions,
    handleDoctorChange,
    selectedDoctor,
  } = useAppointment();
  return (
    <div className="mx-auto sm:p-6 p-2 bg-white  flex flex-col justify-center items-center lg:h-[70vh] md:h-[90vh] overflow-x-hidden">
      {step === 1 && (
        <SelectServices
          nextStep={nextStep}
          selectedService={selectedService}
          handleChange={handleChange}
          serviceOptions={serviceOptions}
        />
      )}
      {step === 2 && (
        <SelectDoctor
          nextStep={nextStep}
          prevStep={prevStep}
          doctorsOptions={doctorsOptions}
          handleDoctorChange={handleDoctorChange}
          selectedDoctor={selectedDoctor}
        />
      )}
      {step === 3 && (
        <SelectAvailableSlots/>
      )}
    </div>
  );
}
