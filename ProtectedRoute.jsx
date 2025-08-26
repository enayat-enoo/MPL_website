import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/auth/check`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((val) => {
        setLoading(false);
        setIsAuthenticated(val.login);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
