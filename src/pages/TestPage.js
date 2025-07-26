import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const TestPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Application Status</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h2 className="font-semibold text-green-800">✅ Application Loaded Successfully</h2>
            <p className="text-green-600 text-sm">React app is running properly</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="font-semibold text-blue-800">👤 Authentication Status</h2>
            <p className="text-blue-600 text-sm">
              {user ? `Logged in as: ${user.name} (${user.role})` : 'Not logged in'}
            </p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg">
            <h2 className="font-semibold text-purple-800">🎯 Current Route</h2>
            <p className="text-purple-600 text-sm">Admin Dashboard should be accessible</p>
          </div>
        </div>
        
        <div className="mt-6">
          <a 
            href="/admin" 
            className="w-full btn-primary text-center block"
          >
            Go to Admin Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestPage; 