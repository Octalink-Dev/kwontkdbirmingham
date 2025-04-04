// components/CommunitySection.tsx
import Image from 'next/image';

const newsItems = [
  {
    title: "Student Achievement: Black Belt Ceremony",
    date: "January 15, 2024",
    description: "Congratulations to our newest black belt recipients! After years of dedication...",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    title: "Birmingham Championship Success",
    date: "February 1, 2024",
    description: "KWON TKD students brought home 12 medals from the regional championships...",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    title: "New Children's Program Launch",
    date: "February 20, 2024",
    description: "Introducing our enhanced children's program focusing on character development...",
    imageUrl: "/api/placeholder/600/400"
  }
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Community News
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-red-600 text-sm mb-2">{item.date}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                <a href="#" className="inline-block mt-4 text-red-600 hover:text-red-500">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
}