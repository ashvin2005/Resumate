// context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from "react";
import { getCurrentUser, signOut as authSignOut } from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    authSignOut();
    setUser(null);
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
