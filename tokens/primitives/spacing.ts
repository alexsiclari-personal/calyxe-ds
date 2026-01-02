/**
 * Spacing Primitive Tokens
 * 
 * Base spacing values used throughout the system.
 * These are the foundational spacing variables that mapped collections reference.
 */

export const spacingPrimitives = {
  xs: '0.5rem',    /* 8px */
  sm: '0.75rem',   /* 12px */
  md: '1rem',      /* 16px */
  lg: '1.5rem',    /* 24px */
  xl: '2rem',      /* 32px */
  '2xl': '2.5rem', /* 40px */
  '3xl': '3rem',   /* 48px */
  '4xl': '4rem',   /* 64px */
} as const;

export type SpacingSize = keyof typeof spacingPrimitives;

