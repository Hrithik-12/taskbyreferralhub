import React, { useState } from 'react';

const AddCustomerModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('zapier');

  const tabs = [
    { id: 'manual', label: 'Add Manually' },
    { id: 'csv', label: 'Upload CSV File' },
    { id: 'zapier', label: 'Sync with Zapier' }
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[500px] p-6 relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-lg font-medium mb-4">Choose How You Want to Add Customers</h2>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'text-indigo-600 bg-indigo-100 rounded-t-md'
                  : 'text-gray-500 hover:text-indigo-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="border border-dashed border-gray-300 p-6 rounded-md text-center">
          {activeTab === 'zapier' && (
            <>
              <p className="text-sm text-gray-600 mb-4">
                Automatically sync your customer data from your CRM using Zapier
              </p>
              <button className="bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-2 rounded-md font-medium shadow-sm hover:from-indigo-600">
                Connect with Zapier
              </button>
            </>
          )}

          {activeTab === 'csv' && (
            <>
              <p className="text-sm text-gray-600 mb-4">Upload a .CSV file to import your customers</p>
              <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-medium">
                Upload CSV
              </button>
            </>
          )}

          {activeTab === 'manual' && (
            <>
              <p className="text-sm text-gray-600 mb-4">Enter customer details manually</p>
              <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-medium">
                Add Customer
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;