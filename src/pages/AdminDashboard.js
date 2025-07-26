import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import { 
  FileText, 
  Users, 
  CheckCircle, 
  TrendingUp,
  BarChart3,
  Settings,
  Shield,
  Search
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const [stats] = useState({
    totalProjects: 156,
    totalStudents: 89,
    totalFaculty: 12,
    pendingReviews: 23,
    approvedProjects: 98,
    rejectedProjects: 35,
    averageScore: 78
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const [departmentStats, setDepartmentStats] = useState([]);

  useEffect(() => {
    setRecentActivities([
      {
        id: 1,
        type: 'project_submitted',
        message: 'New project submitted by John Doe',
        timestamp: '2024-01-20T10:30:00',
        user: 'John Doe',
        project: 'E-commerce Platform'
      },
      {
        id: 2,
        type: 'project_reviewed',
        message: 'Project reviewed by Dr. Jane Smith',
        timestamp: '2024-01-20T09:15:00',
        user: 'Dr. Jane Smith',
        project: 'AI Chatbot System'
      },
      {
        id: 3,
        type: 'user_registered',
        message: 'New faculty member registered',
        timestamp: '2024-01-20T08:45:00',
        user: 'Dr. Mike Johnson',
        department: 'Computer Science'
      },
      {
        id: 4,
        type: 'project_approved',
        message: 'Project approved by admin',
        timestamp: '2024-01-19T16:20:00',
        user: 'Admin',
        project: 'Mobile Navigation App'
      }
    ]);

    setDepartmentStats([
      { department: 'Computer Science', projects: 45, students: 28, faculty: 5 },
      { department: 'Electrical Engineering', projects: 32, students: 22, faculty: 3 },
      { department: 'Mechanical Engineering', projects: 38, students: 25, faculty: 2 },
      { department: 'Civil Engineering', projects: 41, students: 14, faculty: 2 }
    ]);
  }, []);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'project_submitted':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'project_reviewed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'user_registered':
        return <Users className="w-5 h-5 text-purple-600" />;
      case 'project_approved':
        return <Shield className="w-5 h-5 text-indigo-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Authentication Required</h1>
          <p className="text-gray-600">Please log in to access the admin dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">IPO Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.name}! Here's your IPO management overview.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IPOs..."
                  className="input-field pl-10 w-64"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Hi, {user?.name}</span>
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-sm">
                    {user?.name?.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          <div className="lg:col-span-2 card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">IPO Dashboard India</h2>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-green-600 font-medium">↑ 20 IPO in Gain</span>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <div className="relative">
                <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  9 IPO in Loss
                </div>
              </div>
              <div className="relative">
                <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  20 IPO in Gain
                </div>
              </div>
              <div className="relative">
                <div className="w-40 h-40 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  30 Total IPO
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-sm text-gray-600 mb-4">Adipiscing elit, sed do eiusmod tempor</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">NSE India</span>
                </div>
                <a href='https://www.nseindia.com/' className="btn-primary text-xs">Visit Now</a>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">BSE India</span>
                </div>
                <a href='https://www.bseindia.com/' className="btn-primary text-xs">Visit Now</a>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">SEBI</span>
                </div>
                <a href='https://www.sebi.gov.in/' className="btn-primary text-xs">Visit Now</a>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium">Money Control</span>
                </div>
                <a href='https://www.moneycontrol.com/' className="btn-primary text-xs">Visit Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="card mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Main Board IPO</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">01 Jan 2024</span>
              <button className="btn-primary text-sm">View Report</button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                Afternoon IPO NSE & BSE 15
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Upcoming 15</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">New Listed 25</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Ongoing 2</span>
            </div>
          </div>
        </div>


        <div className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button
              className="btn-primary flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Manage Projects
            </button>
            <button
              className="btn-primary flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Manage Users
            </button>
            <button className="btn-secondary flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Generate Reports
            </button>
            <button className="btn-secondary flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              System Settings
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Department Statistics</h2>
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{dept.department}</h3>
                    <p className="text-sm text-gray-600">
                      {dept.projects} projects • {dept.students} students • {dept.faculty} faculty
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary-600">{dept.projects}</p>
                    <p className="text-xs text-gray-500">projects</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">System Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900">System Status</h3>
              <p className="text-sm text-green-600">All systems operational</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900">Performance</h3>
              <p className="text-sm text-blue-600">98% uptime this month</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900">Active Users</h3>
              <p className="text-sm text-purple-600">45 users online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 