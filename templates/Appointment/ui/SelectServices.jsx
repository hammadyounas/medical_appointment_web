    import { Button } from '@/components/atoms/Button';
    import React from 'react'
    import Select from 'react-select';

    export default function SelectServices({ nextStep, selectedService, handleChange, serviceOptions}) {
    return (
        <div className='max-w-2xl flex flex-col justify-center items-center w-full shadow-md shadow-gray p-6 rounded-md'>
             <h1 className="text-3xl font-semibold text-primary">
                    Book An Appointment
                  </h1>
        <h2 className="text-xl font-bold mb-4">Select a Service</h2>
        <Select
        options={serviceOptions} 
        value={selectedService} 
        onChange={handleChange} 
        className="w-full"
        />
        <Button 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={nextStep}
        text="Next"
        bg="bg-blue-500"
        disabled={!selectedService} // Disable button until a service is selected
        />
        
    </div>
    )
    }
