/**
 * Border Radius Primitive Tokens
 * 
 * Border radius values for rounded corners.
 * These tokens reference size primitives to maintain consistency.
 */

import { sizePrimitives } from './size';

export const borderRadiusPrimitives = {
  none: '0',
  '2xs': sizePrimitives[4], /* 0.25rem / 4px */
  xs: sizePrimitives[8],    /* 0.5rem / 8px */
  sm: sizePrimitives[12],   /* 0.75rem / 12px */
  md: sizePrimitives[16],   /* 1rem / 16px */
  lg: sizePrimitives[24],   /* 1.5rem / 24px */
  xl: sizePrimitives[32],   /* 2rem / 32px */
  full: '9999px',            /* Fully rounded/pill shape - keep as px for maximum rounding */
} as const;

export type BorderRadiusSize = keyof typeof borderRadiusPrimitives;

