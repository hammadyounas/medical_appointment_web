import React from "react";
import { InlineWidget } from "react-calendly";

export default function SelectAvailableSlots() {
  return (
    <div className="flex flex-col justify-center my-auto items-center w-full rounded-md">
      <div className="w-full max-lg:mt-10 max-sm:mt-4">
        <InlineWidget url="https://calendly.com/hammadyounasdev" />
      </div>
    </div>
  );
}
