import React from 'react';

function loading() {
  return (
    <div className="flex min-h-screen space-x-2 justify-center items-center">
      <div 
        className="w-4 h-4 bg-teal-600 rounded-full"
        style={{ animation: 'pulse-dot 1s infinite 0s' }}
      ></div>
      <div 
        className="w-4 h-4 bg-teal-600 rounded-full"
        style={{ animation: 'pulse-dot 1s infinite 0.2s' }}
      ></div>
      <div 
        className="w-4 h-4 bg-teal-600 rounded-full"
        style={{ animation: 'pulse-dot 1s infinite 0.4s' }}
      ></div>
    </div>
  );
}

export default loading;