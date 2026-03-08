import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Simulate server JWT auth for demo purposes
  const fakeAuthApi = async (username, password, register = false) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!username || !password) reject("Missing username or password");
        else resolve({ username, token: "fake-jwt-token" });
      }, 500);
    });
  };

  const login = async (username, password) => {
    try {
      const res = await fakeAuthApi(username, password);
      localStorage.setItem("user", JSON.stringify(res));
      setUser(res);
      return { success: true };
    } catch (err) {
      return { success: false, message: err };
    }
  };

  const register = async (username, password) => {
    try {
      const res = await fakeAuthApi(username, password, true);
      localStorage.setItem("user", JSON.stringify(res));
      setUser(res);
      return { success: true };
    } catch (err) {
      return { success: false, message: err };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);