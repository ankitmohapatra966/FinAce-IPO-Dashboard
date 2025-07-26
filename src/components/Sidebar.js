import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  FileText, 
  Users, 
  LogOut, 
  GraduationCap,
  CheckCircle,
  BarChart3,
  Settings,
  TrendingUp
} from 'lucide-react';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getNavItems = () => {
    switch (user?.role) {
      case 'student':
        return [
          { path: '/student', label: 'Dashboard', icon: Home },
          { path: '/submit-project', label: 'Submit Project', icon: FileText },
          { path: '/student/projects', label: 'My Projects', icon: GraduationCap },
        ];
      case 'faculty':
        return [
          { path: '/faculty', label: 'Dashboard', icon: Home },
          { path: '/faculty/assigned', label: 'Assigned Projects', icon: FileText },
          { path: '/faculty/reviews', label: 'Reviews', icon: CheckCircle },
        ];
      case 'admin':
        return [
          { path: '/admin', label: 'Dashboard', icon: Home },
          { path: '/ipo-upcoming', label: 'IPO Upcoming', icon: TrendingUp },
          { path: '/ipo-subscription', label: 'IPO Subscription', icon: BarChart3 },
          { path: '/ipo-allotment', label: 'IPO Allotment', icon: Users },
          { path: '/manage-projects', label: 'Manage Projects', icon: FileText },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0">
      
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Bluestock Fintech</h1>
            <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-semibold">
              {user?.name?.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">MENU</h3>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">OTHERS</h3>
          <div className="space-y-2">
            <Link to="/settings" className="sidebar-link">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
            <Link to="/api-manager" className="sidebar-link">
              <BarChart3 className="w-5 h-5 mr-3" />
              API Manager
            </Link>
            <Link to="/accounts" className="sidebar-link">
              <Users className="w-5 h-5 mr-3" />
              Accounts
            </Link>
            <Link to="/help" className="sidebar-link">
              <CheckCircle className="w-5 h-5 mr-3" />
              Help
            </Link>
          </div>
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full sidebar-link text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 