import { Button } from "@/components/atoms/Button";
import React from "react";

export default function SelectDoctor({
  doctorsOptions,
  handleDoctorChange,
  selectedDoctor,
  nextStep,
  prevStep,
}) {
  return (
    <div className="max-w-2xl flex flex-col sm:justify-center items-center w-full shadow-md shadow-gray p-6 rounded-md">
      <h1 className="sm:text-3xl text-xl font-semibold text-primary my-5">
        Book An Appointment
      </h1>
      <h2 className="sm:text-xl text-lg font-bold mb-4">Select a Doctor</h2>

      {/* Display doctors with images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {doctorsOptions.map((doctor) => (
          <div
            key={doctor.value}
            className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedDoctor?.value === doctor.value
                ? "border-primary bg-blue-100"
                : "border-gray-300"
            }`}
            onClick={() => handleDoctorChange(doctor)}
          >
            <img
              src={doctor.image}
              alt={doctor.label}
              className="w-14 h-14 rounded-full object-cover mr-3"
            />
            <p className="text-lg font-medium">{doctor.label}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
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


// export default function SelectDoctor({
//   doctorsOptions,
//   handleDoctorChange,
//   selectedDoctor,
//   nextStep,
//   prevStep,
// }) {
//   return (
//     <div className="max-w-2xl  flex flex-col justify-center items-center w-full shadow-md shadow-gray p-6 rounded-md">
//       <h1 className="text-3xl font-semibold text-primary my-5">
//         Book An Appointment
//       </h1>
//       <h2 className="text-xl font-bold mb-4">Select a Doctor</h2>
//       <Select
//         options={doctorsOptions}
//         value={selectedDoctor}
//         onChange={handleDoctorChange}
//         className="w-full"
//       />
//       <div className="flex justify-between w-full mt-4">
//         <Button
//           className="bg-gray hover:bg-black text-white px-4 py-2 rounded"
//           onClick={prevStep}
//           text={"Back"}
//         />

//         <Button
//           className="bg-primary hover:bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={nextStep}
//           disabled={!selectedDoctor} // Disable button until a doctor is selected
//           text="Next"
//         />
//       </div>
//     </div>
//   );
// }
