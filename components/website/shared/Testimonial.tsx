"use client";

import React from 'react';
import { useState } from 'react';
import Image from 'next/image'; // Correct import for Next.js Image component
import user1 from '@/public/assets/img/user4.jpg'; // Adjust import path for your images

const testimonials = [
  {
    id: 1,
    content:
      'Konnect is a social media web app with only one objective: to help connect people around the world with more features than ever.',
    author: 'Sara Glam',
  },
  {
    id: 2,
    content:
      'Another testimonial content goes here. Replace this with your own content.',
    author: 'John Doe',
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
              <Image
                src={user1}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
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

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-3 text-white p-2 rounded-full bg-slate-600"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-3 text-white p-2 rounded-full bg-slate-600"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Testimonial;
