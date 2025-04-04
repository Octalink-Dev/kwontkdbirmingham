// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="/images/hero/poster.jpg"
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="max-w-3xl ml-0 sm:ml-4 lg:ml-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            LEARN TAEKWONDO<br />
            <span className="text-red-600">MASTER YOUR</span><br />
            <span className="text-red-600">POTENTIAL</span>
          </h1>
          <p className="text-xl mb-12 max-w-2xl">
          &quot;Join Birmingham&apos;s premier Taekwondo academy and discover the path to physical and mental excellence.&quot;
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#book-class"
              className="bg-red-600 text-white px-8 py-4 rounded text-center hover:bg-red-700 transition w-fit"
            >
              Start Your Journey
            </a>
            <p className="text-sm mt-2 sm:mt-4">first session is free</p>
          </div>
        </div>
      </div>
    </section>
  );
}