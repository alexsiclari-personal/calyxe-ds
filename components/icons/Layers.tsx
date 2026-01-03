/**
 * Layers Icon Component
 * 
 * Custom Layers icon (not available in react-iconly)
 * Simple stacked layers icon representation
 */

import React from 'react';

export interface LayersProps {
  size?: number | string;
  className?: string;
  'aria-hidden'?: boolean;
  color?: string;
}

export const Layers: React.FC<LayersProps> = ({
  size = 14,
  className,
  'aria-hidden': ariaHidden = true,
  color = 'currentColor',
}) => {
  const sizeNum = typeof size === 'string' ? parseInt(size, 10) : size;
  
  return (
    <svg
      width={sizeNum}
      height={sizeNum}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        fill={color}
      />
      <path
        d="M2 17L12 22L22 17V12L12 17L2 12V17Z"
        fill={color}
      />
      <path
        d="M2 12L12 17L22 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

