import { cardsData } from "@/templates/LandingPage/functional/constant/cards_constant";
import { Icon } from "@iconify/react";
import React from "react";
import Button from "../../../../components/atoms/Button";

export default function CardsSection() {
  return (
    <div className="bg-[#def5f8] xl:p-28 sm:p-10 p-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
      {/* card 1 */}
      <div className="xl:p-10 p-5 bg-white hover:bg-primary text-gray_dark hover:text-white  cursor-pointer rounded-2xl shadow-md">
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
       className="group xl:p-10 p-5 bg-white hover:bg-primary text-gray_dark hover:text-white  cursor-pointer rounded-2xl transition-all duration-300"
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
         <p className="text-gray group-hover:text-white">{item.content}</p>
       </div>
     
       <div className="mt-10 flex justify-center items-center">
         <Button
           text={item.button_text}
           bg="bg-primary group-hover:bg-white"
           color="text-white group-hover:text-primary"
           rounded="full"
           className="transition-all duration-300"
         />
       </div>
     </div>
     
      ))}
    </div>
  );
}
