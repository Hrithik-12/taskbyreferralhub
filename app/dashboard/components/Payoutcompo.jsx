import { useState } from 'react';

const PayoutSettings = () => {
  const [activeTab, setActiveTab] = useState('settings');
  const [preloadEnabled, setPreloadEnabled] = useState(true);
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const tabs = ['All Payouts', 'Disputes', 'Payout Settings'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Manage and monitor your payouts
      </h2>

      {/* Top Summary Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 text-sm">Total Points Given</p>
          <p className="text-xl font-bold">12,500</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 text-sm">Current Point Balance</p>
          <p className="text-xl font-bold text-orange-500">1,250</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 text-sm">Last Points Transfer</p>
          <p className="text-base font-medium text-pink-600">April 9, 2025</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`pb-2 px-4 text-sm font-medium ${
              activeTab === tab.toLowerCase().replace(/\s/g, '')
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-indigo-500'
            }`}
            onClick={() => setActiveTab(tab.toLowerCase().replace(/\s/g, ''))}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-700">
          Preload Money <br />
          <span className="text-xs text-gray-500">Use Points to Reward Promoters Instantly</span>
        </p>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={preloadEnabled}
            onChange={() => setPreloadEnabled(!preloadEnabled)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white relative"></div>
        </label>
      </div>

      {/* Balance Display */}
      <div className="bg-green-50 text-green-700 text-sm p-3 rounded-md mb-4">
        Current Point Balance: <span className="font-semibold text-blue-600">1,250 Points</span>
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Enter Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-400"
        />
        <p className="text-xs text-gray-400 mt-1">
          You'll receive 10 points per $1
        </p>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2 text-gray-700">Payment Methods</p>
        <div className="flex flex-wrap gap-4">
          {['Credit/Debit/ATM Card', 'Paypal account', 'Bank Transfer', 'UPI'].map((method, idx) => (
            <label key={idx} className="flex items-center text-sm gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value={method.toLowerCase().replace(/ /g, '')}
                checked={paymentMethod === method.toLowerCase().replace(/ /g, '')}
                onChange={() => setPaymentMethod(method.toLowerCase().replace(/ /g, ''))}
                className="accent-indigo-500"
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition font-medium">
        Buy Points
      </button>
    </div>
  );
};

export default PayoutSettings;
