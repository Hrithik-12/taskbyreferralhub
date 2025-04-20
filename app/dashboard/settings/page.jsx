'use client';

import { useState } from 'react';
import { 
  User, Building2, Bot, Mail, Phone, 
  CreditCard, PieChart, ChevronRight, Eye, EyeOff 
} from 'lucide-react';
import BusinessProfileForm from '../components/Buissnessprofile';
import InProgress from '../components/Inprogress';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
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
    console.log('Updated profile:', formData);
  };

  const tabs = [
    { id: 'profile', label: 'User Profile', icon: <User className="w-4 h-4" /> },
    { id: 'business', label: 'Business Profile', icon: <Building2 className="w-4 h-4" /> },
    { id: 'ai', label: 'AI Settings', icon: <Bot className="w-4 h-4" /> },
    { id: 'communications', label: 'Email & Phone', icon: <Mail className="w-4 h-4" /> },
    { id: 'subscription', label: 'Subscription', icon: <CreditCard className="w-4 h-4" /> },
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Dashboard</span>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-gray-900">Settings</span>
        </div>

        <div className="flex gap-8">
          {/* Tabs Navigation */}
          <div className="w-64 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {activeTab === 'profile' && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">User Profile</h2>
                  
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-medium text-gray-700">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50"
                          placeholder="Enter your email"
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Change */}
                  <div className="space-y-6 pt-6 border-t">
                    <h3 className="text-sm font-medium text-gray-700">Change Password</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            placeholder="Enter current password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            placeholder="Enter new password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'business' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Business Profile</h2>
                {/* Add business profile form fields */}
                <BusinessProfileForm/>
              </div>
            )}

            {/* Add other tab contents similarly */}
            {activeTab === 'ai' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Ai Settings</h2>
                {/* Add business profile form fields */}
                <InProgress/>
              </div>
            )}
             {activeTab === 'communications' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Communications</h2>
                {/* Add business profile form fields */}
                <InProgress/>
              </div>
            )}
             {activeTab === 'subscription' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Subscriptions</h2>
                {/* Add business profile form fields */}
                <InProgress/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}