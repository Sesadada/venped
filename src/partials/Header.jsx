import React from "react";

function Header({ toEs, toEn }) {
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex"></div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {/* Suggested space for translation flags */}
            <button
              onClick={toEs}
              className="h-6 w-8 bg-transparent focus:bg-blue-600 focus:text-skin-inverted hover:bg-skin-button-accent-hover text-skin-muted text-xs text-center hover:text-skin-inverted border border-indigo-500 hover:border-transparent rounded"
            >
              ESP
            </button>
            <button
              onClick={toEn}
              className="h-6 w-8 bg-transparent focus:bg-blue-600 focus:text-skin-inverted hover:bg-skin-button-accent-hover text-skin-muted text-xs text-center hover:text-skin-inverted border border-indigo-500 hover:border-transparent rounded"
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
