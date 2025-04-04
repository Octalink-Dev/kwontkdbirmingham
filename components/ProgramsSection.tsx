// components/ProgramsSection.tsx
import Image from 'next/image';

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Classes</h2>
        
        {/* Kids Class */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/images/classes/MG11.png"
              alt="Kids Taekwondo Class"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
              className="object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Kids Classes (Ages 5-12)</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                &quot;Our kids&apos; program focuses on developing fundamental motor skills,
                discipline, and confidence through the art of Taekwondo.
                Each class is structured to be both fun and educational,
                helping children build physical skills while learning valuable life lessons.&quot;
              </p>
              <p>
                What to expect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Age-appropriate curriculum</li>
                <li>Focus on discipline and respect</li>
                <li>Anti-bullying techniques</li>
                <li>Physical coordination development</li>
                <li>Fun and engaging environment</li>
              </ul>
              <p className="text-lg font-semibold mt-6">
                First class is free - come and try!
              </p>
              <div className="mt-8">
                <a
                  href="#book-class"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition"
                >
                  Book Free Trial Class
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Adult Class */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">Adult Classes (13+)</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Our adult program combines traditional Taekwondo training with modern fitness
                methods. Whether your goal is fitness, self-defense, or competition, our
                structured curriculum will help you achieve your potential.
              </p>
              <p>
                What to expect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Technical sparring training</li>
                <li>Poomsae (forms) practice</li>
                <li>Strength and conditioning</li>
                <li>Self-defense applications</li>
                <li>Competition preparation (optional)</li>
              </ul>
              <p className="text-lg font-semibold mt-6">
                First class is free - come and try!
              </p>
              <div className="mt-8">
                <a
                  href="#book-class"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition"
                >
                  Book Free Trial Class
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg order-1 md:order-2">
            <Image
              src="/images/classes/MG10.png"
              alt="Adult Taekwondo Class"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
              className="object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}