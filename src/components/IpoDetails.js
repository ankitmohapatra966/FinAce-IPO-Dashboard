import React from 'react';
import { 
  Building, 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Star,
  Bookmark,
  Share2,
  ArrowLeft,
  Clock,
  Target,
  BarChart3,
  FileText,
  Download
} from 'lucide-react';

const IpoDetails = ({ ipo, onClose, onBookmark, onShare }) => {
  if (!ipo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{ipo.companyName}</h2>
                <p className="text-gray-600">{ipo.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onBookmark(ipo.id)}
                className={`p-2 rounded-lg ${
                  ipo.isBookmarked 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${ipo.isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => onShare(ipo)}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Symbol</p>
                  <p className="font-semibold text-gray-900">{ipo.symbol}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Price Range</p>
                  <p className="font-semibold text-gray-900">{ipo.priceRange}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Lot Size</p>
                  <p className="font-semibold text-gray-900">{ipo.lotSize}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Issue Size</p>
                  <p className="font-semibold text-gray-900">{ipo.issueSize}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Open Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(ipo.openDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Close Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(ipo.closeDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="font-semibold text-gray-900">{ipo.rating}/5</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-semibold text-gray-900">{ipo.category}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Overview</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                {ipo.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>


          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Revenue</span>
                </div>
                <p className="text-2xl font-bold text-blue-900">₹2,450 Cr</p>
                <p className="text-sm text-blue-600">FY 2023-24</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Profit</span>
                </div>
                <p className="text-2xl font-bold text-green-900">₹180 Cr</p>
                <p className="text-sm text-green-600">FY 2023-24</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">Market Cap</span>
                </div>
                <p className="text-2xl font-bold text-purple-900">₹8,500 Cr</p>
                <p className="text-sm text-purple-600">Post IPO</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Risks</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Market competition and technological changes</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Regulatory changes and compliance requirements</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Economic downturns and market volatility</p>
              </div>
            </div>
          </div>


          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="btn-secondary flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                View DRHP
              </button>
              <button className="btn-secondary flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download Prospectus
              </button>
            </div>
            <button className="btn-primary">
              Apply for IPO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpoDetails; 