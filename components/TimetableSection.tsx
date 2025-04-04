// components/TimetableSection.tsx
'use client';

import { useState } from 'react';

// Define class types for styling
const classTypes = {
  kids: { bg: 'bg-blue-900/40', border: 'border-blue-700', text: 'text-blue-100' },
  adults: { bg: 'bg-red-900/40', border: 'border-red-700', text: 'text-red-100' },
};

// Class schedule data
const locations = [
  {
    id: 'quinton',
    name: 'Quinton',
    schedule: [
      { day: 'Monday', classes: [] },
      { day: 'Tuesday', classes: [
        { time: '18:00 - 19:00', type: 'kids', title: 'Children' },
        { time: '19:00 - 20:10', type: 'adults', title: 'Adults' },
      ]},
      { day: 'Wednesday', classes: [] },
      { day: 'Thursday', classes: [] },
      { day: 'Friday', classes: [] },
      { day: 'Saturday', classes: [
        { time: '11:00 - 12:00', type: 'kids', title: 'Children' },
        { time: '12:00 - 13:10', type: 'adults', title: 'Adults' },
      ]},
      { day: 'Sunday', classes: [] },
    ]
  },
  {
    id: 'ladywood',
    name: 'Ladywood',
    schedule: [
      { day: 'Monday', classes: [
        { time: '18:00 - 19:00', type: 'kids', title: 'Children' },
        { time: '19:00 - 20:15', type: 'adults', title: 'Adults' },
      ]},
      { day: 'Tuesday', classes: [] },
      { day: 'Wednesday', classes: [] },
      { day: 'Thursday', classes: [
        { time: '18:00 - 19:00', type: 'kids', title: 'Children' },
        { time: '19:00 - 20:15', type: 'adults', title: 'Adults' },
      ]},
      { day: 'Friday', classes: [] },
      { day: 'Saturday', classes: [] },
      { day: 'Sunday', classes: [] },
    ]
  }
];

export default function TimetableSection() {
  const [activeLocation, setActiveLocation] = useState('quinton');
  
  const currentLocation = locations.find(location => location.id === activeLocation) || locations[0];

  return (
    <section id="timetable" className="py-20 bg-black">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Class Timetable
        </h2>
        
        {/* Location selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {locations.map(location => (
              <button
                key={location.id}
                type="button"
                className={`px-6 py-3 text-sm font-medium border ${
                  activeLocation === location.id
                    ? 'bg-red-600 text-white border-red-700'
                    : 'bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-800'
                } focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-white ${
                  location.id === locations[0].id ? 'rounded-l-lg' : ''
                } ${
                  location.id === locations[locations.length - 1].id ? 'rounded-r-lg' : ''
                }`}
                onClick={() => setActiveLocation(location.id)}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Class legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-900 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Children Classes</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-900 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Adult Classes</span>
          </div>
        </div>
        
        {/* Timetable */}
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-7 bg-gray-800">
            {currentLocation.schedule.map(day => (
              <div key={day.day} className="py-4 px-2 text-center font-semibold border-b border-gray-700">
                {day.day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 min-h-[400px]">
            {currentLocation.schedule.map(day => (
              <div key={day.day} className="p-2 border-r border-gray-800 last:border-r-0">
                {day.classes.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-gray-500 text-sm italic">
                    No classes
                  </div>
                ) : (
                  <div className="space-y-3">
                    {day.classes.map((cls, idx) => (
                      <div 
                        key={idx}
                        className={`p-3 rounded-md ${classTypes[cls.type as keyof typeof classTypes].bg} border ${classTypes[cls.type as keyof typeof classTypes].border} ${classTypes[cls.type as keyof typeof classTypes].text}`}
                      >
                        <p className="font-semibold text-sm">{cls.title}</p>
                        <p className="text-xs mt-1">{cls.time}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a
            href="#book-class"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition"
          >
            Book Your Free Trial Class
          </a>
        </div>
      </div>
    </section>
  );
}