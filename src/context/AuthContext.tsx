import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  email: string | null;
  login: (token: string, email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem("admin_token")
  );
  const [email, setEmail] = useState<string | null>(
    () => localStorage.getItem("admin_email")
  );

  const login = (newToken: string, newEmail: string) => {
    setToken(newToken);
    setEmail(newEmail);
    localStorage.setItem("admin_token", newToken);
    localStorage.setItem("admin_email", newEmail);
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_email");
  };

  useEffect(() => {
    const stored = localStorage.getItem("admin_token");
    if (stored) setToken(stored);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, email, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
