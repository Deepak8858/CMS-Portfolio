import React from 'react';

export default function PrimaryButton({ children, ...props }: any) {
  return (
    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded" {...props}>
      {children}
    </button>
  );
}
