'use client';
import { useState } from 'react';
import { Eye, Filter, Bell } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import PayoutSettings from '../components/Payoutcompo';

export default function PayoutManagement() {
  const [activeTab, setActiveTab] = useState('All Payouts');
  const [payouts] = useState([
    { id: '#P-1048', promoter: 'Emery Dokidis', points: '500 pts', date: '28-4-2024', reward: 'Spring Boost', status: 'Paid' },
    { id: '#P-1047', promoter: 'Kadin Lipshutz', points: '250 pts', date: '27-5-2024', reward: 'Summer Referral Program', status: 'Paid' },
    { id: '#P-1046', promoter: 'Randy Culhane', points: '300 pts', date: '29-5-2024', reward: 'Early Bird Special', status: 'Disputed' },
    { id: '#P-1045', promoter: 'Jaxson Vaccaro', points: '100 pts', date: '30-6-2024', reward: 'Early Bird Special', status: 'Paid' },
    { id: '#P-1044', promoter: 'Jocelyn Levin', points: '200 pts', date: '01-7-2024', reward: 'Summer Referral Program', status: 'Disputed' },
    { id: '#P-1043', promoter: 'Maren Septimus', points: '300 pts', date: '03-7-2024', reward: 'Summer Referral Program', status: 'Paid' },
    { id: '#P-1042', promoter: 'Haylie Saris', points: '220 pts', date: '05-7-2024', reward: 'Spring Boost', status: 'Paid' },
    { id: '#P-1041', promoter: 'Randy Herwitz', points: '400 pts', date: '10-7-2024', reward: 'Spring Boost', status: 'Disputed' },
  ]);

  const tabs = ['All Payouts', 'Disputes', 'Payout Settings'];

  const handleViewProfile = (id) => {
    console.log(`View profile for ${id}`);
  };

  const handleRequestDispute = (id) => {
    console.log(`Request dispute for ${id}`);
  };

  const handleTrackDispute = (id) => {
    console.log(`Track dispute for ${id}`);
  };

  // Placeholder content components for tabs
  const AllPayoutsContent = () => (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Payout ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Promoter Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Points</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Reward Date</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Reward Earned For</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payouts.map((payout) => (
            <tr key={payout.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-600">{payout.id}</td>
              <td className="px-4 py-3 text-sm text-gray-800 font-medium">{payout.promoter}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{payout.points}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{payout.date}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{payout.reward}</td>
              <td className="px-4 py-3">
                <span 
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    payout.status === 'Paid' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {payout.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <button onClick={() => handleViewProfile(payout.id)}>
                    <Eye size={18} className="text-gray-500 hover:text-gray-700" />
                  </button>
                  <span className="text-blue-600 text-sm">
                    {payout.status === 'Disputed' ? (
                      <button 
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => handleTrackDispute(payout.id)}
                      >
                        Track Dispute
                      </button>
                    ) : (
                      <button 
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => handleRequestDispute(payout.id)}
                      >
                        Request Dispute
                      </button>
                    )}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const DisputesContent = () => (
    <div className="p-8 border border-dashed border-gray-200 rounded-lg">
      <p className="text-center text-gray-600">NO DISPUTES....</p>
    </div>
  );

  const PayoutSettingsContent = () => (
    <PayoutSettings/>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-medium text-gray-800">Manage and monitor your payouts</h1>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="black" strokeWidth="2"/>
                <path d="M6 21V19C6 17.4087 6.63214 15.8826 7.75736 14.7574C8.88258 13.6321 10.4087 13 12 13C13.5913 13 15.1174 13.6321 16.2426 14.7574C17.3679 15.8826 18 17.4087 18 19V21" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Total Points Given</div>
              <div className="text-2xl font-semibold">12,500</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21M3 12H21M3 18H12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Current Point Balance</div>
              <div className="text-2xl font-semibold">1,250</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M9 14H15M9 18H13" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Last Points Transfer</div>
              <div className="text-2xl font-semibold">April 9, 2025</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-8 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content with Smooth Transition */}
        <div className="mt-6">
          <AnimatePresence exitBeforeEnter>
            {activeTab === 'All Payouts' && (
              <motion.div
                key="all-payouts"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <AllPayoutsContent />
              </motion.div>
            )}
            {activeTab === 'Disputes' && (
              <motion.div
                key="disputes"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <DisputesContent />
              </motion.div>
            )}
            {activeTab === 'Payout Settings' && (
              <motion.div
                key="payout-settings"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <PayoutSettingsContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}