import React from 'react';
// We use ArrowPathIcon for the circular arrows and ArrowRightIcon for the link
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export function ServiceCard({title}) {
  return (
    // Card container
    <div className="max-w-[700px] rounded-2xl bg-[#F2F3F5] p-8 shadow-xl shadow-gray-900/10">
      
      {/* 1. Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
        <ArrowPathIcon className="h-9 w-9 text-white" strokeWidth={2} />
      </div>

      {/* 2. Title */}
      <h2 className="mt-6 text-3xl font-bold text-gray-900">
        {title}
      </h2>

      {/* 3. Description */}
      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        We design and develop custom, SEO-optimized websites using modern stacks
        like React and Next.js — built to convert and scale for any business or
        e-commerce platform.
      </p>

      {/* 4. "Learn More" Link */}
      <a
        href="#"
        className="group mt-8 inline-flex items-center text-lg font-semibold text-gray-900 transition-colors hover:text-blue-600"
      >
        {/* Link's icon circle */}
        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors group-hover:border-blue-600">
          <ArrowRightIcon className="h-5 w-5" />
          {/* Note: The icon color is inherited from the parent <a> tag */}
        </div>
        <span>Learn More</span>
      </a>
      
    </div>
  );
}