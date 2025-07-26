import React, { useState } from 'react';
import { 
  Key, 
  Eye, 
  EyeOff, 
  Copy, 
  RefreshCw, 
  ExternalLink,
  CheckCircle,
  X,
  AlertCircle,
  Clock,
  Globe,
  Shield,
  Database,
  CreditCard,
  Activity
} from 'lucide-react';

const ApiManager = () => {
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [activeTab, setActiveTab] = useState('keys');
  const [permissions, setPermissions] = useState({
    readTransactions: true,
    initiateTransfers: false,
    manageAccounts: false,
    viewBalances: true
  });
  const [webhookUrl, setWebhookUrl] = useState('https://api.example.com/webhook');

  const tabs = [
    { id: 'keys', label: 'API Keys', icon: Key },
    { id: 'logs', label: 'Access Logs', icon: Activity },
    { id: 'permissions', label: 'Permissions', icon: Shield },
    { id: 'webhooks', label: 'Webhooks', icon: Globe }
  ];

  const apiKeys = {
    publicKey: 'pk_live_51ABC123DEF456GHI789JKL',
    secretKey: 'sk_live_51ABC123DEF456GHI789JKL012MNO345PQR678STU',
    lastUsed: '2024-01-15 14:30:00',
    createdOn: '2024-01-01 10:00:00'
  };

  const accessLogs = [
    {
      id: 1,
      endpoint: '/api/v1/transactions',
      timestamp: '2024-01-15 14:30:00',
      status: 200,
      ipAddress: '192.168.1.100',
      method: 'GET'
    },
    {
      id: 2,
      endpoint: '/api/v1/accounts',
      timestamp: '2024-01-15 14:25:00',
      status: 200,
      ipAddress: '192.168.1.100',
      method: 'GET'
    },
    {
      id: 3,
      endpoint: '/api/v1/transfer',
      timestamp: '2024-01-15 14:20:00',
      status: 403,
      ipAddress: '192.168.1.100',
      method: 'POST'
    },
    {
      id: 4,
      endpoint: '/api/v1/balance',
      timestamp: '2024-01-15 14:15:00',
      status: 200,
      ipAddress: '192.168.1.100',
      method: 'GET'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  const regenerateKeys = () => {
    // Add confirmation modal and regeneration logic
    if (window.confirm('Are you sure you want to regenerate your API keys? This will invalidate the current keys.')) {
      // Regenerate logic here
    }
  };

  const renderApiKeys = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Your API Keys</h3>
        <button
          onClick={regenerateKeys}
          className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Regenerate Keys</span>
        </button>
      </div>

      {/* Public Key */}
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <Key className="w-4 h-4" />
          <span>Public Key</span>
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={apiKeys.publicKey}
            readOnly
            className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg font-mono text-sm"
          />
          <button
            onClick={() => copyToClipboard(apiKeys.publicKey)}
            className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Secret Key */}
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <Key className="w-4 h-4" />
          <span>Secret Key</span>
        </label>
        <div className="flex items-center space-x-2">
          <input
            type={showSecretKey ? "text" : "password"}
            value={apiKeys.secretKey}
            readOnly
            className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg font-mono text-sm"
          />
          <button
            onClick={() => setShowSecretKey(!showSecretKey)}
            className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            {showSecretKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button
            onClick={() => copyToClipboard(apiKeys.secretKey)}
            className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500">Keep your secret key secure and never share it publicly</p>
      </div>

      {/* Key Info */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
        <div>
          <p className="text-sm font-medium text-gray-700">Last Used</p>
          <p className="text-sm text-gray-600">{apiKeys.lastUsed}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Created On</p>
          <p className="text-sm text-gray-600">{apiKeys.createdOn}</p>
        </div>
      </div>

      {/* Documentation Link */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <ExternalLink className="w-5 h-5 text-blue-600" />
          <div>
            <h4 className="font-medium text-blue-900">API Documentation</h4>
            <p className="text-sm text-blue-700">View our comprehensive API documentation to get started</p>
          </div>
        </div>
        <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
          View Documentation →
        </button>
      </div>
    </div>
  );

  const renderAccessLogs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">API Access Logs</h3>
        <div className="flex items-center space-x-4">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option>All Status</option>
            <option>200 - Success</option>
            <option>403 - Forbidden</option>
            <option>500 - Error</option>
          </select>
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Endpoint
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                IP Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {accessLogs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                  {log.endpoint}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    log.method === 'GET' ? 'bg-green-100 text-green-800' :
                    log.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {log.method}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                    log.status === 200 ? 'bg-green-100 text-green-800' :
                    log.status === 403 ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {log.status === 200 ? <CheckCircle className="w-3 h-3 mr-1" /> : <X className="w-3 h-3 mr-1" />}
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                  {log.ipAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {log.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPermissions = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">API Permissions</h3>
        <p className="text-sm text-gray-600 mt-1">Select which operations your API keys can perform</p>
      </div>

      <div className="space-y-4">
        {[
          { key: 'readTransactions', label: 'Read Transactions', description: 'View transaction history and details', icon: Database },
          { key: 'initiateTransfers', label: 'Initiate Transfers', description: 'Create and send money transfers', icon: CreditCard },
          { key: 'manageAccounts', label: 'Manage Accounts', description: 'Add, remove, and modify bank accounts', icon: Shield },
          { key: 'viewBalances', label: 'View Balances', description: 'Check account balances and limits', icon: Activity }
        ].map((permission) => {
          const Icon = permission.icon;
          return (
            <div key={permission.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-600" />
                <div>
                  <h4 className="font-medium text-gray-900">{permission.label}</h4>
                  <p className="text-sm text-gray-500">{permission.description}</p>
                </div>
              </div>
              <button
                onClick={() => setPermissions(prev => ({
                  ...prev,
                  [permission.key]: !prev[permission.key]
                }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  permissions[permission.key] ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    permissions[permission.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-yellow-600" />
          <div>
            <h4 className="font-medium text-yellow-900">Permission Changes</h4>
            <p className="text-sm text-yellow-700">Changes to permissions will take effect immediately for new API calls</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWebhooks = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Webhook Settings</h3>
        <p className="text-sm text-gray-600 mt-1">Configure webhooks to receive real-time notifications</p>
      </div>

      {/* Webhook URL */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Webhook URL</label>
        <div className="flex items-center space-x-2">
          <input
            type="url"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="https://your-domain.com/webhook"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Test Ping
          </button>
        </div>
        <p className="text-xs text-gray-500">We'll send a test POST request to verify your webhook endpoint</p>
      </div>

      {/* Webhook Status */}
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <h4 className="font-medium text-green-900">Webhook Active</h4>
            <p className="text-sm text-green-700">Last successful delivery: 2024-01-15 14:30:00</p>
          </div>
        </div>
      </div>

      {/* Webhook Events */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Webhook Events</h4>
        <div className="space-y-2">
          {[
            'transaction.created',
            'transaction.completed',
            'account.linked',
            'account.removed',
            'transfer.initiated',
            'transfer.completed'
          ].map((event) => (
            <div key={event} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <span className="text-sm font-mono text-gray-900">{event}</span>
              <button className="text-sm text-primary-600 hover:text-primary-700">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Webhook History */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Recent Deliveries</h4>
        <div className="space-y-2">
          {[
            { event: 'transaction.created', status: 'success', time: '2 minutes ago' },
            { event: 'account.linked', status: 'success', time: '5 minutes ago' },
            { event: 'transfer.initiated', status: 'failed', time: '10 minutes ago' }
          ].map((delivery, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-mono text-gray-900">{delivery.event}</span>
                <span className="text-xs text-gray-500">{delivery.time}</span>
              </div>
              <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                delivery.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {delivery.status === 'success' ? <CheckCircle className="w-3 h-3 mr-1" /> : <X className="w-3 h-3 mr-1" />}
                {delivery.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">API Manager</h1>
          <p className="text-gray-600 mt-2">Manage your API keys, monitor usage, and configure webhooks</p>
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
            {activeTab === 'keys' && renderApiKeys()}
            {activeTab === 'logs' && renderAccessLogs()}
            {activeTab === 'permissions' && renderPermissions()}
            {activeTab === 'webhooks' && renderWebhooks()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiManager; 