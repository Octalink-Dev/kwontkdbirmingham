// app/page.tsx
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import GrandMasterSection from '@/components/GrandMasterSection';
import LocationsSection from '@/components/LocationSection';
import TimetableSection from '@/components/TimetableSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">KWON TKD</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-red-600 transition">About</a>
            <a href="#programs" className="hover:text-red-600 transition">Programs</a>
            <a href="#grandmaster" className="hover:text-red-600 transition">Grand Master</a>
            <a href="#locations" className="hover:text-red-600 transition">Locations</a>
          </div>
          <a 
            href="https://calendly.com/omidkwontkd/30min"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Book Free Class
          </a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <GrandMasterSection />
        <LocationsSection />
        <TestimonialsSection />
        <TimetableSection />
        <BookingForm />
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">KWON TKD</h3>
              <p>Empowering lives through the art of Taekwondo in Birmingham.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: kwontkdbirmingham@gmail.com</p>
              <p>Phone: 07815160009</p>
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