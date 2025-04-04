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
              Grand Master Kim
              <span className="block text-red-600 text-xl mt-2">8th Dan Black Belt</span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                With over 40 years of experience in Taekwondo, Grand Master Kim has dedicated 
                his life to preserving and teaching the traditional values of Taekwondo while 
                embracing modern training methods.
              </p>
              
              <p>
                After achieving numerous national and international championships, he established 
                KWON TKD to share his knowledge and passion with the Birmingham community.
              </p>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>World Taekwondo Federation 8th Dan</li>
                  <li>Former National Team Coach</li>
                  <li>International Referee</li>
                  <li>Multiple International Championship Titles</li>
                  <li>40+ Years Teaching Experience</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Philosophy</h3>
                <blockquote className="border-l-4 border-red-600 pl-4 italic">
                  "Taekwondo is not just about physical training; it's about developing 
                  character, discipline, and respect that will serve you throughout your life."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}