import React from "react";
// Import the specific icons we need (outline version)
import {
  UserIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

// A small internal component to keep the code DRY (Don't Repeat Yourself)
const StatItem = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center gap-y-3 text-center">
    {/* Icon in a colored circle */}
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
      <Icon className="h-9 w-9 text-blue-600" />
    </div>
    {/* Statistic Number */}
    <p className="text-4xl font-bold text-gray-900">{value}</p>
    {/* Statistic Label */}
    <p className="text-base text-gray-500">{label}</p>
  </div>
);

function Served() {
  return (
    // Wrapper to center the card on the page for a nice preview
    <div className="flex w-full items-center justify-center p-10 mt-15">
      
      {/* Main Card Container */}
      <div className="w-full max-w-3xl rounded-2xl bg-[#F2F3F5] p-8 shadow-xl shadow-gray-900/10">
        
        {/* Grid layout for the three stats */}
        {/* Stacks on mobile (grid-cols-1) and goes to 3 columns on medium screens (md:grid-cols-3) */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3">
          
          <StatItem
            icon={UserIcon}
            value="500+"
            label="Happy Customers"
          />
          
          <StatItem
            icon={ClipboardDocumentCheckIcon}
            value="500+"
            label="Projects Delivered"
          />
          
          <StatItem
            icon={UserGroupIcon} // Using UserGroupIcon for "Students"
            value="500+"
            label="Students"
          />

        </div>
      </div>
    </div>
  );
}

export default Served;