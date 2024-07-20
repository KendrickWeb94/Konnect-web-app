"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Correct import for Next.js Image component
import user1 from '@/public/assets/img/user4.jpg'; // Adjust import path for your images
import user3 from '@/public/assets/users/Ellipse 2.png'; // Adjust import path for your images
import user4 from '@/public/assets/users/Ellipse-4.png'; // Adjust import path for your images
import user5 from '@/public/assets/users/Ellipse-5.png'; // Adjust import path for your images
import user6 from '@/public/assets/users/Ellipse 12.png'; // Adjust import path for your images
import { StaticImageData } from 'next/image';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  image?: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      'I love how Konnect connects me with people around the world effortlessly. It’s user-friendly and has all the features I need!',
    author: 'Alice Johnson',
    image: user1,
  },
  {
    id: 2,
    content:
      'Konnect has revolutionized my social media experience. It’s intuitive, secure, and the design is sleek!',
    author: 'Michael Smith',
    image: user3,
  },
  {
    id: 3,
    content:
    'Using Konnect is a breeze! It’s so convenient to keep up with friends and share moments in real-time.',
    author: 'Jessica Brown',
    // No image provided for Jessica Brown in your example
    image: user6,
  },
  {
    id: 4,
    content:
      'I’ve tried many social apps, but Konnect stands out with its engaging community and privacy features. Highly recommended!',
    author: 'David Wilson',
  },
  {
    id: 5,
    content:
      'Konnect has become my go-to platform for networking professionally. It’s perfect for connecting with like-minded individuals.',
    author: 'Sarah Adams',
    image: user4,
  },
  {
    id: 6,
    content:
      'The best thing about Konnect is its seamless integration across devices. Whether I’m on my phone or laptop, the experience is consistent and smooth.',
    author: 'Emily Taylor',
    image: user5,
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 40000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <div className="p-3 custom-slider-child rounded-md bg-slate-600">
          <div className="max-w-md p-2 h-auto">
            <p className="font-medium text-sm">
              {testimonials[currentSlide].content}
            </p>
            <div className="flex mt-4 items-center justify-between gap-6">
              {testimonials[currentSlide].image ? (
                <Image
                  src={testimonials[currentSlide].image}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-400"></div>
              )}
              <h2>{testimonials[currentSlide].author}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
