import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  Globe, 
  Moon, 
  Sun, 
  Monitor,
  Shield,
  Bell,
  CreditCard,
  Smartphone,
  CheckCircle,
  X,
  Copy,
  RefreshCw,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [theme, setTheme] = useState('light');
  const [currency, setCurrency] = useState('INR');
  const [language, setLanguage] = useState('EN');
  const [timezone, setTimezone] = useState('Asia/Kolkata');
  const [twoFA, setTwoFA] = useState(false);
  const [biometrics, setBiometrics] = useState(false);
  const [appNotifications, setAppNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(25000);
  const [monthlyLimit, setMonthlyLimit] = useState(100000);

  const tabs = [
    { id: 'profile', label: 'Profile Settings', icon: User },
    { id: 'preferences', label: 'Preferences', icon: Globe },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const currencies = [
    { value: 'INR', label: 'Indian Rupee (₹)' },
    { value: 'USD', label: 'US Dollar ($)' },
    { value: 'GBP', label: 'British Pound (£)' },
    { value: 'EUR', label: 'Euro (€)' }
  ];

  const languages = [
    { value: 'EN', label: 'English' },
    { value: 'HI', label: 'Hindi' },
    { value: 'TA', label: 'Tamil' },
    { value: 'TE', label: 'Telugu' }
  ];

  const timezones = [
    { value: 'Asia/Kolkata', label: 'India (IST)' },
    { value: 'America/New_York', label: 'Eastern Time' },
    { value: 'Europe/London', label: 'London (GMT)' },
    { value: 'Asia/Dubai', label: 'Dubai (GST)' }
  ];

  const devices = [
    { id: 1, name: 'iPhone 14 Pro', location: 'Mumbai, India', lastActive: '2 hours ago', current: true },
    { id: 2, name: 'MacBook Pro', location: 'Mumbai, India', lastActive: '1 day ago', current: false },
    { id: 3, name: 'iPad Air', location: 'Delhi, India', lastActive: '3 days ago', current: false }
  ];

  const renderProfileSettings = () => (
    <div className="space-y-6">
      {/* Avatar and Name */}
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-600">JD</span>
        </div>
        <div className="flex-1">
          <input
            type="text"
            defaultValue="John Doe"
            className="text-xl font-semibold bg-transparent border-b border-gray-300 focus:border-primary-500 focus:outline-none"
          />
          <p className="text-sm text-gray-500 mt-1">Profile Picture</p>
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <Mail className="w-4 h-4" />
          <span>Email Address</span>
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            defaultValue="john.doe@example.com"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button className="px-4 py-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
            Edit
          </button>
        </div>
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <Phone className="w-4 h-4" />
          <span>Phone Number</span>
        </label>
        <input
          type="tel"
          defaultValue="+91 98765 43210"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Change Password */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
        
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <Lock className="w-4 h-4" />
            <span>Current Password</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">New Password</label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showNewPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
        </div>

        <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Update Password
        </button>
      </div>

      {/* Biometrics */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Smartphone className="w-5 h-5 text-gray-600" />
          <div>
            <h4 className="font-medium text-gray-900">Enable Biometrics / Face ID</h4>
            <p className="text-sm text-gray-500">Use fingerprint or face recognition to unlock the app</p>
          </div>
        </div>
        <button
          onClick={() => setBiometrics(!biometrics)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            biometrics ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              biometrics ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      {/* Currency Format */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Currency Format</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {currencies.map((curr) => (
            <option key={curr.value} value={curr.value}>
              {curr.label}
            </option>
          ))}
        </select>
      </div>

      {/* Language */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Theme */}
      <div className="space-y-4">
        <label className="text-sm font-medium text-gray-700">Theme</label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'light', label: 'Light', icon: Sun },
            { id: 'dark', label: 'Dark', icon: Moon },
            { id: 'system', label: 'System', icon: Monitor }
          ].map((themeOption) => {
            const Icon = themeOption.icon;
            return (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id)}
                className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                  theme === themeOption.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="w-6 h-6 text-gray-600" />
                <span className="text-sm font-medium">{themeOption.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timezone */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Timezone</label>
        <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {timezones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      {/* 2FA Toggle */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Shield className="w-5 h-5 text-gray-600" />
          <div>
            <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
        </div>
        <button
          onClick={() => setTwoFA(!twoFA)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            twoFA ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              twoFA ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Device Management */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Device Management</h3>
          <button className="text-sm text-red-600 hover:text-red-700 font-medium">
            Revoke All
          </button>
        </div>
        
        <div className="space-y-3">
          {devices.map((device) => (
            <div key={device.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-gray-600" />
                <div>
                  <h4 className="font-medium text-gray-900">{device.name}</h4>
                  <p className="text-sm text-gray-500">{device.location} • {device.lastActive}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {device.current && (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Current
                  </span>
                )}
                <button className="text-sm text-red-600 hover:text-red-700">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction PIN */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Transaction PIN</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CreditCard className="w-5 h-5 text-gray-600" />
            <div>
              <h4 className="font-medium text-gray-900">Enable Transaction PIN</h4>
              <p className="text-sm text-gray-500">Require PIN for all transactions</p>
            </div>
          </div>
          <button className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Setup PIN
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      {/* App Notifications */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Bell className="w-5 h-5 text-gray-600" />
          <div>
            <h4 className="font-medium text-gray-900">App Notifications</h4>
            <p className="text-sm text-gray-500">Receive notifications within the app</p>
          </div>
        </div>
        <button
          onClick={() => setAppNotifications(!appNotifications)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            appNotifications ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              appNotifications ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Email Alerts */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-600" />
          <div>
            <h4 className="font-medium text-gray-900">Email Alerts</h4>
            <p className="text-sm text-gray-500">Receive important updates via email</p>
          </div>
        </div>
        <button
          onClick={() => setEmailAlerts(!emailAlerts)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            emailAlerts ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              emailAlerts ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* SMS Alerts */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Smartphone className="w-5 h-5 text-gray-600" />
          <div>
            <h4 className="font-medium text-gray-900">SMS Alerts</h4>
            <p className="text-sm text-gray-500">Receive alerts via SMS</p>
          </div>
        </div>
        <button
          onClick={() => setSmsAlerts(!smsAlerts)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            smsAlerts ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              smsAlerts ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Transaction Limits */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Transaction Limits</h3>
        
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Daily Limit</label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">₹</span>
              <input
                type="number"
                value={dailyLimit}
                onChange={(e) => setDailyLimit(Number(e.target.value))}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Monthly Limit</label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">₹</span>
              <input
                type="number"
                value={monthlyLimit}
                onChange={(e) => setMonthlyLimit(Number(e.target.value))}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Request Increase
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account preferences and security settings</p>
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
            {activeTab === 'profile' && renderProfileSettings()}
            {activeTab === 'preferences' && renderPreferences()}
            {activeTab === 'security' && renderSecurity()}
            {activeTab === 'notifications' && renderNotifications()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 