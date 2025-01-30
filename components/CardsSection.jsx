import { cardsData } from "@/constant/cards_constant";
import { Icon } from "@iconify/react";
import React from "react";
import Button from "./ui/Button";

export default function CardsSection() {
  return (
    <div className="bg-[#def5f8] xl:p-28 sm:p-10 p-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
      {/* card 1 */}
      <div className="xl:p-10 p-5 bg-white hover:bg-primary text-gray_dark hover:text-white  cursor-pointer rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="tracking-wider leading-snug">
            <h1 className="text-xl">Opening</h1>
            <h1 className="text-xl">Hours</h1>
          </div>
          <Icon
            icon={"hugeicons:clock-05"}
            className="text-white bg-primary p-1 rounded-md text-5xl"
          />
        </div>

        <div className="mt-12">
          <p className="text-sm">Monday - Friday</p>
          <p>09:00am - 12:00am</p>
        </div>

        <div className="my-5">
          <p className="text-sm">Address</p>
          <p>Informatica Netherland</p>
          <p>B.V</p>
        </div>
      </div>

      {cardsData.map((item, index) => (
        <div
          key={index}
          className="xl:p-10 p-5 bg-white hover:bg-primary text-gray_dark hover:text-white  cursor-pointer rounded-2xl"
        >
          <div className="flex justify-between items-center">
            <div className="tracking-wider leading-snug">
              <h1 className="text-xl">{item.title}</h1>
            </div>
            <Icon
              icon={item.icon}
              className="text-white bg-primary p-1 rounded-md text-5xl"
            />
          </div>

          <div className="mt-12">
            <p className=" ">{item.content}</p>
          </div>

          <div className="mt-10 flex justify-center items-center">
            <Button
              text={item.button_text}
              bg={"bg-primary"}
              color={"text-white"}
              rounded="full"
              className={"hover:bg-white hover:text-primary"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
