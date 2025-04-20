import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRobot, FaChartBar, FaBullhorn, FaUsers, FaUserPlus, FaMoneyBillWave, FaCog, FaQuestionCircle } from 'react-icons/fa';
import { LuPanelLeft } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const pathname = usePathname();
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Define tour steps
  const tourSteps = [
    {
      target: 'platform-setup',
      content: 'Start here to set up your referral program',
    },
    {
      target: 'ai-agent',
      content: 'Use AI to automate your referral communications',
    },
    {
      target: 'campaign',
      content: 'Create and manage your referral campaigns',
    },
    {
      target: 'promoters',
      content: 'Manage your promoters and their performance',
    },
    {
      target: 'leads',
      content: 'Track and manage your referral leads',
    },
    {
      target: 'payouts',
      content: 'Handle promoter payments and rewards',
    },
  ];

  // Initialize tour on mount
  useEffect(() => {
    if (!hasInitialized) {
      const hasSeenTour = localStorage.getItem('sidebarTourComplete');
      if (!hasSeenTour) {
        setShowTour(true);
      }
      setHasInitialized(true);
    }
  }, [hasInitialized]);

  const handleNextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      endTour();
    }
  };

  const handleSkipTour = () => {
    endTour();
  };

  const endTour = () => {
    setShowTour(false);
    setCurrentStep(0);
    localStorage.setItem('sidebarTourComplete', 'true');
  };

  // Reset tour (for testing)
  const resetTour = () => {
    localStorage.removeItem('sidebarTourComplete');
    setCurrentStep(0);
    setShowTour(true);
  };

  const mainNavItems = [
    { icon: <LuPanelLeft />, label: "Platform Setup", path: "/dashboard", tourId: 'platform-setup' },
    { icon: <FaRobot />, label: "AI Agent", path: "/dashboard/aiagent", tourId: 'ai-agent' },
    { icon: <FaChartBar />, label: "Dashboard", path: "/dashboard/dashboardview", tourId: 'dashboard' },
    { icon: <FaBullhorn />, label: "Campaign", path: "/dashboard/campaign", tourId: 'campaign' },
    { icon: <FaUsers />, label: "Promoters", path: "/dashboard/promoters", tourId: 'promoters' },
    { icon: <FaUserPlus />, label: "Leads", path: "/dashboard/leads", tourId: 'leads' },
    { icon: <FaMoneyBillWave />, label: "Payouts", path: "/dashboard/payouts", tourId: 'payouts' },
  ];

  const bottomNavItems = [
    { 
      icon: <FaCog />, 
      label: "Settings", 
      path: "/dashboard/settings",
      onClick: () => {
        console.log('Navigating to settings...');
      }
    },
    { 
      icon: <FaQuestionCircle />, 
      label: "Help", 
      path: "/dashboard/help" 
    },
  ];

  return (
    <>
      <AnimatePresence>
        {showTour && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}
      </AnimatePresence>

      <div className="w-64 h-screen bg-white shadow-md p-6 flex flex-col relative z-50">
        {/* Logo section */}
        <div className="flex items-center gap-2 mb-10">
          <LuPanelLeft className="text-3xl text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">ReferralHub</span>
        </div>

        {/* Navigation with tour overlay */}
        <nav className="flex flex-col gap-4 text-gray-700">
          <AnimatePresence mode="wait">
            {mainNavItems.map((item, index) => (
              <motion.div 
                key={item.path} 
                className="relative"
                initial={false}
              >
                <motion.div
                  animate={{
                    scale: currentStep === index && showTour ? 1.05 : 1,
                    boxShadow: currentStep === index && showTour ? "0 0 0 2px rgba(59, 130, 246, 0.5)" : "none",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <SidebarItem 
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    active={pathname === item.path}
                    id={item.tourId}
                    highlighted={currentStep === index && showTour}
                  />
                </motion.div>

                {showTour && currentStep === index && (
                  <TourTooltip
                    content={tourSteps[currentStep].content}
                    onNext={handleNextStep}
                    onSkip={handleSkipTour}
                    isLastStep={currentStep === tourSteps.length - 1}
                    stepNumber={currentStep + 1}
                    totalSteps={tourSteps.length}
                    tourSteps={tourSteps}
                    currentStep={currentStep}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>

        {/* Bottom navigation with reset tour button (for testing) */}
        <div className="mt-auto flex flex-col gap-4">
          {bottomNavItems.map((item) => (
            <SidebarItem 
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              active={pathname === item.path}
              onClick={item.onClick}
            />
          ))}
          {/* Add this button temporarily for testing */}
          <button
            onClick={resetTour}
            className="text-sm text-gray-500 hover:text-gray-700 mt-4"
          >
            Reset Tour
          </button>
        </div>
      </div>
    </>
  );
};

const TourTooltip = ({ content, onNext, onSkip, isLastStep, stepNumber, totalSteps, tourSteps, currentStep }) => {
  // Get the current step's icon based on step number
  const getStepIcon = (step) => {
    const icons = {
      1: <LuPanelLeft className="w-5 h-5 text-blue-600" />,
      2: <FaRobot className="w-5 h-5 text-blue-600" />,
      3: <FaBullhorn className="w-5 h-5 text-blue-600" />,
      4: <FaUsers className="w-5 h-5 text-blue-600" />,
      5: <FaUserPlus className="w-5 h-5 text-blue-600" />,
      6: <FaMoneyBillWave className="w-5 h-5 text-blue-600" />
    };
    return icons[step] || <LuPanelLeft className="w-5 h-5 text-blue-600" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      className="absolute left-full ml-20 top-1/2 -translate-y-1/2 z-50" // Changed ml-14 to ml-20
    >
      {/* Connecting line with increased width */}
      <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2">
        <div className="w-14 h-0.5 bg-blue-500" /> {/* Changed w-8 to w-14 */}
      </div>

      {/* Main tooltip content */}
      <div className="bg-white rounded-xl shadow-xl p-6 w-80 border-2 border-blue-500">
        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            {getStepIcon(stepNumber)}
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {tourSteps[currentStep]?.target.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </div>
        </div>

        {/* Rest of the tooltip content remains the same */}
        <p className="text-sm text-gray-700 mb-6">
          {content}
        </p>

        <div className="text-xs text-gray-500 mb-4">
          Step {stepNumber} of {totalSteps}
        </div>

        <div className="h-1 w-full bg-gray-100 rounded-full mb-6">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(stepNumber / totalSteps) * 100}%` }}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={onSkip}
            className="text-sm text-gray-500 hover:underline"
          >
            Skip
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            {isLastStep ? 'Finish' : `Next (${stepNumber}/${totalSteps})`}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SidebarItem = ({ icon, label, path, active, onClick, id, highlighted }) => (
  <Link href={path} onClick={onClick}>
    <div 
      id={id}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${
        active ? 'bg-blue-100 text-blue-600 font-semibold' : 
        highlighted ? 'bg-blue-50 text-blue-600' :
        'hover:bg-gray-100'
      } ${
        highlighted ? 'ring-2 ring-blue-500 ring-offset-2 relative z-50' : ''
      }`}
    >
      <span className={`text-lg ${highlighted ? 'animate-pulse' : ''}`}>{icon}</span>
      <span>{label}</span>
    </div>
  </Link>
);

export default Sidebar;