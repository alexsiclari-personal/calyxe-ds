/**
 * ArrowRight Icon Component
 * 
 * Wrapper for react-iconly ArrowRight icon
 */

import React from 'react';
import { ArrowRight as IconlyArrowRight } from 'react-iconly';

export interface ArrowRightProps {
  size?: number | 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  'aria-hidden'?: boolean;
}

export const ArrowRight: React.FC<ArrowRightProps> = ({
  size = 14,
  className,
  'aria-hidden': ariaHidden = true,
}) => {
  return (
    <span className={className}>
      <IconlyArrowRight
        size={size as number}
        aria-hidden={ariaHidden}
      />
    </span>
  );
};

