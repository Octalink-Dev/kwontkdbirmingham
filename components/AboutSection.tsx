// components/AboutSection.tsx
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Club</h2>
          
          <div className="text-gray-200 space-y-6 text-lg leading-relaxed mb-16">
            <p>
              KWON TKD has been active from 2006 and we are the pioneer of Olympic Style 
              Taekwondo Clubs in Birmingham. KWON TKD Club is affiliated by British Taekwondo 
              Council and is working with variety of universities across the UK. We are also 
              recognised by World Taekwondo Headquarter.
            </p>
          </div>

          {/* Affiliations & Recognitions */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-center">Our Affiliations</h3>
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
              <div className="relative w-40 h-24">
                <Image
                  src="/images/affiliations/wtf-logo.png"
                  alt="World Taekwondo Federation"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-40 h-24">
                <Image
                  src="/images/affiliations/bcu-logo.png"
                  alt="Birmingham City University"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-40 h-24">
                <Image
                  src="/images/affiliations/uob-logo.jpg"
                  alt="University of Birmingham"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}