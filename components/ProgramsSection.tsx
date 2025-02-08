// components/ProgramsSection.tsx
import Image from 'next/image';

const programs = [
  {
    title: "Kids Classes (Ages 5-12)",
    description: "Build confidence, discipline, and physical skills in a fun, safe environment.",
    price: "£49.99",
    features: [
      "Age-appropriate curriculum",
      "Character development focus",
      "Anti-bullying techniques",
      "2 classes per week"
    ]
  },
  {
    title: "Adult Classes (13+)",
    description: "Challenge yourself with traditional Taekwondo training and modern fitness methods.",
    price: "£59.99",
    features: [
      "Technical sparring",
      "Forms training",
      "Strength & conditioning",
      "Unlimited classes"
    ]
  },
  {
    title: "Family Program",
    description: "Train together, grow together. Special rates for families.",
    price: "£129.99",
    features: [
      "Up to 4 family members",
      "Flexible scheduling",
      "Shared experience",
      "Community events"
    ]
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                <p className="text-3xl font-bold text-red-600 mb-4">
                  {program.price}
                  <span className="text-sm text-gray-400">/month</span>
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-red-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book-class"
                  className="block text-center bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}