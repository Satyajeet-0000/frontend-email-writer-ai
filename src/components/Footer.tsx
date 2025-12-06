import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-neon-blue/20 py-6 mt-auto"> {/* mt-auto is crucial here */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ReplyFlow. All Rights Reserved. | Designed & Built by **Satyajeet Lokare**
        </p>
      </div>
    </footer>
  );
};

export default Footer;