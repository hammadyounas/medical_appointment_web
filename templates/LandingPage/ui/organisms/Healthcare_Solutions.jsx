import Image from "next/image";
import React from "react";
import {LinkButton} from "@/components/atoms/Button";

export default function Healthcare_Solutions({t}) {
  return (
    <div className="flex max-md:flex-col justify-between lg:pl-12 sm:pl-5 pl-2 ">
      {/* right section */}
      <div className=" md:w-1/2 mt-10">
        <h2 className="font-semibold text-primary">{t.home.medical}</h2>
        <div className="lg:text-6xl sm:text-3xl text-2xl md:mt-8 mt-3 text-gray-700 font-semibold leading-snug tracking-wider">
          <h1>{t.home.healthcare}</h1>
          <h1 className="md:mt-5">{t.home.solutions}</h1>
        </div>
        <p className="md:mt-8 mt-3 lg:w-[70%] text-gray">
          {t.home.text}
        </p>

        <div className="flex rounded-full md:my-8 my-3">
          <LinkButton
            bg={"bg-primary"}
            text={t.home.appointment_button}
            color={"text-white"}
            rounded="full"
            href={"/appointment"}
          />
        </div>
      </div>

      {/* left section */}
      <div className="lg:-mt-[15rem] sm:-mt-[10rem] sm:-mr-[8rem] -mr-[3rem] lg:-mr-[10rem] h-full">
        <Image
          src={"/assets/images/bg_image.png"}
          alt="background_image"
          className=" overflow-x-hidden"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
