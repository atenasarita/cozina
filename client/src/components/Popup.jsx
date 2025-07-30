import React from 'react'

function Popup(props) {
  return ( props.trigger) ? (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-all duration-300`}>
      <div className={`bg-cozina-cream rounded-2xl shadow-2xl w-full max-w-lg relative transform transition-all duration-300`}>
        
        {/* Close button */}
        <button  onClick ={() => props.setTrigger(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700  rounded-full transition-all duration-200 z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup