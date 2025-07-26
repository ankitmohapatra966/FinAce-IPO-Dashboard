import React, { useState, useEffect } from 'react';

import Sidebar from '../components/Sidebar';
import { 
  Users, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Search,
  Eye,
  Edit,
  Trash2,
  UserPlus
} from 'lucide-react';
import toast from 'react-hot-toast';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockProjects = [
          {
            id: 1,
            title: 'E-commerce Platform Development',
            student: 'John Doe',
            studentId: 'CS2023001',
            department: 'Computer Science',
            status: 'pending',
            submittedDate: '2024-01-15',
            assignedFaculty: null,
            priority: 'high'
          },
          {
            id: 2,
            title: 'AI-Powered Chatbot System',
            student: 'Alice Johnson',
            studentId: 'CS2023002',
            department: 'Computer Science',
            status: 'assigned',
            submittedDate: '2024-01-12',
            assignedFaculty: 'Dr. Jane Smith',
            priority: 'medium'
          },
          {
            id: 3,
            title: 'Mobile App for Campus Navigation',
            student: 'Bob Smith',
            studentId: 'CS2023003',
            department: 'Computer Science',
            status: 'reviewed',
            submittedDate: '2024-01-10',
            assignedFaculty: 'Dr. Mike Johnson',
            priority: 'low'
          },
          {
            id: 4,
            title: 'Blockchain-based Voting System',
            student: 'Carol Wilson',
            studentId: 'CS2023004',
            department: 'Computer Science',
            status: 'approved',
            submittedDate: '2024-01-08',
            assignedFaculty: 'Dr. Sarah Wilson',
            priority: 'high'
          },
          {
            id: 5,
            title: 'IoT Smart Home Automation',
            student: 'David Brown',
            studentId: 'EE2023001',
            department: 'Electrical Engineering',
            status: 'rejected',
            submittedDate: '2024-01-05',
            assignedFaculty: 'Dr. Robert Chen',
            priority: 'medium'
          }
        ];
        
        setProjects(mockProjects);
      } catch (error) {
        toast.error('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'rejected':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'assigned':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'assigned':
        return 'bg-blue-100 text-blue-800';
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

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || project.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const handleAssignFaculty = (projectId) => {
    setSelectedProject(projects.find(p => p.id === projectId));
    setShowAssignModal(true);
  };

  const handleAssignSubmit = async (facultyId) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setProjects(prev => prev.map(p => 
        p.id === selectedProject.id 
          ? { ...p, status: 'assigned', assignedFaculty: 'Dr. Jane Smith' }
          : p
      ));
      
      toast.success('Faculty assigned successfully!');
      setShowAssignModal(false);
      setSelectedProject(null);
    } catch (error) {
      toast.error('Failed to assign faculty');
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setProjects(prev => prev.filter(p => p.id !== projectId));
        toast.success('Project deleted successfully!');
      } catch (error) {
        toast.error('Failed to delete project');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 p-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Management</h1>
          <p className="text-gray-600">Manage and oversee all submitted projects.</p>
        </div>

        <div className="card mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="assigned">Assigned</option>
                <option value="reviewed">Reviewed</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="input-field"
              >
                <option value="all">All Departments</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned To
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{project.title}</div>
                        <div className="text-sm text-gray-500">ID: {project.studentId}</div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(project.priority)}`}>
                          {project.priority} priority
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{project.student}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{project.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(project.status)}
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {project.assignedFaculty || 'Not assigned'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(project.submittedDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-primary-600 hover:text-primary-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        {!project.assignedFaculty && (
                          <button 
                            onClick={() => handleAssignFaculty(project.id)}
                            className="text-green-600 hover:text-green-900"
                          >
                            <UserPlus className="w-4 h-4" />
                          </button>
                        )}
                        <button 
                          onClick={() => handleDeleteProject(project.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No projects found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Assign Faculty Modal */}
        {showAssignModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Assign Faculty Reviewer
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Assign a faculty member to review "{selectedProject.title}"
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Faculty Member
                  </label>
                  <select className="input-field">
                    <option value="">Choose faculty member...</option>
                    <option value="1">Dr. Jane Smith - Computer Science</option>
                    <option value="2">Dr. Mike Johnson - Computer Science</option>
                    <option value="3">Dr. Sarah Wilson - Computer Science</option>
                    <option value="4">Dr. Robert Chen - Electrical Engineering</option>
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowAssignModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAssignSubmit(1)}
                  className="btn-primary flex-1"
                >
                  Assign
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectManagement; 