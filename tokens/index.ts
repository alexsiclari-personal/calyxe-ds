/**
 * Design Tokens - Main Export
 * 
 * Central export point for all design tokens.
 * Provides both individual token collections and a unified token object.
 */

// Primitives - Colors
import { colorPrimitives, alphaPrimitives } from './primitives/colors';
export { colorPrimitives, alphaPrimitives };
export type {
  ColorFamily,
  ColorScale,
  AlphaType,
  AlphaOpacity,
} from './primitives/colors';

// Primitives - Spacing
import { spacingPrimitives } from './primitives/spacing';
export { spacingPrimitives };
export type { SpacingSize } from './primitives/spacing';

// Primitives - Size
import { sizePrimitives } from './primitives/size';
export { sizePrimitives };
export type { SizeValue } from './primitives/size';

// Primitives - Border Radius
import { borderRadiusPrimitives } from './primitives/border-radius';
export { borderRadiusPrimitives };
export type { BorderRadiusSize } from './primitives/border-radius';

// Primitives - Typography
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
} from './primitives/typography';
export {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
};
export type {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
} from './primitives/typography';

// Mapped Collections - Colors
import { backgroundColors } from './mapped/background';
export { backgroundColors };
export type { BackgroundSemantic, BackgroundVariation } from './mapped/background';

import { foregroundColors } from './mapped/foreground';
export { foregroundColors };
export type { ForegroundSemantic, ForegroundVariation } from './mapped/foreground';

import { borderColors } from './mapped/border';
export { borderColors };
export type { BorderSemantic, BorderVariation } from './mapped/border';

// Mapped Collections - Typography
import { typography } from './mapped/typography';
export { typography };
export type { TypographyScale } from './mapped/typography';

/**
 * Unified token object for convenient access
 */
export const tokens = {
  color: {
    // Primitives
    gray: colorPrimitives.gray,
    purple: colorPrimitives.purple,
    orange: colorPrimitives.orange,
    red: colorPrimitives.red,
    green: colorPrimitives.green,
    blue: colorPrimitives.blue,
    cyan: colorPrimitives.cyan,
    alpha: alphaPrimitives,
    // Mapped Collections
    bg: backgroundColors,
    fg: foregroundColors,
    border: borderColors,
  },
  spacing: spacingPrimitives,
  size: sizePrimitives,
  borderRadius: borderRadiusPrimitives,
  typography: {
    // Primitives
    fontFamily: fontFamilies,
    fontSize: fontSizes,
    fontWeight: fontWeights,
    lineHeight: lineHeights,
    letterSpacing: letterSpacing,
    // Mapped Collections
    scale: typography,
  },
} as const;

// Import types for helper functions
import type {
  ColorFamily,
  ColorScale,
} from './primitives/colors';
import type {
  BackgroundSemantic,
  BackgroundVariation,
} from './mapped/background';
import type {
  ForegroundSemantic,
  ForegroundVariation,
} from './mapped/foreground';
import type {
  BorderSemantic,
  BorderVariation,
} from './mapped/border';

/**
 * Helper function to get a primitive color
 */
export function getPrimitiveColor(family: ColorFamily, scale: ColorScale): string {
  return colorPrimitives[family][scale];
}

/**
 * Helper function to get a background color
 */
export function getBackgroundColor(
  semantic: BackgroundSemantic,
  variation: BackgroundVariation
): string {
  const bgColor = backgroundColors[semantic];
  if (typeof bgColor === 'string') {
    return bgColor; // For 'white' which is a string
  }
  return bgColor[variation];
}

/**
 * Helper function to get a foreground color
 */
export function getForegroundColor(
  semantic: ForegroundSemantic,
  variation: ForegroundVariation
): string {
  return foregroundColors[semantic][variation];
}

/**
 * Helper function to get a border color
 */
export function getBorderColor(
  semantic: BorderSemantic,
  variation?: BorderVariation
): string {
  const borderColor = borderColors[semantic];
  if (typeof borderColor === 'string') {
    return borderColor; // For 'light', 'default', 'dark' which are strings
  }
  return variation ? borderColor[variation] : borderColor.default;
}

