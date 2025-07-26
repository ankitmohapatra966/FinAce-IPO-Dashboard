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
  Building
} from 'lucide-react';

const IpoUpcoming = () => {
  const { user, loading } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');


  const upcomingIpos = [
    {
      id: 1,
      companyName: 'TechCorp Solutions Ltd',
      symbol: 'TECHCORP',
      priceRange: '₹450 - ₹500',
      lotSize: '30 shares',
      issueSize: '₹1,250 Cr',
      openDate: '2024-02-15',
      closeDate: '2024-02-18',
      status: 'upcoming',
      category: 'Technology',
      rating: 4.5,
      isBookmarked: false,
      description: 'Leading technology solutions provider specializing in AI and cloud services'
    },
    {
      id: 2,
      companyName: 'Green Energy Ltd',
      symbol: 'GREENEN',
      priceRange: '₹180 - ₹200',
      lotSize: '75 shares',
      issueSize: '₹850 Cr',
      openDate: '2024-02-20',
      closeDate: '2024-02-23',
      status: 'upcoming',
      category: 'Energy',
      rating: 4.2,
      isBookmarked: true,
      description: 'Renewable energy company focused on solar and wind power projects'
    },
    {
      id: 3,
      companyName: 'HealthCare Plus Ltd',
      symbol: 'HEALTHC',
      priceRange: '₹320 - ₹350',
      lotSize: '42 shares',
      issueSize: '₹1,100 Cr',
      openDate: '2024-02-25',
      closeDate: '2024-02-28',
      status: 'upcoming',
      category: 'Healthcare',
      rating: 4.7,
      isBookmarked: false,
      description: 'Healthcare technology company providing digital health solutions'
    },
    {
      id: 4,
      companyName: 'FinTech Innovations Ltd',
      symbol: 'FINTECH',
      priceRange: '₹280 - ₹300',
      lotSize: '50 shares',
      issueSize: '₹950 Cr',
      openDate: '2024-03-01',
      closeDate: '2024-03-04',
      status: 'upcoming',
      category: 'Finance',
      rating: 4.3,
      isBookmarked: false,
      description: 'Digital banking and payment solutions provider'
    },
    {
      id: 5,
      companyName: 'EduTech Solutions Ltd',
      symbol: 'EDUTECH',
      priceRange: '₹150 - ₹170',
      lotSize: '60 shares',
      issueSize: '₹750 Cr',
      openDate: '2024-03-05',
      closeDate: '2024-03-08',
      status: 'upcoming',
      category: 'Education',
      rating: 4.1,
      isBookmarked: true,
      description: 'Online education platform offering courses and certifications'
    }
  ];

  const [bookmarkedIpos, setBookmarkedIpos] = useState(
    upcomingIpos.filter(ipo => ipo.isBookmarked)
  );

  const toggleBookmark = (ipoId) => {
    const updatedIpos = upcomingIpos.map(ipo => 
      ipo.id === ipoId ? { ...ipo, isBookmarked: !ipo.isBookmarked } : ipo
    );
    setBookmarkedIpos(updatedIpos.filter(ipo => ipo.isBookmarked));
  };

  const filteredIpos = upcomingIpos.filter(ipo => {
    const matchesSearch = ipo.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ipo.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || ipo.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">IPO Upcoming Screen</h1>
              <p className="text-gray-600">Track and analyze upcoming Initial Public Offerings</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IPOs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Upcoming</p>
                <p className="text-2xl font-bold text-gray-900">{upcomingIpos.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Issue Size</p>
                <p className="text-2xl font-bold text-gray-900">₹4,900 Cr</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Bookmarked</p>
                <p className="text-2xl font-bold text-gray-900">{bookmarkedIpos.length}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Bookmark className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

  
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
            <button className="btn-secondary flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filter
            </button>
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
              All IPOs
            </button>
            <button
              onClick={() => setFilterStatus('upcoming')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filterStatus === 'upcoming' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilterStatus('bookmarked')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filterStatus === 'bookmarked' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Bookmarked
            </button>
          </div>
        </div>

        {/* IPO List */}
        <div className="space-y-6">
          {filteredIpos.map((ipo) => (
            <div key={ipo.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{ipo.companyName}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {ipo.symbol}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{ipo.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{ipo.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleBookmark(ipo.id)}
                        className={`p-2 rounded-lg ${
                          ipo.isBookmarked 
                            ? 'text-orange-600 bg-orange-50' 
                            : 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${ipo.isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Price Range</p>
                        <p className="text-sm font-medium text-gray-900">{ipo.priceRange}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Lot Size</p>
                        <p className="text-sm font-medium text-gray-900">{ipo.lotSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Issue Size</p>
                        <p className="text-sm font-medium text-gray-900">{ipo.issueSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Open Date</p>
                        <p className="text-sm font-medium text-gray-900">
                          {new Date(ipo.openDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {ipo.category}
                      </span>
                      <span className="text-sm text-gray-600">
                        Closes: {new Date(ipo.closeDate).toLocaleDateString()}
                      </span>
                    </div>
                    <button className="btn-primary flex items-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {filteredIpos.length === 0 && (
          <div className="card text-center py-12">
            <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No IPOs Found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IpoUpcoming; 