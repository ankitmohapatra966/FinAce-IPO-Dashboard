import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import { 
  FileText, 
  CheckCircle, 
  ArrowLeft,
  Download,
  Eye
} from 'lucide-react';
import toast from 'react-hot-toast';

const ProjectReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [reviewData, setReviewData] = useState({
    score: '',
    feedback: '',
    status: 'approved',
    recommendations: ''
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock project data
        const mockProject = {
          id: id,
          title: 'E-commerce Platform Development',
          student: 'John Doe',
          studentId: 'CS2023001',
          department: 'Computer Science',
          supervisor: 'Dr. Jane Smith',
          submittedDate: '2024-01-15',
          description: 'A comprehensive e-commerce platform built using modern web technologies including React.js, Node.js, and MongoDB. The platform includes user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
          objectives: [
            'Develop a responsive e-commerce website',
            'Implement secure payment processing',
            'Create an intuitive admin interface',
            'Ensure scalability and performance'
          ],
          methodology: 'The project follows an agile development methodology with iterative sprints. We will use React.js for frontend, Node.js/Express for backend, MongoDB for database, and integrate third-party payment APIs.',
          expectedOutcome: 'A fully functional e-commerce platform that can handle multiple users, process payments securely, and provide comprehensive admin tools for inventory and order management.',
          duration: '6 months',
          budget: '$5000',
          teamSize: '2',
          files: [
            { name: 'Project_Proposal.pdf', size: '2.5 MB' },
            { name: 'Technical_Specifications.docx', size: '1.8 MB' },
            { name: 'UI_Design_Mockups.pdf', size: '3.2 MB' }
          ]
        };
        
        setProject(mockProject);
      } catch (error) {
        toast.error('Failed to load project details');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!reviewData.score || !reviewData.feedback) {
      toast.error('Please provide both score and feedback');
      return;
    }

    setSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Review submitted successfully!');
      navigate('/faculty');
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
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

  if (!project) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 p-8">
          <div className="text-center">
            <p className="text-gray-600">Project not found</p>
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
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => navigate('/faculty')}
              className="btn-secondary flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Project</h1>
          <p className="text-gray-600">Review and provide feedback for the submitted project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600">Submitted by {project.student} ({project.studentId})</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Department:</span>
                    <p className="text-gray-600">{project.department}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Supervisor:</span>
                    <p className="text-gray-600">{project.supervisor}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Submitted:</span>
                    <p className="text-gray-600">{new Date(project.submittedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Duration:</span>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                </div>
              </div>
            </div>

 
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Description</h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Objectives</h2>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>


            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Methodology</h2>
              <p className="text-gray-700 leading-relaxed">{project.methodology}</p>
            </div>


            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Expected Outcome</h2>
              <p className="text-gray-700 leading-relaxed">{project.expectedOutcome}</p>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Supporting Documents</h2>
              <div className="space-y-2">
                {project.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-sm flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </button>
                      <button className="btn-secondary text-sm flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Review & Feedback</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-2">
                    Score (0-100) *
                  </label>
                  <input
                    type="number"
                    id="score"
                    name="score"
                    value={reviewData.score}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    className="input-field"
                    placeholder="Enter score"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                    Review Decision *
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={reviewData.status}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="approved">Approve</option>
                    <option value="rejected">Reject</option>
                    <option value="revision">Request Revision</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Feedback *
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={reviewData.feedback}
                    onChange={handleInputChange}
                    rows={6}
                    className="input-field"
                    placeholder="Provide detailed feedback about the project..."
                    required
                  />
                </div>


                <div>
                  <label htmlFor="recommendations" className="block text-sm font-medium text-gray-700 mb-2">
                    Recommendations
                  </label>
                  <textarea
                    id="recommendations"
                    name="recommendations"
                    value={reviewData.recommendations}
                    onChange={handleInputChange}
                    rows={4}
                    className="input-field"
                    placeholder="Suggestions for improvement..."
                  />
                </div>


                <div className="space-y-3 pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting Review...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Submit Review
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => navigate('/faculty')}
                    className="w-full btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Guidelines</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Score based on project feasibility, innovation, and technical approach</p>
                <p>• Provide constructive feedback for improvement</p>
                <p>• Consider alignment with academic standards</p>
                <p>• Evaluate completeness of project documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectReview; 