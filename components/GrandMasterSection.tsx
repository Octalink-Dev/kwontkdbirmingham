// components/GrandMasterSection.tsx
import Image from 'next/image';

export default function GrandMasterSection() {
  return (
    <section id="grandmaster" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/classes/MG4.png"
              alt="Grand Master"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Master Ali Abdoli
              <span className="block text-red-600 text-xl mt-2">8th Dan Black Belt</span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
              One of the UK’s most experienced Olympic-style Taekwondo instructors and a true pioneer of the art in Birmingham, our Master is the Founder of KWON TKD and holds the prestigious rank of 8th Dan black belt.
               A former member of the Iranian National Taekwondo Team and a decorated national and international champion, he brings decades of elite-level training and experience to every class.
               . He is currently teaching at the University of Birmingham and is the founder of the Birmingham City University Taekwondo Club, which has grown to become one of the university’s most successful sports clubs. Under his leadership,
               KWON TKD has become one of the leading Olympic-style Taekwondo clubs in the UK,
                proudly affiliated with the British Taekwondo Council, recognised by the World Taekwondo Headquarters (Kukkiwon),
                 and actively collaborating with universities across the country to inspire and train the next generation of martial artists.              </p>
              
              <p>
              After achieving numerous titles worldwide
              , he established KWON TKD in 2006 to share his passion and knowledge with the Birmingham community.
              </p>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>World Taekwondo Federation 8th Dan</li>
                  <li>Former National Team Coach</li>
                  <li>International Referee</li>
                  <li>Multiple International Championship Titles</li>
                  <li>26+ Years Teaching Experience</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Philosophy</h3>
                <blockquote className="border-l-4 border-red-600 pl-4 italic">
                &quot;Taekwondo is not just about physical training; 
                it&apos;s about developing character, discipline, and respect that will serve you throughout your life.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}