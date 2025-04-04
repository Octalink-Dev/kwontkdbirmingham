// components/BenefitsSection.tsx
import { Shield, Brain, Dumbbell, Heart, Focus, Users } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Self-Discipline',
    description: 'Develop strong mental fortitude and self-control through structured training.'
  },
  {
    icon: Brain,
    title: 'Focus & Concentration',
    description: 'Enhance mental clarity and ability to concentrate in all aspects of life.'
  },
  {
    icon: Dumbbell,
    title: 'Physical Strength',
    description: 'Build muscle tone, improve flexibility, and increase overall strength.'
  },
  {
    icon: Heart,
    title: 'Stamina',
    description: 'Boost cardiovascular health and endurance through dynamic workouts.'
  },
  {
    icon: Focus,
    title: 'Confidence',
    description: 'Gain self-confidence through achievement and skill progression.'
  },
  {
    icon: Users,
    title: 'Respect',
    description: 'Learn valuable life lessons about respect, humility, and perseverance.'
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Training Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg hover:bg-gray-800 transition"
            >
              <benefit.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}