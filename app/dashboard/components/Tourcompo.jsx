import React, { useState, useEffect, useRef } from 'react';

// The main sidebar component with integrated tour functionality
export default function Sidebar({ items }) {
  // Check if it's the user's first visit
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [activeTourStep, setActiveTourStep] = useState(0);
  const [showTour, setShowTour] = useState(false);
  const sidebarRefs = useRef([]);

  // Set up refs for each sidebar item
  useEffect(() => {
    sidebarRefs.current = sidebarRefs.current.slice(0, items.length);
  }, [items]);

  // Check localStorage on component mount
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedSidebar');
    if (!hasVisitedBefore) {
      setIsFirstVisit(true);
      setShowTour(true);
      localStorage.setItem('hasVisitedSidebar', 'true');
    }
  }, []);

  // Handle tour navigation
  const nextStep = () => {
    if (activeTourStep < items.length - 1) {
      setActiveTourStep(activeTourStep + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (activeTourStep > 0) {
      setActiveTourStep(activeTourStep - 1);
    }
  };

  const endTour = () => {
    setShowTour(false);
  };

  return (
    <div className="relative">
      {/* Sidebar content */}
      <div className="w-64 bg-gray-800 h-screen text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <ul>
            {items.map((item, index) => (
              <li 
                key={index}
                ref={el => sidebarRefs.current[index] = el}
                className={`py-3 px-2 mb-2 rounded cursor-pointer hover:bg-gray-700 transition-all
                  ${showTour && index === activeTourStep ? 'bg-blue-600 relative z-20' : ''}`}
              >
                <a href={item.link} className="flex items-center">
                  {item.icon && <span className="mr-3">{item.icon}</span>}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Custom tour overlay */}
      {showTour && (
        <>
          {/* Semi-transparent overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={endTour}
          />

          {/* Tour tooltip positioned next to active sidebar item */}
          <div 
            className="absolute bg-white text-gray-800 p-4 rounded-lg shadow-lg z-30"
            style={{
              left: sidebarRefs.current[activeTourStep]?.getBoundingClientRect().width + 80,
              top: sidebarRefs.current[activeTourStep]?.getBoundingClientRect().top,
              width: '250px'
            }}
          >
            <h4 className="font-bold mb-2">{items[activeTourStep].name}</h4>
            <p className="text-sm mb-4">{items[activeTourStep].description || `This is the ${items[activeTourStep].name} section of your dashboard.`}</p>
            
            <div className="flex justify-between items-center">
              <button
                onClick={endTour}
                className="text-gray-500 text-sm hover:text-gray-700"
              >
                Skip tour
              </button>
              <div className="flex items-center space-x-2">
                {activeTourStep > 0 && (
                  <button
                    onClick={prevStep}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={nextStep}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {activeTourStep === items.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}