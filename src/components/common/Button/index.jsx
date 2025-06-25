import React from 'react';

const Button = ({ children, onClick, variant = 'full', color = 'blue', className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded transition';
  
  // Dynamic color mapping for Tailwind classes
  const getColorStyles = (color) => {
    const colors = {
      blue: {
        outline: `bg-transparent border-1 border-[#009dff] text-[#009dff] hover:bg-[#33b1ff] hover:text-white`,
        full: `bg-[#009dff] text-white hover:bg-[#33b1ff]`,
      },
      red: {
        outline: `bg-transparent border-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white`,
        full: `bg-red-600 text-white hover:bg-red-700`,
      },
      green: {
        outline: `bg-transparent border-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white`,
        full: `bg-green-600 text-white hover:bg-green-700`,
      },
    };
    return colors[color] || colors.blue; // Default to blue if color not found
  };

  const variantStyles = variant === 'outline'
    ? getColorStyles(color).outline
    : getColorStyles(color).full;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;