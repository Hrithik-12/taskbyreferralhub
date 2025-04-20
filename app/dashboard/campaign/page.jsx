'use client';

import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSms, FaEnvelope } from 'react-icons/fa';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import InProgress from '../components/Inprogress';

// Move campaigns data outside component
const campaigns = [
  {
    title: "Summer Referral Program",
    date: "5/31/2024 - 8/30/2024",
    referrals: 245,
    conversion: "32%",
    roi: "287%",
    status: "Active",
    note: "Increase reward by 10% to boost conversion rates during peak season",
    isActive: true,
  },
  {
    title: "Early Bird Special",
    date: "8/20/2024 - 9/19/2024",
    referrals: 300,
    conversion: "40%",
    roi: "320%",
    status: "Inactive",
    note: "Extend your campaign! Strong engagement suggests higher conversions with more time.",
    isActive: false,
  },
];

// Separate CampaignCard component
const CampaignCard = ({ campaign }) => {
  return (
    <div
      className={`border rounded-xl p-6 w-full backdrop-blur-sm bg-white/50 hover:bg-white 
      transition-all duration-300 shadow-sm hover:shadow-md relative group
      ${!campaign.isActive ? "border-blue-400/50" : "border-gray-200"}`}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg text-gray-800">{campaign.title}</h2>
        <span
          className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors
            ${campaign.isActive 
              ? "bg-blue-50 text-blue-600" 
              : "bg-gray-50 text-gray-600"}`}
        >
          {campaign.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-4">{campaign.date}</p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="p-3 rounded-lg bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">Referrals</p>
          <p className="font-semibold text-gray-800">{campaign.referrals}</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">Conversion</p>
          <p className="font-semibold text-gray-800">{campaign.conversion}</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">ROI</p>
          <p className="font-semibold text-gray-800">{campaign.roi}</p>
        </div>
      </div>
      <div className="bg-blue-50/50 text-blue-800 text-sm p-4 rounded-lg mb-4 border border-blue-100/50  ">
        <span role="img" aria-label="idea" className="mr-2">💡</span>
        {campaign.note}
      </div>
      <div className="flex  justify-between absolute bottom-4 w-[calc(100%-3rem)]  ">
        <button 
          className="p-2 rounded-md hover:bg-gray-50 text-gray-600 hover:text-gray-700 transition-colors"
          title="View Campaign"
        >
          👁️
        </button>
        <button 
          className="p-2 rounded-md hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors"
          title="Delete Campaign"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

// Separate LeadSettings component
const LeadSettings = () => {
  const followUps = [
    { type: 'SMS', icon: <FaSms className="text-green-600" />, label: 'SMS' },
    { type: 'WAIT', time: '5 days', icon: <BiTime className="text-blue-500" />, label: 'Wait - 5 days' },
    { type: 'EMAIL', icon: <FaEnvelope className="text-green-700" />, label: 'Email' },
    { type: 'WAIT', time: '2 days', icon: <BiTime className="text-blue-500" />, label: 'Wait - 2 days' },
    { type: 'SMS', icon: <FaSms className="text-green-600" />, label: 'SMS' },
    { type: 'WAIT', time: '3 days', icon: <BiTime className="text-blue-500" />, label: 'Wait - 3 days' },
    { type: 'SMS', icon: <FaSms className="text-green-600" />, label: 'SMS' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md">Promoter Settings</button>
        <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-medium">Leads Settings</button>
      </div>

      {/* Campaign Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
        <input
          type="text"
          defaultValue="Summer Referral Special"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Leads Settings Section */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
        <h3 className="text-md font-semibold text-gray-800 mb-4">Leads Settings</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {/* Reward Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reward Type<span className="text-red-500">*</span></label>
            <button className="bg-indigo-100 text-indigo-700 font-medium px-4 py-2 rounded-lg w-full">
              Discount
            </button>
          </div>

          {/* Reward Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reward Value<span className="text-red-500">*</span></label>
            <input
              type="text"
              defaultValue="20%"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Referred Message */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Referred Message<span className="text-red-500">*</span></label>
          <textarea
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            defaultValue="You’ve been invited! Sign up now and get 15% off your first order"
            rows={3}
          />
        </div>

        {/* Form Fields */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Form Fields<span className="text-red-500">*</span></label>
          <div className="flex flex-wrap gap-4">
            {['Full Name', 'Email Address', 'Phone Number', 'Agree to Terms & Conditions & Opt-in'].map((field, idx) => (
              <label key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                <input type="checkbox" defaultChecked className="form-checkbox rounded text-indigo-600" />
                <span>{field}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Follow-Up Strategy */}
        <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-4">Follow-Up Strategy<span className="text-red-500">*</span></label>
          <div className="flex flex-col space-y-4">
            {followUps.map((step, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  {step.icon}
                  <span className="text-sm font-medium text-gray-700">{step.label}</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-indigo-500 hover:text-indigo-700">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function CampaignDashboard() {
  const [activeTab, setActiveTab] = useState('campaigns');

  const renderContent = () => {
    switch (activeTab) {
      case 'past-promoters':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campaigns.map((campaign, index) => (
              <CampaignCard key={index} campaign={campaign} />
            ))}
          </div>
        );
      
      case 'new-promoters':
        return (
          <motion.div
            key="new-promoters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LeadSettings />
          </motion.div>
        );
      
      case 'new-leads':
        return (
          <motion.div
            key="new-leads"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
           <InProgress/>
          </motion.div>
        );
      
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campaigns.map((campaign, index) => (
              <CampaignCard key={index} campaign={campaign} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-8">
      <div className="flex flex-col space-y-6 max-w-7xl mx-auto">
        {/* Header with tabs and search */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {['past-promoters', 'new-promoters', 'new-leads'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600'
                } px-5 py-2.5 rounded-lg hover:shadow transition-all duration-200 ${
                  tab === 'past-promoters' ? 'font-medium' : ''
                }`}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-300 
                  focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
              />
            </div>
            <button className="p-2.5 rounded-lg hover:bg-white text-gray-600 hover:shadow transition-all duration-200">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
}
