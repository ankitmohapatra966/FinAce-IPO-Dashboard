import React, { useState } from 'react';
import { 
  CreditCard, 
  Plus, 
  X, 
  Eye, 
  EyeOff, 
  Lock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Smartphone,
  Landmark,
  Settings,
  Trash2
} from 'lucide-react';

const Accounts = () => {
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [showCVV, setShowCVV] = useState(false);
  const [showPIN, setShowPIN] = useState(false);
  const [cardFrozen, setCardFrozen] = useState(false);
  const [activeTab, setActiveTab] = useState('accounts');

  const tabs = [
    { id: 'accounts', label: 'Linked Accounts', icon: Landmark },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'limits', label: 'Transaction Limits', icon: TrendingUp },
    { id: 'autodebits', label: 'Auto-Debits', icon: Settings }
  ];

  const linkedAccounts = [
    {
      id: 1,
      bankName: 'HDFC Bank',
      bankLogo: '🏦',
      accountNumber: 'XXXX XXXX 1234',
      upiId: 'john.doe@hdfc',
      status: 'active',
      balance: '₹25,000'
    },
    {
      id: 2,
      bankName: 'State Bank of India',
      bankLogo: '🏛️',
      accountNumber: 'XXXX XXXX 5678',
      upiId: 'john.doe@sbi',
      status: 'active',
      balance: '₹15,000'
    },
    {
      id: 3,
      bankName: 'ICICI Bank',
      bankLogo: '🏢',
      accountNumber: 'XXXX XXXX 9012',
      upiId: 'john.doe@icici',
      status: 'inactive',
      balance: '₹0'
    }
  ];

  const cards = [
    {
      id: 1,
      type: 'virtual',
      cardNumber: '4532 **** **** 1234',
      expiryDate: '12/25',
      cvv: '123',
      pin: '1234',
      cardholderName: 'JOHN DOE',
      bank: 'HDFC Bank',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      type: 'debit',
      cardNumber: '5123 **** **** 5678',
      expiryDate: '09/26',
      cvv: '456',
      pin: '5678',
      cardholderName: 'JOHN DOE',
      bank: 'SBI',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const autoDebits = [
    {
      id: 1,
      name: 'Netflix',
      amount: '₹499',
      frequency: 'Monthly',
      nextDebit: '2024-02-01',
      status: 'active',
      icon: '📺'
    },
    {
      id: 2,
      name: 'LIC Premium',
      amount: '₹2,500',
      frequency: 'Monthly',
      nextDebit: '2024-02-05',
      status: 'active',
      icon: '🛡️'
    },
    {
      id: 3,
      name: 'Amazon Prime',
      amount: '₹999',
      frequency: 'Yearly',
      nextDebit: '2024-12-01',
      status: 'inactive',
      icon: '📦'
    }
  ];

  const renderLinkedAccounts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Linked Bank Accounts</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add New Bank Account</span>
        </button>
      </div>

      <div className="space-y-4">
        {linkedAccounts.map((account) => (
          <div key={account.id} className="p-6 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {account.bankLogo}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{account.bankName}</h4>
                  <p className="text-sm text-gray-600">Account: {account.accountNumber}</p>
                  <p className="text-sm text-gray-600">UPI ID: {account.upiId}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Balance</p>
                  <p className="font-semibold text-gray-900">{account.balance}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                    account.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {account.status === 'active' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                    {account.status}
                  </span>
                  <button className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCards = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Your Cards</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="relative">
            {/* Card Front */}
            <div className={`relative p-6 rounded-xl text-white ${card.color} shadow-lg transform transition-transform hover:scale-105`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-6 h-6" />
                  <span className="text-sm font-medium uppercase">{card.type}</span>
                </div>
                <div className="text-sm">{card.bank}</div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm opacity-80 mb-1">Card Number</p>
                <p className="text-lg font-mono">
                  {showCardNumber ? card.cardNumber : '**** **** **** ****'}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80 mb-1">Cardholder</p>
                  <p className="font-medium">{card.cardholderName}</p>
                </div>
                <div>
                  <p className="text-sm opacity-80 mb-1">Expires</p>
                  <p className="font-medium">{card.expiryDate}</p>
                </div>
              </div>
            </div>

            {/* Card Actions */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Show Card Number</span>
                <button
                  onClick={() => setShowCardNumber(!showCardNumber)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {showCardNumber ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Show CVV</span>
                <button
                  onClick={() => setShowCVV(!showCVV)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {showCVV ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">View PIN</span>
                <button
                  onClick={() => setShowPIN(!showPIN)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {showPIN ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Freeze Card</span>
                <button
                  onClick={() => setCardFrozen(!cardFrozen)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    cardFrozen ? 'bg-red-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      cardFrozen ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Card Details (shown when toggled) */}
            {(showCardNumber || showCVV || showPIN) && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
                {showCardNumber && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Card Number:</span>
                    <span className="font-mono text-sm">{card.cardNumber}</span>
                  </div>
                )}
                {showCVV && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">CVV:</span>
                    <span className="font-mono text-sm">{card.cvv}</span>
                  </div>
                )}
                {showPIN && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">PIN:</span>
                    <span className="font-mono text-sm">{card.pin}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderTransactionLimits = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Transaction Limits</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Limit */}
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Daily Limit</h4>
              <p className="text-sm text-gray-600">Maximum amount per day</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Current Limit</span>
              <span className="font-semibold text-gray-900">₹25,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Used Today</span>
              <span className="text-sm text-gray-600">₹5,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>

        {/* Monthly Limit */}
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Monthly Limit</h4>
              <p className="text-sm text-gray-600">Maximum amount per month</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Current Limit</span>
              <span className="font-semibold text-gray-900">₹1,00,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Used This Month</span>
              <span className="text-sm text-gray-600">₹15,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-blue-600" />
          <div>
            <h4 className="font-medium text-blue-900">Need Higher Limits?</h4>
            <p className="text-sm text-blue-700">Request an increase in your transaction limits</p>
          </div>
        </div>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Request Increase
        </button>
      </div>
    </div>
  );

  const renderAutoDebits = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Auto-Debits</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Auto-Debit</span>
        </button>
      </div>

      <div className="space-y-4">
        {autoDebits.map((debit) => (
          <div key={debit.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {debit.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{debit.name}</h4>
                  <p className="text-sm text-gray-600">{debit.amount} • {debit.frequency}</p>
                  <p className="text-sm text-gray-500">Next: {debit.nextDebit}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    debit.status === 'active' ? 'bg-primary-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      debit.status === 'active' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-yellow-600" />
          <div>
            <h4 className="font-medium text-yellow-900">Auto-Debit Safety</h4>
            <p className="text-sm text-yellow-700">You can pause or cancel auto-debits at any time. Failed payments will be retried up to 3 times.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Accounts</h1>
          <p className="text-gray-600 mt-2">Manage your bank accounts, cards, and payment methods</p>
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
            {activeTab === 'accounts' && renderLinkedAccounts()}
            {activeTab === 'cards' && renderCards()}
            {activeTab === 'limits' && renderTransactionLimits()}
            {activeTab === 'autodebits' && renderAutoDebits()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts; 