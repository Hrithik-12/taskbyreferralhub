'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudUpload } from 'lucide-react';
import { Switch } from '@headlessui/react';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    services: '',
    products: '',
    companySize: '',
    city: '',
    state: '',
    zipCode: '',
    description: ''
  });

  const [aiSettings, setAiSettings] = useState({
    tone: '',
    responseStyle: '',
    autoHelp: true,
    userInitiated: true
  });

  const [campaignSettings, setCampaignSettings] = useState({
    title: '',
    promoterSetting: 'all', // all, selected, or invite-only
    rewardType: 'fixed', // fixed or percentage
    rewardValue: '',
    promoterMessage: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(1); // Move to next step
  };

  const steps = [
    'Set Up Business Profile',
    'Sync Your Customer Data',
    'Set Up AI Agent Rules',
    'Set Up First Campaign'
  ];

  const renderStepContent = () => {
    switch(currentStep) {
      case 0:
        return (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Build Your Business Identity</h2>
            <p className="text-sm text-gray-500 mb-6">
              Help us tailor the referral experience by adding key details about your business
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Logo</label>
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors">
                  Choose Image
                </button>
              </div>

              <textarea 
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none" 
                placeholder="Enter business description..." 
                rows="3" 
              />

              <div className="grid grid-cols-2 gap-6">
                <input 
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Enter business name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                  required
                />
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g., robert.fox@myemail.com"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                  required
                />

                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone no."
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                  required
                />
                <select 
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                >
                  <option>Select</option>
                </select>

                <input 
                  type="text"
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  placeholder="Enter services.."
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                />
                <input 
                  type="text"
                  name="products"
                  value={formData.products}
                  onChange={handleInputChange}
                  placeholder="Enter products..."
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                />

                <select 
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                >
                  <option>Company Size</option>
                </select>
                <select 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                >
                  <option>City</option>
                </select>

                <select 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                >
                  <option>State</option>
                </select>
                <input 
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="Enter zip code"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                />
              </div>

              <button 
                type="submit"
                className="px-6 py-2.5 bg-[#3059fe] hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Next
              </button>
            </form>
          </motion.div>
        );
      
      case 1:
        return (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Sync Your Customer Data</h2>
            <p className="text-sm text-gray-500 mb-6">
              Import your existing customer data to jumpstart your referral program
            </p>

            {/* Zapier Button */}
            <div className="flex justify-center mb-4">
              <button className="border-2 border-[#3059fe] text-[#3059fe] px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
                Connect with Zapier
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-8">
              <hr className="flex-grow border-gray-200" />
              <span className="mx-3 text-sm text-gray-500">or</span>
              <hr className="flex-grow border-gray-200" />
            </div>

            {/* CSV Upload */}
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center mb-8 hover:border-[#3059fe] transition-colors">
              <div className="flex justify-center mb-3 text-[#3059fe]">
                <CloudUpload size={40} />
              </div>
              <p className="text-gray-600 text-sm mb-2">Drag and drop your CSV file here</p>
              <p className="text-sm text-gray-400 mb-4">or</p>

              <label className="cursor-pointer inline-block border-2 border-[#3059fe] text-[#3059fe] px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
                Browse Files
                <input 
                  type="file" 
                  accept=".csv" 
                  className="hidden"
                  onChange={(e) => {
                    // Handle file upload
                    console.log(e.target.files[0]);
                  }} 
                />
              </label>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setCurrentStep(0)}
                className="px-6 py-2.5 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setCurrentStep(2)}
                className="px-6 py-2.5 bg-[#3059fe] hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Set Up AI Agent Rules</h2>
            <p className="text-sm text-gray-500 mb-6">
              Configure how your AI agent interacts with customers
            </p>

            {/* Tone of Communication */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone of Communication
              </label>
              <select 
                value={aiSettings.tone}
                onChange={(e) => setAiSettings(prev => ({ ...prev, tone: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
              >
                <option value="">Select</option>
                <option value="friendly">Friendly</option>
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
              </select>
            </div>

            {/* Response Style */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Response Style
              </label>
              <select 
                value={aiSettings.responseStyle}
                onChange={(e) => setAiSettings(prev => ({ ...prev, responseStyle: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
              >
                <option value="">Select</option>
                <option value="concise">Concise</option>
                <option value="detailed">Detailed</option>
                <option value="balanced">Balanced</option>
              </select>
            </div>

            {/* Toggles */}
            <div className="space-y-6 mb-8">
              {/* Auto-offer Help Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-800">Auto-offer help</p>
                  <p className="text-sm text-gray-500">AI suggests help automatically when user lands on a page</p>
                </div>
                <Switch
                  checked={aiSettings.autoHelp}
                  onChange={(value) => setAiSettings(prev => ({ ...prev, autoHelp: value }))}
                  className={`${
                    aiSettings.autoHelp ? 'bg-[#3059fe]' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-2`}
                >
                  <span className="sr-only">Enable auto-help</span>
                  <span
                    className={`${
                      aiSettings.autoHelp ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>

              {/* User-initiated Only Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-800">User-initiated only</p>
                  <p className="text-sm text-gray-500">AI only responds when clicked or messaged</p>
                </div>
                <Switch
                  checked={aiSettings.userInitiated}
                  onChange={(value) => setAiSettings(prev => ({ ...prev, userInitiated: value }))}
                  className={`${
                    aiSettings.userInitiated ? 'bg-[#3059fe]' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-2`}
                >
                  <span className="sr-only">Enable user-initiated only</span>
                  <span
                    className={`${
                      aiSettings.userInitiated ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-2.5 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setCurrentStep(3)}
                className="px-6 py-2.5 bg-[#3059fe] hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div 
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Set Up First Campaign</h2>
            <p className="text-sm text-gray-500 mb-6">
              Configure your referral campaign settings and rewards
            </p>

            <form className="space-y-6">
              {/* Campaign Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Title
                </label>
                <input
                  type="text"
                  value={campaignSettings.title}
                  onChange={(e) => setCampaignSettings(prev => ({
                    ...prev,
                    title: e.target.value
                  }))}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                  placeholder="e.g., Summer Referral Program"
                />
              </div>

              {/* Promoter Setting */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Who can promote?
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['All Users', 'Selected Users', 'Invite Only'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCampaignSettings(prev => ({
                        ...prev,
                        promoterSetting: option.toLowerCase().replace(' ', '-')
                      }))}
                      className={`p-3 border-2 rounded-lg text-sm font-medium transition-colors ${
                        campaignSettings.promoterSetting === option.toLowerCase().replace(' ', '-')
                          ? 'border-[#3059fe] bg-blue-50 text-[#3059fe]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reward Configuration */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Reward Configuration
                </label>
                <div className="flex gap-4">
                  <select
                    value={campaignSettings.rewardType}
                    onChange={(e) => setCampaignSettings(prev => ({
                      ...prev,
                      rewardType: e.target.value
                    }))}
                    className="w-1/3 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                  >
                    <option value="fixed">Fixed Amount</option>
                    <option value="percentage">Percentage</option>
                  </select>
                  <div className="relative w-1/3">
                    <input
                      type="number"
                      value={campaignSettings.rewardValue}
                      onChange={(e) => setCampaignSettings(prev => ({
                        ...prev,
                        rewardValue: e.target.value
                      }))}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                      placeholder="Enter value"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                      {campaignSettings.rewardType === 'percentage' ? '%' : '$'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Promoter Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Promoter Message
                </label>
                <textarea
                  value={campaignSettings.promoterMessage}
                  onChange={(e) => setCampaignSettings(prev => ({
                    ...prev,
                    promoterMessage: e.target.value
                  }))}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
                  placeholder="Enter the default message promoters will share..."
                />
                <p className="mt-2 text-sm text-gray-500">
                  Promoters can customize this message when sharing
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-2.5 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle campaign creation
                    console.log('Campaign settings:', campaignSettings);
                  }}
                  className="px-6 py-2.5 bg-[#3059fe] hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Create Campaign
                </button>
              </div>
            </form>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-8">
        {/* Left Card - Get Started */}
        <div className="w-1/3 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-[#3059fe] font-semibold mb-6">Get Started with ReferralHub</h3>
          <p className="text-sm text-gray-500 mb-8">
            To get started with better referrals & rewards, complete your account setup in a few easy steps.
          </p>
          <ul className="space-y-12">
            {steps.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 relative">
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: idx < currentStep ? 48 : 0 }}
                    className="absolute left-2.5 top-8 w-0.5 bg-[#3059fe] origin-top"
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                )}
                
                <div className="w-5 h-5 border-2 border-[#3059fe] rounded-full flex items-center justify-center relative z-10 bg-white mt-1">
                  {idx <= currentStep && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-2.5 h-2.5 bg-[#3059fe] rounded-full"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <motion.p 
                    className={`text-gray-800 font-medium text-sm mb-1 ${
                      idx === currentStep ? 'text-[#3059fe]' : ''
                    }`}
                    animate={{ 
                      scale: idx === currentStep ? 1.05 : 1,
                      color: idx === currentStep ? '#3059fe' : '#1f2937'
                    }}
                  >
                    {item}
                  </motion.p>
                  <motion.p 
                    className="text-gray-400 text-xs"
                    animate={{ 
                      opacity: [0, 1],
                      y: [10, 0]
                    }}
                    transition={{ delay: 0.1 }}
                  >
                    {idx < currentStep ? (
                      <span className="text-green-500">✓ Completed</span>
                    ) : idx === currentStep ? (
                      <span className="text-[#3059fe]">In Progress</span>
                    ) : (
                      'Not Started'
                    )}
                  </motion.p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card - Dynamic Content */}
        <AnimatePresence mode="wait">
          {renderStepContent()}
        </AnimatePresence>
      </div>
    </div>
  );
}