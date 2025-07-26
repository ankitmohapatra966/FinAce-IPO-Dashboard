import React from 'react';
import { 
  Bell, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  X,
  Clock,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const Notification = ({ notifications = [], onClose, onMarkAsRead }) => {
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success':
        return 'border-l-green-500 bg-green-50';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'error':
        return 'border-l-red-500 bg-red-50';
      case 'info':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const mockNotifications = [
    {
      id: 1,
      type: 'success',
      title: 'IPO Application Successful',
      message: 'Your application for TechCorp Solutions Ltd has been submitted successfully.',
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      isRead: false
    },
    {
      id: 2,
      type: 'info',
      title: 'New IPO Listed',
      message: 'Green Energy Ltd IPO is now open for subscription.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      isRead: false
    },
    {
      id: 3,
      type: 'warning',
      title: 'Allotment Pending',
      message: 'Your allotment for HealthCare Plus Ltd is still under process.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      isRead: true
    },
    {
      id: 4,
      type: 'success',
      title: 'Allotment Confirmed',
      message: 'You have been allotted 1 lot of FinTech Innovations Ltd shares.',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      isRead: true
    },
    {
      id: 5,
      type: 'error',
      title: 'Application Rejected',
      message: 'Your application for EduTech Solutions Ltd has been rejected due to insufficient funds.',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      isRead: false
    }
  ];

  const notificationsToShow = notifications.length > 0 ? notifications : mockNotifications;
  const unreadCount = notificationsToShow.filter(n => !n.isRead).length;

  return (
    <div className="relative">
      <div className="relative">
        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
          <Bell className="w-6 h-6 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>
      </div>


      <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">

        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onMarkAsRead && onMarkAsRead()}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Mark all as read
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-gray-100"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {notificationsToShow.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <Bell className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p>No notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {notificationsToShow.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-l-4 ${getNotificationColor(notification.type)} ${
                    !notification.isRead ? 'bg-opacity-100' : 'bg-opacity-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium ${
                          !notification.isRead ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                          {notification.title}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">
                            {formatTimeAgo(notification.timestamp)}
                          </span>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium">
            View all notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification; 