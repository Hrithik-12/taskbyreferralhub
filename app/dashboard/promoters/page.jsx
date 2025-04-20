'use client'
import React, { useState } from "react";
import { Search, Plus, MessageSquare, MoreHorizontal, Eye } from "lucide-react";
import AddCustomerModal from "../components/AddCustomerModal";// import the modal (adjust the path as needed)

const formatDate = (dateStr) => {
  const [day, month, year] = dateStr.split('-');
  return new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const promoters = [
  {
    name: "Emery Dokidis",
    contact: "+979970174715",
    leads: 12,
    conversionRate: "50%",
    lastFollowUp: "28-4-2024",
    revenue: "$50",
    status: "Active",
    selected: true,
  },
  {
    name: "Kadin Lipshutz",
    contact: "+971501948279",
    leads: 8,
    conversionRate: "30%",
    lastFollowUp: "27-5-2024",
    revenue: "$900",
    status: "Active",
    selected: true,
  },
  {
    name: "Randy Culhane",
    contact: "+971501598978",
    leads: 15,
    conversionRate: "60%",
    lastFollowUp: "29-5-2024",
    revenue: "$1000",
    status: "Inactive",
  },
  {
    name: "Jaxson Vaccaro",
    contact: "+97152503635",
    leads: 10,
    conversionRate: "45%",
    lastFollowUp: "30-6-2024",
    revenue: "$500",
    status: "Completed",
  },
  {
    name: "Jocelyn Levin",
    contact: "+971553415300",
    leads: 6,
    conversionRate: "28%",
    lastFollowUp: "01-7-2024",
    revenue: "$1,500",
    status: "Inactive",
  },
  {
    name: "Maren Septimus",
    contact: "+971525620832",
    leads: 18,
    conversionRate: "65%",
    lastFollowUp: "03-7-2024",
    revenue: "$2,000",
    status: "Completed",
  },
  {
    name: "Haylie Saris",
    contact: "+971503328228",
    leads: 13,
    conversionRate: "58%",
    lastFollowUp: "05-7-2024",
    revenue: "$300",
    status: "Active",
  },
  {
    name: "Randy Herwitz",
    contact: "+971554231522",
    leads: 12,
    conversionRate: "50%",
    lastFollowUp: "10-7-2024",
    revenue: "$600",
    status: "Inactive",
  },
];

const statusColors = {
  Active: "bg-blue-100 text-blue-600",
  Inactive: "bg-orange-100 text-orange-600",
  Completed: "bg-green-100 text-green-600",
};

export default function PromoterDashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Promoter Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage and monitor your promoter referral activities</p>
          </div>
          {/* <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-medium text-gray-800">Kadin Stanton</p>
              <p className="text-sm text-gray-500">kadinstanton@gmail.com</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center">
              KS
            </div>
          </div> */}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button 
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg
              shadow-sm hover:shadow flex items-center space-x-2 transition-all duration-200">
            <Plus className="w-4 h-4" />
            <span>New Promoter</span>
          </button>
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-5 py-2.5 rounded-lg
            shadow-sm hover:shadow transition-all duration-200">
            Ask Past Customers For Referrals
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard 
            icon="👥" 
            title="Total Customers" 
            value="8" 
            change="+12%" 
            trend="up"
          />
          <SummaryCard 
            icon="🧍" 
            title="New Customers" 
            value="94" 
            change="+8%" 
            trend="up"
          />
          <SummaryCard 
            icon="📉" 
            title="Average Conversion rate" 
            value="64%" 
            change="-3%" 
            trend="down"
          />
          <SummaryCard 
            icon="💰" 
            title="Total Revenue Generated" 
            value="$23,900" 
            change="+15%" 
            trend="up"
          />
        </div>

        {/* Promoters Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-gray-800">Promoters</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search promoters..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-300 
                      focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4"><input type="checkbox" className="rounded border-gray-300" /></th>
                  <th className="px-6 py-4">Promoter Name</th>
                  <th className="px-6 py-4">Contact No.</th>
                  <th className="px-6 py-4">Leads</th>
                  <th className="px-6 py-4">Conversion Rate</th>
                  <th className="px-6 py-4">Last Follow-Up</th>
                  <th className="px-6 py-4">Revenue Generated</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {promoters.map((p, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input type="checkbox" defaultChecked={p.selected} className="rounded border-gray-300" />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{p.name}</td>
                    <td className="px-6 py-4 text-gray-600">{p.contact}</td>
                    <td className="px-6 py-4 text-gray-900">{p.leads}</td>
                    <td className="px-6 py-4 text-gray-900">{p.conversionRate}</td>
                    <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{formatDate(p.lastFollowUp)}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{p.revenue}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${statusColors[p.status]}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600" title="View Profile">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600" title="Send Message">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600" title="More Options">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Conditionally render the AddCustomerModal */}
      {showModal && <AddCustomerModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

const SummaryCard = ({ icon, title, value, change, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
    <div className="flex justify-between items-start">
      <div className="text-2xl">{icon}</div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
        trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
      }`}>
        {change}
      </span>
    </div>
    <div className="mt-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  </div>
);
