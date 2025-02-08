// app/page.tsx
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import BenefitsSection from '@/components/Benefits';
import CommunitySection from '@/components/CommunitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationsSection from '@/components/LocationSection';
import InstagramFeed from '@/components/InstagramFeed';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">KWON TKD</div>
          <div className="hidden md:flex space-x-6">
            <a href="#programs" className="hover:text-red-600 transition">Programs</a>
            <a href="#benefits" className="hover:text-red-600 transition">Benefits</a>
            <a href="#grandmaster" className="hover:text-red-600 transition">Grand Master</a>
            <a href="#locations" className="hover:text-red-600 transition">Locations</a>
          </div>
          <a 
            href="#book-class"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Book Free Class
          </a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <ProgramsSection />
        <BenefitsSection />
        <CommunitySection />
        <TestimonialsSection />
        <LocationsSection />
        <InstagramFeed />
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">KWON TKD</h3>
              <p>Empowering lives through the art of Taekwondo in Birmingham.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: info@kwontkd.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-600">Instagram</a>
                <a href="#" className="hover:text-red-600">Facebook</a>
                <a href="#" className="hover:text-red-600">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}