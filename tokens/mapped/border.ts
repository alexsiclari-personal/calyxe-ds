/**
 * Border Color Tokens
 * 
 * Semantic color tokens for border elements.
 * These tokens reference primitive colors to provide contextual meaning.
 */

import { colorPrimitives } from '../primitives/colors';

export const borderColors = {
  // Light border - matches Figma naming
  light: colorPrimitives.gray[200],
  // Primary - alias for default (backward compatibility)
  primary: {
    light: colorPrimitives.gray[200],
    default: colorPrimitives.gray[300],
    dark: colorPrimitives.gray[400],
  },
  // Default border
  default: colorPrimitives.gray[300],
  // Dark border
  dark: colorPrimitives.gray[400],
} as const;

export type BorderSemantic = keyof typeof borderColors;
export type BorderVariation = 'light' | 'default' | 'dark';

