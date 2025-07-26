import React, { useState } from 'react';
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  FileText, 
  Star, 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  AlertCircle,
  CheckCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('search');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const tabs = [
    { id: 'search', label: 'Search Help', icon: Search },
    { id: 'issues', label: 'Common Issues', icon: AlertCircle },
    { id: 'contact', label: 'Contact Support', icon: MessageCircle },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'feedback', label: 'Feedback', icon: Star }
  ];

  const commonIssues = [
    {
      id: 1,
      title: "I forgot my PIN",
      description: "Reset your transaction PIN securely",
      icon: "🔐",
      solution: "You can reset your PIN through the app settings or by contacting support."
    },
    {
      id: 2,
      title: "I didn't receive OTP",
      description: "Troubleshoot OTP delivery issues",
      icon: "📱",
      solution: "Check your phone signal, try resending OTP, or contact support if the issue persists."
    },
    {
      id: 3,
      title: "Unauthorized transaction",
      description: "Report suspicious transactions",
      icon: "🚨",
      solution: "Immediately freeze your card and contact our fraud team."
    },
    {
      id: 4,
      title: "Link bank account",
      description: "Add a new bank account to your profile",
      icon: "🏦",
      solution: "Go to Accounts > Linked Accounts > Add New Bank Account and follow the verification process."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Is my data safe?",
      answer: "Yes, we use bank-level encryption and security measures to protect your data. All transactions are encrypted and we never store your card details on our servers."
    },
    {
      id: 2,
      question: "How do I enable 2FA?",
      answer: "Go to Settings > Security > Two-Factor Authentication and follow the setup process. You'll need to download an authenticator app like Google Authenticator."
    },
    {
      id: 3,
      question: "What if I lose my device?",
      answer: "If you lose your device, immediately log into your account from another device and freeze your cards. You can also contact support for immediate assistance."
    },
    {
      id: 4,
      question: "How do I change my transaction limits?",
      answer: "Go to Accounts > Transaction Limits and click 'Request Increase'. You'll need to provide additional verification for higher limits."
    },
    {
      id: 5,
      question: "Can I use the app abroad?",
      answer: "Yes, you can use the app abroad. However, some features may be limited based on your location and local regulations."
    },
    {
      id: 6,
      question: "How do I cancel an auto-debit?",
      answer: "Go to Accounts > Auto-Debits, find the subscription you want to cancel, and toggle it off. You can also contact the merchant directly."
    }
  ];

  const contactMethods = [
    {
      id: 1,
      title: "Live Chat",
      description: "Chat with our support team",
      icon: MessageCircle,
      action: "Start Chat",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Email Support",
      description: "support@fintechapp.com",
      icon: Mail,
      action: "Send Email",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "Call Support",
      description: "1800-xxx-xxxx",
      icon: Phone,
      action: "Call Now",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      title: "Raise a Ticket",
      description: "Create a support ticket",
      icon: FileText,
      action: "Create Ticket",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const renderSearchHelp = () => (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">How can we help you?</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for help articles, FAQs, or contact support..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        {searchQuery && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Search results for "{searchQuery}"</p>
            <div className="mt-2 space-y-2">
              <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                <p className="text-sm font-medium">How to reset your PIN</p>
                <p className="text-xs text-gray-500">Step-by-step guide to reset your transaction PIN</p>
              </div>
              <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                <p className="text-sm font-medium">Troubleshooting OTP issues</p>
                <p className="text-xs text-gray-500">Common solutions for OTP delivery problems</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderCommonIssues = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Common Issues</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {commonIssues.map((issue) => (
          <div key={issue.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{issue.icon}</div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{issue.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{issue.description}</p>
                <p className="text-sm text-gray-500 mt-2">{issue.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContactSupport = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Contact Support</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <div key={method.id} className={`p-6 border ${method.borderColor} rounded-lg ${method.bgColor} hover:shadow-md transition-shadow cursor-pointer`}>
              <div className="flex items-center space-x-3 mb-3">
                <Icon className={`w-6 h-6 ${method.color}`} />
                <h4 className="font-medium text-gray-900">{method.title}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">{method.description}</p>
              <button className={`text-sm font-medium ${method.color} hover:opacity-80 transition-opacity`}>
                {method.action} →
              </button>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-blue-600" />
          <div>
            <h4 className="font-medium text-blue-900">Response Time</h4>
            <p className="text-sm text-blue-700">We typically respond within 2 hours during business hours</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFAQs = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h3>
      
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {expandedFaq === faq.id ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {expandedFaq === faq.id && (
              <div className="px-4 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderFeedback = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">We'd Love Your Feedback</h3>
      
      <div className="max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rate your experience</label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`p-1 rounded transition-colors ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  <Star className="w-6 h-6 fill-current" />
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {rating === 0 && "Click to rate"}
              {rating === 1 && "Poor"}
              {rating === 2 && "Fair"}
              {rating === 3 && "Good"}
              {rating === 4 && "Very Good"}
              {rating === 5 && "Excellent"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tell us more (optional)
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts, suggestions, or report any issues..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Submit Feedback
          </button>
        </div>
      </div>

      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <h4 className="font-medium text-green-900">Thank You!</h4>
            <p className="text-sm text-green-700">Your feedback helps us improve our service</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-600 mt-2">Find answers to your questions and get the help you need</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'search' && renderSearchHelp()}
            {activeTab === 'issues' && renderCommonIssues()}
            {activeTab === 'contact' && renderContactSupport()}
            {activeTab === 'faqs' && renderFAQs()}
            {activeTab === 'feedback' && renderFeedback()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help; 