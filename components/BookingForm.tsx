// components/BookingForm.tsx
'use client';

import { useEffect } from 'react';

export default function BookingForm() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book-class" className="py-20 bg-black">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Book Your Free Trial Class
        </h2>
        
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-6 md:p-4">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/omidkwontkd/tkd-classes?hide_event_type_details=1&hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=e11d48&secondary_color=4f4f4f"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  );
}