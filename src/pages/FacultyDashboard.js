import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Star,
  Calendar
} from 'lucide-react';

const FacultyDashboard = () => {
  const { user } = useAuth();
  const [assignedProjects, setAssignedProjects] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    reviewed: 0,
    averageScore: 0
  });

  useEffect(() => {
    
    const mockProjects = [
      {
        id: 1,
        title: 'E-commerce Platform Development',
        student: 'John Doe',
        studentId: 'CS2023001',
        status: 'pending',
        submittedDate: '2024-01-15',
        department: 'Computer Science',
        priority: 'high'
      },
      {
        id: 2,
        title: 'AI-Powered Chatbot System',
        student: 'Alice Johnson',
        studentId: 'CS2023002',
        status: 'pending',
        submittedDate: '2024-01-12',
        department: 'Computer Science',
        priority: 'medium'
      },
      {
        id: 3,
        title: 'Mobile App for Campus Navigation',
        student: 'Bob Smith',
        studentId: 'CS2023003',
        status: 'reviewed',
        submittedDate: '2024-01-10',
        reviewDate: '2024-01-15',
        department: 'Computer Science',
        score: 85,
        feedback: 'Excellent work on UI/UX design'
      },
      {
        id: 4,
        title: 'Blockchain-based Voting System',
        student: 'Carol Wilson',
        studentId: 'CS2023004',
        status: 'reviewed',
        submittedDate: '2024-01-08',
        reviewDate: '2024-01-12',
        department: 'Computer Science',
        score: 92,
        feedback: 'Innovative approach, well-documented'
      }
    ];

    setAssignedProjects(mockProjects);
    
    const reviewedProjects = mockProjects.filter(p => p.status === 'reviewed');
    const averageScore = reviewedProjects.length > 0 
      ? reviewedProjects.reduce((sum, p) => sum + p.score, 0) / reviewedProjects.length 
      : 0;
    
    setStats({
      total: mockProjects.length,
      pending: mockProjects.filter(p => p.status === 'pending').length,
      reviewed: reviewedProjects.length,
      averageScore: Math.round(averageScore)
    });
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'reviewed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'reviewed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Faculty Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}! Here's your project review overview.</p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Assigned</p>
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
                <p className="text-sm font-medium text-gray-600">Reviewed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.reviewed}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Score</p>
                <p className="text-2xl font-bold text-gray-900">{stats.averageScore}</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/faculty/assigned"
              className="btn-primary flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Review Projects
            </Link>
            <button className="btn-secondary flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              View Schedule
            </button>
            <button className="btn-secondary flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Performance Report
            </button>
          </div>
        </div>

      
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Assigned Projects</h2>
            <Link to="/faculty/assigned" className="text-primary-600 hover:text-primary-700 font-medium">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {assignedProjects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {getStatusIcon(project.status)}
                      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      {project.priority && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                          {project.priority} priority
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                      <div>
                        <span className="font-medium">Student:</span> {project.student}
                      </div>
                      <div>
                        <span className="font-medium">ID:</span> {project.studentId}
                      </div>
                      <div>
                        <span className="font-medium">Department:</span> {project.department}
                      </div>
                      <div>
                        <span className="font-medium">Submitted:</span> {new Date(project.submittedDate).toLocaleDateString()}
                      </div>
                    </div>

                    {project.status === 'reviewed' && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Reviewed:</span> {new Date(project.reviewDate).toLocaleDateString()}
                        </div>
                        <div>
                          <span className="font-medium">Score:</span> {project.score}/100
                        </div>
                        <div className="md:col-span-2">
                          <span className="font-medium">Feedback:</span> {project.feedback}
                        </div>
                      </div>
                    )}

                    {project.status === 'pending' && (
                      <div className="flex space-x-2 mt-3">
                        <Link
                          to={`/review-project/${project.id}`}
                          className="btn-primary text-sm"
                        >
                          Review Project
                        </Link>
                        <button className="btn-secondary text-sm">
                          Request Extension
                        </button>
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

export default FacultyDashboard; 