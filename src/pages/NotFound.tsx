
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-tech-darker flex flex-col items-center justify-center p-4">
      <div className="glass-card rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-8xl font-bold tech-gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-foreground/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline px-6 py-3 rounded-lg flex items-center w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={18} className="mr-2" /> Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary px-6 py-3 rounded-lg flex items-center w-full sm:w-auto justify-center"
          >
            <Home size={18} className="mr-2" /> Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
