import { useState } from "react";
import Image from "next/image";
import { testimonialsData } from "../../functional/constant/testimonials_constant";
import { Icon } from "@iconify/react";

export default function TestimonialSection({selectedIndex, setSelectedIndex}) {

  return (
    <section className="bg-gray-100 py-3 px-6 lg:px-32">
      <h2 className="text-center lg:text-3xl sm:text-2xl text-xl font-bold text-gray-900">Some Reviews</h2>
      <p className="text-center text-primary mb-12 sm:text-base text-sm">OF OUR CLIENTS</p>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Section: Clients List */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {testimonialsData.map((client, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex items-center gap-4 p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${
                index === selectedIndex ? "bg-white shadow-lg transform translate-x-4" : "bg-transparent"
              }`}
            >
              <Image
                src={client.image}
                alt={client.name}
                width={50}
                height={50}
                className="rounded-full w-10 h-10 object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-800">{client.name}</h4>
                <p className="text-gray-500 text-sm">{client.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Divider */}
        <div className="hidden md:block w-1 bg-primary h-64"></div>

        {/* Right Section: Testimonial Content */}
        <div className="w-full md:w-2/3 text-gray-700">
          <span className="text-primary text-5xl"><Icon icon={'ci:double-quotes-l'} /></span>
          <p className="sm:text-lg italic">
            {testimonialsData[selectedIndex].review}
          </p>
          <div className="mt-4 flex text-primary">
            {Array(testimonialsData[selectedIndex].rating).fill("★").map((star, i) => (
              <span key={i} className="text-xl">{star}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
