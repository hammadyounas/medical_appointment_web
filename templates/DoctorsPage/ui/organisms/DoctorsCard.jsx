import React from "react";
import { doctorsData } from "../../functional/constant/doctors_contant";
import Image from "next/image";
import { LinkButton } from "@/components/atoms/Button";

export default function DoctorsCard({ t }) {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl text-primary text-center font-semibold max-lg:py-10">
        {t.navbar.doctors}
      </h1>

      <div className=" xl:w-[80%] w-[90%] lg:p-16 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {doctorsData.map((doc, index) => (
          <div
            key={index}
            className="bg-white shadow-lg  text-gray_dark rounded-md transition-all duration-300 pb-5 relative"
          >
            <div className="">
              <Image
                src={doc.image}
                alt="doctor"
                width={500}
                height={180}
                className="rounded-t-md w-full h-48 object-cover object-top"
              />
            </div>

            <div className="p-5">
              <h1 className="sm:text-xl "><a href={`/doctors/${index}`} className="hover:text-primary_light">{doc.name}</a></h1>
              <p className="text-primary mt-1">
                <a href={`/appointment/doctor-appointment`} className="hover:text-gray">{doc.speciality}</a>
              </p>
              <p className="text-black mt-1 text-sm">Works {doc.timing}</p>
              <p className="text-gray mt-1 sm:mb-10 mb-5">
                {doc.description}
              </p>
            </div>

            <div className="absolute bottom-4 w-full flex justify-center">
              <LinkButton
                text={"Read More"}
                bg="bg-primary group-hover:bg-white"
                color="text-white group-hover:text-primary"
                rounded="md"
                className="transition-all duration-300 hover:bg-white hover:text-primary hover:border-2 border-primary"
                href={`/doctors/${index}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
