import React from "react";

export default function AppointmentForm({ prevStep, formData, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Name"
        required
      />
      <input
        className="w-full p-2 border rounded mb-2"
        type="email"
        placeholder="Email"
        required
      />
      <input
        className="w-full p-2 border rounded mb-2"
        type="tel"
        placeholder="Phone Number"
        required
      />
      <textarea
        className="w-full p-2 border rounded mb-2"
        placeholder="Message"
      ></textarea>
      <div className="flex justify-between">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
