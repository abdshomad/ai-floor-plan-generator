
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
        AI Floor Plan Generator
      </h1>
      <p className="mt-2 text-lg text-slate-400">
        Powered by Nano Banana
      </p>
    </header>
  );
};

export default Header;
