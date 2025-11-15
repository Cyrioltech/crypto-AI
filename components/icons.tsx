
import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
    >
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.75.75V9h3.75a.75.75 0 010 1.5H9.75v3.75a.75.75 0 01-1.5 0V10.5H4.5a.75.75 0 010-1.5H8.25V5.25A.75.75 0 019 4.5zM13.5 15a.75.75 0 01.75.75V19.5h3.75a.75.75 0 010 1.5H14.25v3.75a.75.75 0 01-1.5 0V21h-3.75a.75.75 0 010-1.5H12.75v-3.75a.75.75 0 01.75-.75zM15 4.5a3 3 0 116 0 3 3 0 01-6 0zM3 16.5a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
  </svg>
);
