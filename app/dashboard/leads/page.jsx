'use client';

import { useState, useCallback } from 'react';
import { Eye, MessageSquare, Search, Filter, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

export default function LeadsManagement() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [leads, setLeads] = useState([
    { id: 1, name: 'Emery Dokidis', email: 'emerydoki@gmail.com', contact: '+979970174715', coupon: 'SAVE10NOW', status: 'Pending', checked: true },
    { id: 2, name: 'Kadin Lipshutz', email: 'kadinlipshutz@gmail.com', contact: '+971501948279', coupon: 'WELCOME15', status: 'Pending', checked: true },
    { id: 3, name: 'Randy Culhane', email: 'randyculhane@gmail.com', contact: '+971501598978', coupon: 'EXCLUSIVE20', status: 'Pending', checked: false },
    { id: 4, name: 'Jaxson Vaccaro', email: 'jaxonvaccaro@gmail.com', contact: '+971522503635', coupon: 'GETDEAL25', status: 'Completed', checked: false },
    { id: 5, name: 'Jocelyn Levin', email: 'jocelynlevin@gmail.com', contact: '+971554315300', coupon: 'FIRSTORDER10', status: 'Pending', checked: false },
    { id: 6, name: 'Maren Septimus', email: 'marenseptimus@gmail.com', contact: '+971525620832', coupon: 'SPECIALSAVE15', status: 'Completed', checked: false },
    { id: 7, name: 'Haylie Saris', email: 'hayluesaris@gmail.com', contact: '+971503328228', coupon: 'LIMITED20', status: 'Completed', checked: false },
    { id: 8, name: 'Randy Herwitz', email: 'randyherwitz@gmail.com', contact: '+971554231522', coupon: 'TRYUS10', status: 'Pending', checked: false },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = useCallback(() => {
    setSelectAll(!selectAll);
    setLeads(leads.map(lead => ({ ...lead, checked: !selectAll })));
  }, [selectAll, leads]);

  const toggleCheck = useCallback((id) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, checked: !lead.checked } : lead
    ));
    const allChecked = leads.every(lead => lead.checked);
    setSelectAll(allChecked);
  }, [leads]);

  const handleViewProfile = useCallback(async (id) => {
    try {
      setIsLoading(true);
      console.log(`View profile of lead ${id}`);
    } catch (err) {
      setError('Failed to load profile');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSendFollowUp = useCallback(async (id) => {
    try {
      setIsLoading(true);
      console.log(`Send follow-up to lead ${id}`);
    } catch (err) {
      setError('Failed to send follow-up');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 mb-2">{error}</p>
          <button 
            onClick={() => setError(null)}
            className="text-blue-600 hover:text-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Leads Management</h1>
            <p className="text-sm text-gray-500 mt-1">Track and manage your referral leads</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search leads..."
                className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white w-64
                  focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border 
              border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Total Leads</p>
            <p className="text-2xl font-semibold text-gray-900 mt-2">{leads.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Pending</p>
            <p className="text-2xl font-semibold text-orange-600 mt-2">
              {leads.filter(l => l.status === 'Pending').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Completed</p>
            <p className="text-2xl font-semibold text-green-600 mt-2">
              {leads.filter(l => l.status === 'Completed').length}
            </p>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-800">Active Leads</h2>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 
                bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <span>Bulk Actions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="w-12 py-4 px-6">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300"
                      checked={selectAll}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Name</th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email ID</th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coupon</th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr 
                    key={lead.id} 
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300" 
                        checked={lead.checked}
                        onChange={() => toggleCheck(lead.id)}
                      />
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{lead.name}</div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{lead.email}</td>
                    <td className="py-4 px-6 text-gray-600">{lead.contact}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {lead.coupon}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        lead.status === 'Pending' 
                          ? 'bg-orange-50 text-orange-600' 
                          : 'bg-green-50 text-green-600'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <button 
                          className={`p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          onClick={() => !isLoading && handleViewProfile(lead.id)}
                          disabled={isLoading}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          className={`p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          onClick={() => !isLoading && handleSendFollowUp(lead.id)}
                          disabled={isLoading}
                        >
                          <MessageSquare className="w-4 h-4" />
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
    </div>
  );
}

LeadsManagement.propTypes = {
  leads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
      coupon: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ),
};