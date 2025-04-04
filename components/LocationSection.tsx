// components/LocationsSection.tsx
import { MapPin, Clock, Phone, Home } from 'lucide-react';

const locations = [
  {
    name: "Quinton",
    address: "Dwellings Ln, Quinton, Birmingham B32 1RJ",
    phone: "0121 234 5671",
    hours: "Mon-Fri: 6am-9pm\nSat-Sun: 8am-6pm",
  },
  {
    name: "Ladywood",
    address: "Icknield Square, Birmingham, B16 0PP",
    phone: "0121 234 5672",
    hours: "Mon-Fri: 7am-9pm\nSat-Sun: 8am-5pm",
  }
];

export default function LocationsSection() {
  return (
    <section id="locations" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Locations
        </h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 shadow-lg hover:shadow-red-900/20 transition duration-300 p-6"
            >
              <div className="flex items-center mb-6">
                <Home className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold">{location.name}</h3>
              </div>
               
              <div className="space-y-6 text-gray-300">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <p>{location.address}</p>
                </div>
                 
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="whitespace-pre-line">{location.hours}</p>
                </div>
                 
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  <p>{location.phone}</p>
                </div>
              </div>
               
              <div className="mt-8 flex justify-between">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
                >
                  Get Directions
                </a>
                <a
                  href="#timetable"
                  className="inline-block border border-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
                >
                  View Timetable
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 max-w-2xl mx-auto">
            All our locations offer dedicated changing areas, spectator seating, and access to professional-grade Taekwondo equipment. Each center is staffed by certified instructors with extensive experience.
          </p>
        </div>
      </div>
    </section>
  );
}