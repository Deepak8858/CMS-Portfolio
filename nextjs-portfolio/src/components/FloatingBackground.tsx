import React from 'react';

const floatingShapes = [
  {
    className: 'bg-primary', // matches Tailwind primary color
    style: { top: '3rem', left: '2rem', width: '4rem', height: '4rem', '--delay': '0s' },
  },
  {
    className: 'bg-accent', // matches Tailwind accent color
    style: { top: '10rem', right: '3rem', width: '6rem', height: '6rem', '--delay': '2s' },
  },
  {
    className: 'bg-secondary', // matches Tailwind secondary color
    style: { bottom: '6rem', left: '8rem', width: '5rem', height: '5rem', '--delay': '1s' },
  },
  {
    className: 'bg-muted', // matches Tailwind muted color
    style: { bottom: '2rem', right: '6rem', width: '3.5rem', height: '3.5rem', '--delay': '3s' },
  },
];

const FloatingBackground: React.FC = () => (
  <>
    {floatingShapes.map((shape, i) => (
      <div
        key={i}
        className={`floating-element fixed rounded-full opacity-60 pointer-events-none z-0 ${shape.className}`}
        style={shape.style as React.CSSProperties}
      />
    ))}
  </>
);

export default FloatingBackground;
