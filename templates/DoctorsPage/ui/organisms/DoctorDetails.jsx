"use client"; // Ensure this runs on the client

import Image from "next/image";

export default function DoctorDetails({doctor}) {
 // Fetch the correct doctor

  if (!doctor) {
    return <p className="text-center text-red-500">Doctor not found!</p>;
  }

  return (
    <div className="flex max-md:flex-col items-start lg:w-[70%] w-[90%] mx-auto">
        <Image src={doctor.image} alt={doctor.name} width={300} height={300} className="max-sm:mt-5" />
      <div className="flex flex-col sm:ml-10 w-full text-left max-sm:my-5">
        <h1 className="text-3xl mb-4 font-semibold">{doctor.name}</h1>
        <p className="text-primary text-xl font-semibold ">{doctor.speciality}</p>
        <p className="text-gray-800 mt-2">Dr. John Doe is a highly experienced cardiologist with over 20 years of practice in the field of cardiovascular medicine. He specializes in diagnosing and treating heart diseases, including hypertension, arrhythmia, and coronary artery disease. Over the years, he has successfully performed numerous life-saving procedures and is well-known for his patient-centered approach.</p>
        <p className="mt-4">Throughout his career, Dr. Doe has been an active member of the American College of Cardiology and the American Heart Association. He frequently participates in international medical conferences, staying updated with the latest advancements in cardiology. His research work has been published in renowned medical journals, contributing to innovative treatment methodologies that have improved patient outcomes.</p>
        <p className="mt-4">Beyond his clinical practice, Dr. Doe is passionate about educating patients on preventive heart care. He strongly believes in a holistic approach, combining medication, lifestyle modifications, and patient awareness to improve overall heart health. His dedication, compassionate nature, and unwavering commitment to patient welfare have earned him a stellar reputation among both his peers and his patients.</p>  
        <p className="my-4">In his free time, Dr. Doe enjoys hiking, reading medical literature, and spending time with his family. He firmly believes that maintaining a work-life balance is essential for overall well-being, and he encourages both his patients and colleagues to prioritize self-care. His unwavering commitment to his profession, coupled with his deep sense of empathy, makes him one of the most respected and sought-after cardiologists in the region.</p>    
      </div>
    </div>
  );
}
