import React, { useState, useEffect } from "react";
// Import the SOLID icons for a bolder, more modern look
import {
  UserIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

/**
 * AnimatedCounter Component
 * A reusable component to animate a number counting up from 0
 * to a target value over a specified duration.
 */
const AnimatedCounter = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const newCount = Math.floor(progress * targetValue);
      setCount(newCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [targetValue, duration]);

  return <span className="text-4xl font-bold text-gray-900">{count}</span>;
};

/**
 * StatItem Component
 * An internal component for a single statistic, now with
 * color props and hover effects.
 */
const StatItem = ({
  icon: Icon,
  targetValue,
  suffix,
  label,
  bgColorClass,
  iconColorClass,
}) => (
  // 'group' allows us to create hover effects on child elements
  <div className="group flex flex-col items-center gap-y-3 text-center p-4">
    <div
      className={`
        flex h-16 w-16 items-center justify-center rounded-full 
        ${bgColorClass} transform transition-all duration-300
        group-hover:scale-110 group-hover:shadow-lg
      `}
    >
      <Icon
        className={`
          h-9 w-9 ${iconColorClass} 
          transform transition-transform duration-300 group-hover:scale-105
        `}
      />
    </div>
    <p className="text-4xl font-bold text-gray-900">
      <AnimatedCounter targetValue={targetValue} duration={2000} />
      {suffix}
    </p>
    <p className="text-base text-gray-600">{label}</p>
  </div>
);

/**
 * Served Component
 * Displays key statistics in an attractive, animated card.
 */
function Served() {
  return (
    // Section wrapper with a light background and padding
    <div className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Title and Subtitle for Context */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Track Record
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A testament to our dedication, expertise, and the results we deliver.
          </p>
        </div>
        
        {/* Main Card Container - Changed to white for a cleaner look */}
        <div className="w-full rounded-2xl bg-white p-8 shadow-2xl">
          {/* Grid layout with dividers on medium screens and up.
            The dividers add a professional separation.
          */}
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:divide-x md:divide-gray-200">
            
            <StatItem
              icon={UserIcon}
              targetValue={500}
              suffix="+"
              label="Happy Customers"
              bgColorClass="bg-blue-100"
              iconColorClass="text-blue-600"
            />
            
            <StatItem
              icon={ClipboardDocumentCheckIcon}
              targetValue={500}
              suffix="+"
              label="Projects Delivered"
              bgColorClass="bg-green-100"
              iconColorClass="text-green-600"
            />
            
            <StatItem
              icon={UserGroupIcon}
              targetValue={500}
              suffix="+"
              label="Students"
              bgColorClass="bg-purple-100"
              iconColorClass="text-purple-600"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Served;