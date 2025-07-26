import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProjectSubmission from './pages/ProjectSubmission';
import ProjectReview from './pages/ProjectReview';
import ProjectManagement from './pages/ProjectManagement';
import IpoUpcoming from './pages/IpoUpcoming';
import IpoSubscription from './pages/IpoSubscription';
import IpoAllotment from './pages/IpoAllotment';
import Settings from './pages/Settings';
import ApiManager from './pages/ApiManager';
import Accounts from './pages/Accounts';
import Help from './pages/Help';
import TestPage from './pages/TestPage';


const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
          
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/student" element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/faculty" element={
              <ProtectedRoute allowedRoles={['faculty']}>
                <FacultyDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/submit-project" element={
              <ProtectedRoute allowedRoles={['student']}>
                <ProjectSubmission />
              </ProtectedRoute>
            } />
            
            <Route path="/review-project/:id" element={
              <ProtectedRoute allowedRoles={['faculty']}>
                <ProjectReview />
              </ProtectedRoute>
            } />
            
            <Route path="/manage-projects" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ProjectManagement />
              </ProtectedRoute>
            } />
            
            <Route path="/ipo-upcoming" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <IpoUpcoming />
              </ProtectedRoute>
            } />
            
            <Route path="/ipo-subscription" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <IpoSubscription />
              </ProtectedRoute>
            } />
            
            <Route path="/ipo-allotment" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <IpoAllotment />
              </ProtectedRoute>
            } />
            
            <Route path="/settings" element={
              <ProtectedRoute allowedRoles={['admin', 'faculty', 'student']}>
                <Settings />
              </ProtectedRoute>
            } />
            
            <Route path="/api-manager" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ApiManager />
              </ProtectedRoute>
            } />
            
            <Route path="/accounts" element={
              <ProtectedRoute allowedRoles={['admin', 'faculty', 'student']}>
                <Accounts />
              </ProtectedRoute>
            } />
            
            <Route path="/help" element={
              <ProtectedRoute allowedRoles={['admin', 'faculty', 'student']}>
                <Help />
              </ProtectedRoute>
            } />
            
            <Route path="/test" element={<TestPage />} />
            <Route path="/" element={<Navigate to="/admin" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 