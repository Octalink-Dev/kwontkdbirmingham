// components/LocationsSection.tsx
import Image from 'next/image';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: "Birmingham City Centre",
    address: "123 Main Street, Birmingham, B1 1AB",
    phone: "0121 234 5671",
    hours: "Mon-Fri: 6am-9pm\nSat-Sun: 8am-6pm",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    name: "Edgbaston",
    address: "45 Church Road, Edgbaston, Birmingham, B15 3XT",
    phone: "0121 234 5672",
    hours: "Mon-Fri: 7am-9pm\nSat-Sun: 8am-5pm",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    name: "Solihull",
    address: "789 High Street, Solihull, B91 3DE",
    phone: "0121 234 5673",
    hours: "Mon-Fri: 6am-10pm\nSat-Sun: 8am-6pm",
    imageUrl: "/api/placeholder/600/400"
  }
];

export default function LocationsSection() {
  return (
    <section id="locations" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Locations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={location.imageUrl}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                
                <div className="space-y-4 text-gray-300">
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
                
                <div className="mt-6">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}