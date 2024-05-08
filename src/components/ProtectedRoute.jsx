import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);
  return children;
}

export default ProtectedRoute;
