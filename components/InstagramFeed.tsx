// components/InstagramFeed.tsx
import Image from 'next/image';
import { Instagram, Heart } from 'lucide-react';

const instagramPosts = [
  {
    imageUrl: "/api/placeholder/600/600",
    likes: 124,
    caption: "Another successful grading day! Proud of our students' progress 🥋"
  },
  {
    imageUrl: "/api/placeholder/600/600",
    likes: 98,
    caption: "Morning training session in full swing! 💪"
  },
  {
    imageUrl: "/api/placeholder/600/600",
    likes: 156,
    caption: "Congratulations to our new black belts! 🎉"
  },
  {
    imageUrl: "/api/placeholder/600/600",
    likes: 132,
    caption: "Kids class learning patterns today 🥋"
  },
  {
    imageUrl: "/api/placeholder/600/600",
    likes: 145,
    caption: "Competition team training 🏆"
  },
  {
    imageUrl: "/api/placeholder/600/600",
    likes: 167,
    caption: "Family class fun! 👨‍👩‍👧‍👦"
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Instagram className="w-8 h-8 text-red-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Follow Us on Instagram
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={post.imageUrl}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-red-600 fill-current" />
                  <span className="text-white font-bold">{post.likes}</span>
                </div>
                <p className="text-white text-center px-4 text-sm">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/kwontkd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded hover:from-purple-700 hover:to-pink-700 transition"
          >
            <Instagram className="w-5 h-5" />
            Follow @kwontkd
          </a>
        </div>
      </div>
    </section>
  );
}