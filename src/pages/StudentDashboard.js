import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  Calendar,
  Award
} from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockProjects = [
      {
        id: 1,
        title: 'E-commerce Platform Development',
        status: 'approved',
        submittedDate: '2024-01-15',
        reviewDate: '2024-01-20',
        faculty: 'Dr. Jane Smith',
        score: 85
      },
      {
        id: 2,
        title: 'AI-Powered Chatbot System',
        status: 'pending',
        submittedDate: '2024-01-10',
        faculty: 'Dr. Mike Johnson',
        score: null
      },
      {
        id: 3,
        title: 'Mobile App for Campus Navigation',
        status: 'rejected',
        submittedDate: '2024-01-05',
        reviewDate: '2024-01-08',
        faculty: 'Dr. Sarah Wilson',
        score: 65,
        feedback: 'Project scope too broad, needs more focus'
      }
    ];

    setProjects(mockProjects);
    
    // Calculate stats
    setStats({
      total: mockProjects.length,
      pending: mockProjects.filter(p => p.status === 'pending').length,
      approved: mockProjects.filter(p => p.status === 'approved').length,
      rejected: mockProjects.filter(p => p.status === 'rejected').length
    });
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'rejected':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
      
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}! Here's your project overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">{stats.approved}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-gray-900">{stats.rejected}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/submit-project"
              className="btn-primary flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Submit New Project
            </Link>
            <button className="btn-secondary flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              View Deadlines
            </button>
            <button className="btn-secondary flex items-center">
              <Award className="w-5 h-5 mr-2" />
              View Guidelines
            </button>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
            <Link to="/student/projects" className="text-primary-600 hover:text-primary-700 font-medium">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {getStatusIcon(project.status)}
                      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Faculty:</span> {project.faculty}
                      </div>
                      <div>
                        <span className="font-medium">Submitted:</span> {new Date(project.submittedDate).toLocaleDateString()}
                      </div>
                      {project.reviewDate && (
                        <div>
                          <span className="font-medium">Reviewed:</span> {new Date(project.reviewDate).toLocaleDateString()}
                        </div>
                      )}
                      {project.score && (
                        <div>
                          <span className="font-medium">Score:</span> {project.score}/100
                        </div>
                      )}
                    </div>

                    {project.feedback && (
                      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-800">
                          <span className="font-medium">Feedback:</span> {project.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 