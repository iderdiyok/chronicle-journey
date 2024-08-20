import React from 'react';

const ErrorAlert = ({ error }) => {
  return (
    error && (
      <div className="fixed z-50 w-full" role="alert">
        <div className="bg-red-50 border border-red-400 text-red-800 p-4 rounded-lg shadow-lg mx-auto">
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        </div>
      </div>
    )
  );
};

export default ErrorAlert;
