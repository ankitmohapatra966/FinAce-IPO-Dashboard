import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const storedUser = localStorage.getItem('ipo_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {

      const defaultAdmin = {
        id: '3',
        name: 'Admin User',
        email: 'admin@university.com',
        role: 'admin',
        department: 'Administration'
      };
      setUser(defaultAdmin);
      localStorage.setItem('ipo_user', JSON.stringify(defaultAdmin));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    try {
      setLoading(true);
      
      const mockUsers = {
        student: {
          id: '1',
          name: 'John Doe',
          email: 'john@student.com',
          role: 'student',
          department: 'Computer Science',
          studentId: 'CS2023001'
        },
        faculty: {
          id: '2',
          name: 'Dr. Jane Smith',
          email: 'jane@faculty.com',
          role: 'faculty',
          department: 'Computer Science',
          facultyId: 'FAC001'
        },
        admin: {
          id: '3',
          name: 'Admin User',
          email: 'admin@university.com',
          role: 'admin',
          department: 'Administration'
        }
      };


      await new Promise(resolve => setTimeout(resolve, 1000));

      const userData = mockUsers[role];
      if (!userData) {
        throw new Error('Invalid role');
      }

      setUser(userData);
      localStorage.setItem('ipo_user', JSON.stringify(userData));
      
      toast.success(`Welcome back, ${userData.name}!`);
      
      return userData;
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ipo_user');
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 