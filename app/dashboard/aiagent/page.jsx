'use client';

import { FaSyncAlt, FaPaperPlane, FaPlus, FaPhoneAlt, FaEye } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

const messages = [
  { from: 'bot', text: "Welcome Back, Kadin! How can I help you today?" },
  { from: 'user', text: "Hey, I want to create a new referral campaign..." },
  { from: 'bot', text: "Absolutely! I'll help you create a high-converting..." },
  { from: 'user', text: "My main goal is to increase sales through referrals..." },
  { from: 'bot', text: "That's a great goal! Referral campaigns work best..." },
  { from: 'user', text: "Discount on next purchase" },
  { from: 'bot', text: "Smart choice! Discounts are a great way..." },
  { from: 'user', text: "15%" },
  { from: 'bot', text: "15% sounds like a strong incentive! Now..." },
  { from: 'user', text: "When the referred person signs up" },
  { from: 'bot', text: "That's a great way to ensure your campaign..." },
  { from: 'user', text: "I want to test this campaign for a while..." },
  { from: 'bot', text: "Got it! Here’s a quick summary of your campaign:", isSummary: true }
];

const quickLinks = [
  { text: "Send Referral", icon: <FaPaperPlane className="w-4 h-4" /> },
  { text: "Create Campaign", icon: <FaPlus className="w-4 h-4" /> },
  { text: "Follow-Up", icon: <FaPhoneAlt className="w-4 h-4" /> },
  { text: "View Referral", icon: <FaEye className="w-4 h-4" /> }
];

export default function ChatbotUI() {
  return (
    <div className="w-full min-h-[calc(100vh-6rem)]">
      {/* Header Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">AI Agent</h2>
            <p className="text-sm text-gray-500 mt-1">Your intelligent referral marketing assistant</p>
          </div>
          <FaSyncAlt className="text-gray-500 cursor-pointer hover:text-[#3059fe] transition-colors" title="Reset" />
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Chat Messages */}
        <div className="space-y-4 mb-6 max-h-[calc(100vh-24rem)] overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-md px-4 py-2 rounded-lg text-sm 
                  ${msg.from === 'bot' 
                    ? 'bg-gray-50 text-gray-800' 
                    : 'bg-[#3059fe] text-white'} 
                  ${msg.isSummary ? 'bg-blue-50 border border-blue-100' : ''}`}
              >
                {msg.isSummary ? (
                  <div className="space-y-2">
                    <p><strong>• Goal:</strong> Increase sales</p>
                    <p><strong>• Reward:</strong> 15% discount on next purchase</p>
                    <p><strong>• Condition:</strong> Reward given on referred purchase</p>
                    <p><strong>• Duration:</strong> 3 months</p>
                    <div className="flex gap-4 mt-3">
                      <button className="px-4 py-1 border rounded-md text-[#3059fe] border-[#3059fe] hover:bg-blue-50">
                        Edit
                      </button>
                      <button className="px-4 py-1 rounded-md bg-[#3059fe] text-white hover:bg-blue-600">
                        Launch
                      </button>
                    </div>
                  </div>
                ) : (
                  <p>{msg.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="border-t pt-4 mb-6">
          <h4 className="text-sm font-semibold mb-3 text-gray-700">Quick Links</h4>
          <div className="grid grid-cols-4 gap-3">
            {quickLinks.map(({ text, icon }) => (
              <button
                key={text}
                className="border border-[#3059fe] text-[#3059fe] px-3 py-1.5 rounded-lg text-sm font-medium
                  hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                {icon}
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12
              focus:ring-2 focus:ring-blue-100 focus:border-[#3059fe] outline-none"
          />
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#3059fe] 
              hover:bg-blue-50 rounded-lg transition-colors"
          >
            <IoSend className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
