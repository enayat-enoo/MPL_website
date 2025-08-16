import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/auth/check", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        setLoading(false);
        setIsAuthenticated(val.login);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
