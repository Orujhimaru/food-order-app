import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children, isSingedIn }) {
  const mockUser = {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "admin",
  };

  const [user] = useState(isSingedIn ? mockUser : null);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
