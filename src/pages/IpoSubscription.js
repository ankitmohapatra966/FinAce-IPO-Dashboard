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
  Plus
} from 'lucide-react';

const IpoSubscription = () => {
  const { user, loading } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');


  const subscriptions = [
    {
      id: 1,
      companyName: 'TechCorp Solutions Ltd',
      symbol: 'TECHCORP',
      subscriptionType: 'Retail',
      appliedLots: 2,
      appliedAmount: '₹90,000',
      status: 'subscribed',
      subscriptionDate: '2024-02-15',
      allotmentDate: '2024-02-20',
      category: 'Technology',
      rating: 4.5,
      isBookmarked: false,
      description: 'Leading technology solutions provider specializing in AI and cloud services'
    },
    {
      id: 2,
      companyName: 'Green Energy Ltd',
      symbol: 'GREENEN',
      subscriptionType: 'HNI',
      appliedLots: 5,
      appliedAmount: '₹750,000',
      status: 'pending',
      subscriptionDate: '2024-02-20',
      allotmentDate: '2024-02-25',
      category: 'Energy',
      rating: 4.2,
      isBookmarked: true,
      description: 'Renewable energy company focused on solar and wind power projects'
    },
    {
      id: 3,
      companyName: 'HealthCare Plus Ltd',
      symbol: 'HEALTHC',
      subscriptionType: 'Retail',
      appliedLots: 1,
      appliedAmount: '₹35,000',
      status: 'rejected',
      subscriptionDate: '2024-02-25',
      allotmentDate: '2024-03-01',
      category: 'Healthcare',
      rating: 4.7,
      isBookmarked: false,
      description: 'Healthcare technology company providing digital health solutions'
    },
    {
      id: 4,
      companyName: 'FinTech Innovations Ltd',
      symbol: 'FINTECH',
      subscriptionType: 'QIB',
      appliedLots: 10,
      appliedAmount: '₹3,000,000',
      status: 'subscribed',
      subscriptionDate: '2024-03-01',
      allotmentDate: '2024-03-06',
      category: 'Finance',
      rating: 4.3,
      isBookmarked: false,
      description: 'Digital banking and payment solutions provider'
    },
    {
      id: 5,
      companyName: 'EduTech Solutions Ltd',
      symbol: 'EDUTECH',
      subscriptionType: 'Retail',
      appliedLots: 3,
      appliedAmount: '₹480,000',
      status: 'pending',
      subscriptionDate: '2024-03-05',
      allotmentDate: '2024-03-10',
      category: 'Education',
      rating: 4.1,
      isBookmarked: true,
      description: 'Online education platform offering courses and certifications'
    }
  ];

  const [bookmarkedSubs, setBookmarkedSubs] = useState(
    subscriptions.filter(sub => sub.isBookmarked)
  );

  const toggleBookmark = (subId) => {
    const updatedSubs = subscriptions.map(sub => 
      sub.id === subId ? { ...sub, isBookmarked: !sub.isBookmarked } : sub
    );
    setBookmarkedSubs(updatedSubs.filter(sub => sub.isBookmarked));
  };

  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sub.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || sub.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'subscribed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
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
      case 'subscribed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">IPO Subscription</h1>
              <p className="text-gray-600">Manage and track your IPO subscriptions</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search subscriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10 w-64"
                />
              </div>
              <button className="btn-primary flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                New Subscription
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
                <p className="text-sm text-gray-600">Total Subscriptions</p>
                <p className="text-2xl font-bold text-gray-900">{subscriptions.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Subscribed</p>
                <p className="text-2xl font-bold text-green-600">
                  {subscriptions.filter(sub => sub.status === 'subscribed').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {subscriptions.filter(sub => sub.status === 'pending').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900">₹4.37 Cr</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
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
              onClick={() => setFilterStatus('subscribed')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filterStatus === 'subscribed' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Subscribed
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
          {filteredSubscriptions.map((subscription) => (
            <div key={subscription.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{subscription.companyName}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {subscription.symbol}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{subscription.rating}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(subscription.status)}`}>
                          {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{subscription.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleBookmark(subscription.id)}
                        className={`p-2 rounded-lg ${
                          subscription.isBookmarked 
                            ? 'text-orange-600 bg-orange-50' 
                            : 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${subscription.isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Type</p>
                        <p className="text-sm font-medium text-gray-900">{subscription.subscriptionType}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Applied Lots</p>
                        <p className="text-sm font-medium text-gray-900">{subscription.appliedLots}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Amount</p>
                        <p className="text-sm font-medium text-gray-900">{subscription.appliedAmount}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Applied Date</p>
                        <p className="text-sm font-medium text-gray-900">
                          {new Date(subscription.subscriptionDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Allotment Date</p>
                        <p className="text-sm font-medium text-gray-900">
                          {new Date(subscription.allotmentDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {subscription.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(subscription.status)}
                        <span className="text-sm text-gray-600">
                          {subscription.status === 'subscribed' && 'Successfully subscribed'}
                          {subscription.status === 'pending' && 'Awaiting allotment'}
                          {subscription.status === 'rejected' && 'Application rejected'}
                        </span>
                      </div>
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


        {filteredSubscriptions.length === 0 && (
          <div className="card text-center py-12">
            <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Subscriptions Found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IpoSubscription; 