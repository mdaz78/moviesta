import React from 'react';

interface PillsProps {
  className?: string;
  children: React.ReactNode;
}

const Pills = ({ className = '', children }: PillsProps) => {
  return (
    <div
      className={`border rounded-md px-3 py-2 text-xs md:text-sm text-slate-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Pills;
