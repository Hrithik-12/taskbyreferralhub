'use client';

import { useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

export default function Header() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  // You would typically get this from your auth context or props
  const userEmail = "john.doe@example.com"; // Replace with actual user email

  return (
    <header className="h-16 bg-white border-b shadow-sm">
      <div className="h-full px-8 flex items-center justify-between">
       <Link href='/'> <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1></Link>
        
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <IoNotificationsOutline className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Menu */}
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-sm text-white font-medium">
                  {userEmail.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-700">
                  {userEmail.split('@')[0]}
                </span>
                <span className="text-xs text-gray-500">{userEmail}</span>
              </div>
              <FiChevronDown className="text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border py-1">
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                  Profile Settings
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                  Help & Support
                </button>
                <div className="h-px bg-gray-200 my-1"></div>
                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}