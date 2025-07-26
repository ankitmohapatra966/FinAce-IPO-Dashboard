import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import { 
  Search, 
  Filter, 
  Calendar,
  TrendingUp,
  TrendingDown,
  Star,
  Eye,
  Bookmark,
  Share2,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Building,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Upload,
  Plus,
  Award,
  Percent,
  Target
} from 'lucide-react';

const IpoAllotment = () => {
  const { user, loading } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const allotments = [
    {
      id: 1,
      companyName: 'TechCorp Solutions Ltd',
      symbol: 'TECHCORP',
      appliedLots: 2,
      allottedLots: 1,
      appliedAmount: '₹90,000',
      allottedAmount: '₹45,000',
      allotmentRatio: '1:2',
      allotmentDate: '2024-02-20',
      listingDate: '2024-02-25',
      status: 'allotted',
      category: 'Technology',
      rating: 4.5,
      isBookmarked: false,
      description: 'Leading technology solutions provider specializing in AI and cloud services',
      subscriptionType: 'Retail',
      oversubscription: '15.5x'
    },
    {
      id: 2,
      companyName: 'Green Energy Ltd',
      symbol: 'GREENEN',
      appliedLots: 5,
      allottedLots: 0,
      appliedAmount: '₹750,000',
      allottedAmount: '₹0',
      allotmentRatio: '0:5',
      allotmentDate: '2024-02-25',
      listingDate: '2024-03-01',
      status: 'rejected',
      category: 'Energy',
      rating: 4.2,
      isBookmarked: true,
      description: 'Renewable energy company focused on solar and wind power projects',
      subscriptionType: 'HNI',
      oversubscription: '45.2x'
    },
    {
      id: 3,
      companyName: 'HealthCare Plus Ltd',
      symbol: 'HEALTHC',
      appliedLots: 1,
      allottedLots: 1,
      appliedAmount: '₹35,000',
      allottedAmount: '₹35,000',
      allotmentRatio: '1:1',
      allotmentDate: '2024-03-01',
      listingDate: '2024-03-06',
      status: 'allotted',
      category: 'Healthcare',
      rating: 4.7,
      isBookmarked: false,
      description: 'Healthcare technology company providing digital health solutions',
      subscriptionType: 'Retail',
      oversubscription: '8.3x'
    },
    {
      id: 4,
      companyName: 'FinTech Innovations Ltd',
      symbol: 'FINTECH',
      appliedLots: 10,
      allottedLots: 3,
      appliedAmount: '₹3,000,000',
      allottedAmount: '₹900,000',
      allotmentRatio: '3:10',
      allotmentDate: '2024-03-06',
      listingDate: '2024-03-11',
      status: 'allotted',
      category: 'Finance',
      rating: 4.3,
      isBookmarked: false,
      description: 'Digital banking and payment solutions provider',
      subscriptionType: 'QIB',
      oversubscription: '22.1x'
    },
    {
      id: 5,
      companyName: 'EduTech Solutions Ltd',
      symbol: 'EDUTECH',
      appliedLots: 3,
      allottedLots: 0,
      appliedAmount: '₹480,000',
      allottedAmount: '₹0',
      allotmentRatio: '0:3',
      allotmentDate: '2024-03-10',
      listingDate: '2024-03-15',
      status: 'pending',
      category: 'Education',
      rating: 4.1,
      isBookmarked: true,
      description: 'Online education platform offering courses and certifications',
      subscriptionType: 'Retail',
      oversubscription: '12.7x'
    }
  ];

  const [bookmarkedAllotments, setBookmarkedAllotments] = useState(
    allotments.filter(allotment => allotment.isBookmarked)
  );

  const toggleBookmark = (allotmentId) => {
    const updatedAllotments = allotments.map(allotment => 
      allotment.id === allotmentId ? { ...allotment, isBookmarked: !allotment.isBookmarked } : allotment
    );
    setBookmarkedAllotments(updatedAllotments.filter(allotment => allotment.isBookmarked));
  };

  const filteredAllotments = allotments.filter(allotment => {
    const matchesSearch = allotment.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         allotment.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || allotment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'allotted':
        return <Award className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'allotted':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateSuccessRate = () => {
    const allotted = allotments.filter(a => a.status === 'allotted').length;
    return ((allotted / allotments.length) * 100).toFixed(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">IPO Allotment</h1>
              <p className="text-gray-600">Track and manage your IPO allotments</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search allotments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10 w-64"
                />
              </div>
              <button className="btn-primary flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                New Application
              </button>
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{allotments.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-green-600">{calculateSuccessRate()}%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Allotted</p>
                <p className="text-2xl font-bold text-purple-600">
                  {allotments.filter(a => a.status === 'allotted').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900">₹0.98 Cr</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>


        <div className="card mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
            <div className="flex items-center space-x-2">
              <button className="btn-secondary flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="btn-secondary flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filter
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filterStatus === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterStatus('allotted')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filterStatus === 'allotted' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Allotted
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filterStatus === 'pending' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilterStatus('rejected')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filterStatus === 'rejected' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Rejected
            </button>
          </div>
        </div>


        <div className="space-y-6">
          {filteredAllotments.map((allotment) => (
            <div key={allotment.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{allotment.companyName}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {allotment.symbol}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{allotment.rating}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(allotment.status)}`}>
                          {allotment.status.charAt(0).toUpperCase() + allotment.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{allotment.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleBookmark(allotment.id)}
                        className={`p-2 rounded-lg ${
                          allotment.isBookmarked 
                            ? 'text-orange-600 bg-orange-50' 
                            : 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${allotment.isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Type</p>
                        <p className="text-sm font-medium text-gray-900">{allotment.subscriptionType}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Applied Lots</p>
                        <p className="text-sm font-medium text-gray-900">{allotment.appliedLots}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Allotted Lots</p>
                        <p className="text-sm font-medium text-gray-900">{allotment.allottedLots}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Percent className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Ratio</p>
                        <p className="text-sm font-medium text-gray-900">{allotment.allotmentRatio}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Allotted Amount</p>
                        <p className="text-sm font-medium text-gray-900">{allotment.allottedAmount}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Oversubscription</p>
                        <p className="text-sm font-medium text-gray-900">{allotment.oversubscription}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {allotment.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(allotment.status)}
                        <span className="text-sm text-gray-600">
                          {allotment.status === 'allotted' && `Allotted on ${new Date(allotment.allotmentDate).toLocaleDateString()}`}
                          {allotment.status === 'pending' && 'Awaiting allotment'}
                          {allotment.status === 'rejected' && 'Application rejected'}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        Listing: {new Date(allotment.listingDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="btn-secondary flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </button>
                      <button className="btn-primary flex items-center">
                        <Upload className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {filteredAllotments.length === 0 && (
          <div className="card text-center py-12">
            <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Allotments Found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IpoAllotment; 