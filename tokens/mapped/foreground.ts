/**
 * Foreground Color Tokens
 * 
 * Semantic color tokens for text, icons, and foreground elements.
 * These tokens reference primitive colors to provide contextual meaning.
 * 
 * Note: Uses 'neutral' naming to match Figma convention, with 'primary' as alias for backward compatibility.
 */

import { colorPrimitives } from '../primitives/colors';

export const foregroundColors = {
  // Neutral (primary semantic role) - matches Figma naming
  neutral: {
    lighter: colorPrimitives.gray[50],
    light: colorPrimitives.gray[200],
    default: colorPrimitives.gray[600],
    dark: colorPrimitives.gray[900],
    darker: colorPrimitives.gray[950],
  },
  // Primary - alias for neutral (backward compatibility)
  primary: {
    lighter: colorPrimitives.gray[50],
    light: colorPrimitives.gray[200],
    default: colorPrimitives.gray[600],
    dark: colorPrimitives.gray[900],
    darker: colorPrimitives.gray[950],
  },
  secondary: {
    lighter: colorPrimitives.purple[50],
    light: colorPrimitives.purple[100],
    default: colorPrimitives.purple[500],
    dark: colorPrimitives.purple[900],
    darker: colorPrimitives.purple[950],
  },
  highlight: {
    lighter: colorPrimitives.cyan[50],
    light: colorPrimitives.cyan[100],
    default: colorPrimitives.cyan[700],
    dark: colorPrimitives.cyan[900],
    darker: colorPrimitives.cyan[950],
  },
  success: {
    lighter: colorPrimitives.green[50],
    light: colorPrimitives.green[100],
    default: colorPrimitives.green[700],
    dark: colorPrimitives.green[900],
    darker: colorPrimitives.green[950],
  },
  warning: {
    lighter: colorPrimitives.orange[50],
    light: colorPrimitives.orange[100],
    default: colorPrimitives.orange[600],
    dark: colorPrimitives.orange[900],
    darker: colorPrimitives.orange[950],
  },
  error: {
    lighter: colorPrimitives.red[50],
    light: colorPrimitives.red[100],
    default: colorPrimitives.red[600],
    dark: colorPrimitives.red[900],
    darker: colorPrimitives.red[950],
  },
} as const;

export type ForegroundSemantic = keyof typeof foregroundColors;
export type ForegroundVariation = 'lighter' | 'light' | 'default' | 'dark' | 'darker';

