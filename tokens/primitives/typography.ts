/**
 * Typography Primitive Tokens (Font Variables)
 * 
 * Base typography values including font families, sizes, weights, line heights, and letter spacing.
 * These are the foundational font variables that mapped typography collections reference.
 */

/**
 * Font Families
 * Primitives for font family variables
 */
export const fontFamilies = {
  cerapro: "'Cera Pro', sans-serif",
  manrope: "'Manrope', sans-serif",
  recoleta: "'Recoleta', serif",
  gratimoClassic: "'Gratimo Classic', serif",
  untitledSans: "'Untitled Sans', sans-serif",
} as const;

/**
 * Font Sizes
 * Primitives for font size variables
 */
export const fontSizes = {
  xs: '0.75rem',   /* 12px */
  sm: '0.875rem',  /* 14px */
  base: '1rem',    /* 16px */
  lg: '1.125rem',  /* 18px */
  xl: '1.25rem',   /* 20px */
  '2xl': '1.5rem', /* 24px */
  '3xl': '1.875rem', /* 30px */
  '4xl': '2.25rem', /* 36px */
  '5xl': '3rem',   /* 48px */
} as const;

/**
 * Font Weights
 * Primitives for font weight variables
 */
export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Line Heights
 * Primitives for line height variables (unitless values)
 */
export const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
} as const;

/**
 * Letter Spacing
 * Primitives for letter spacing variables
 */
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
  'tracking-sm': '0.0125rem', /* 0.2px */
} as const;

export type FontFamily = keyof typeof fontFamilies;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type LineHeight = keyof typeof lineHeights;
export type LetterSpacing = keyof typeof letterSpacing;

