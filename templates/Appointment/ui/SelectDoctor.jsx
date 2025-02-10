import { Button } from "@/components/atoms/Button";
import React from "react";
import Select from "react-select";

export default function SelectDoctor({
  doctorsOptions,
  handleDoctorChange,
  selectedDoctor,
  nextStep,
  prevStep,
}) {
  return (
    <div className="max-w-2xl  flex flex-col justify-center items-center w-full shadow-md shadow-gray p-6 rounded-md">
      <h1 className="text-3xl font-semibold text-primary my-5">
        Book An Appointment
      </h1>
      <h2 className="text-xl font-bold mb-4">Select a Doctor</h2>
      <Select
        options={doctorsOptions}
        value={selectedDoctor}
        onChange={handleDoctorChange}
        className="w-full"
      />
      <div className="flex justify-between w-full mt-4">
        <Button
          className="bg-gray hover:bg-black text-white px-4 py-2 rounded"
          onClick={prevStep}
          text={"Back"}
        />

        <Button
          className="bg-primary hover:bg-blue-500 text-white px-4 py-2 rounded"
          onClick={nextStep}
          disabled={!selectedDoctor} // Disable button until a doctor is selected
          text="Next"
        />
      </div>
    </div>
  );
}
