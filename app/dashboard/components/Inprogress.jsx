'use client';

import { Clock, Construction } from 'lucide-react';

export default function InProgress() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
      <Construction className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
      <p className="text-gray-500 text-center mb-4">
        This feature is currently under development
      </p>
      <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
        <Clock className="w-4 h-4" />
        <span>In Progress</span>
      </div>
    </div>
  );
}