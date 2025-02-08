// components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/api/placeholder/1920/1080"
          alt="Taekwondo training"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            LEARN TAEKWONDO<br />
            <span className="text-red-600">MASTER YOUR POTENTIAL</span>
          </h1>
          <p className="text-xl mb-8">
            Join Birmingham's premier Taekwondo academy and discover the path to physical and mental excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#book-class"
              className="bg-red-600 text-white px-8 py-4 rounded text-center hover:bg-red-700 transition"
            >
              Start Your Journey
            </a>
            <p className="text-sm mt-2">Starting at £49.99/month</p>
          </div>
        </div>
      </div>
    </section>
  );
}