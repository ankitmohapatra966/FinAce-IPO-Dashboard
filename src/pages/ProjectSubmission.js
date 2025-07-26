import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import { 
  FileText, 
  Upload, 
  X, 
  Save,
  ArrowLeft,
  AlertCircle
} from 'lucide-react';
import toast from 'react-hot-toast';

const ProjectSubmission = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    objectives: '',
    methodology: '',
    expectedOutcome: '',
    department: user?.department || '',
    supervisor: '',
    duration: '',
    budget: '',
    teamSize: '1'
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => {
      const isValidType = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type);
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      
      if (!isValidType) {
        toast.error(`${file.name} is not a valid file type. Please upload PDF or Word documents.`);
      }
      if (!isValidSize) {
        toast.error(`${file.name} is too large. Maximum file size is 10MB.`);
      }
      
      return isValidType && isValidSize;
    });

    setFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Project title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    }
    if (!formData.objectives.trim()) {
      newErrors.objectives = 'Project objectives are required';
    }
    if (!formData.methodology.trim()) {
      newErrors.methodology = 'Methodology is required';
    }
    if (!formData.expectedOutcome.trim()) {
      newErrors.expectedOutcome = 'Expected outcome is required';
    }
    if (!formData.supervisor.trim()) {
      newErrors.supervisor = 'Supervisor name is required';
    }
    if (!formData.duration.trim()) {
      newErrors.duration = 'Project duration is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Project submitted successfully!');
      navigate('/student');
    } catch (error) {
      toast.error('Failed to submit project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => navigate('/student')}
              className="btn-secondary flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit New Project</h1>
          <p className="text-gray-600">Fill in the details below to submit your industrial project.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="space-y-6">
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className={`input-field ${errors.title ? 'border-red-500' : ''}`}
                      placeholder="Enter project title"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className={`input-field ${errors.description ? 'border-red-500' : ''}`}
                      placeholder="Describe your project in detail"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.description}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="objectives" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Objectives *
                    </label>
                    <textarea
                      id="objectives"
                      name="objectives"
                      value={formData.objectives}
                      onChange={handleInputChange}
                      rows={3}
                      className={`input-field ${errors.objectives ? 'border-red-500' : ''}`}
                      placeholder="List the main objectives of your project"
                    />
                    {errors.objectives && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.objectives}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="methodology" className="block text-sm font-medium text-gray-700 mb-2">
                      Methodology *
                    </label>
                    <textarea
                      id="methodology"
                      name="methodology"
                      value={formData.methodology}
                      onChange={handleInputChange}
                      rows={3}
                      className={`input-field ${errors.methodology ? 'border-red-500' : ''}`}
                      placeholder="Describe the methodology you will use"
                    />
                    {errors.methodology && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.methodology}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="expectedOutcome" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Outcome *
                    </label>
                    <textarea
                      id="expectedOutcome"
                      name="expectedOutcome"
                      value={formData.expectedOutcome}
                      onChange={handleInputChange}
                      rows={3}
                      className={`input-field ${errors.expectedOutcome ? 'border-red-500' : ''}`}
                      placeholder="What do you expect to achieve?"
                    />
                    {errors.expectedOutcome && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.expectedOutcome}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Your department"
                      disabled
                    />
                  </div>

                  <div>
                    <label htmlFor="supervisor" className="block text-sm font-medium text-gray-700 mb-2">
                      Supervisor Name *
                    </label>
                    <input
                      type="text"
                      id="supervisor"
                      name="supervisor"
                      value={formData.supervisor}
                      onChange={handleInputChange}
                      className={`input-field ${errors.supervisor ? 'border-red-500' : ''}`}
                      placeholder="Enter supervisor name"
                    />
                    {errors.supervisor && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.supervisor}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                        Duration *
                      </label>
                      <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className={`input-field ${errors.duration ? 'border-red-500' : ''}`}
                        placeholder="e.g., 6 months"
                      />
                      {errors.duration && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.duration}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="input-field"
                      >
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5+ people</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., $5000"
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Supporting Documents</h2>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload project documents (PDF, DOC, DOCX)
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      Maximum file size: 10MB per file
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="btn-secondary cursor-pointer"
                    >
                      Choose Files
                    </label>
                  </div>

                  {files.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-700">Uploaded Files:</h3>
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-700">{file.name}</span>
                            <span className="text-xs text-gray-500">
                              ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/student')}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Submit Project
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectSubmission; 