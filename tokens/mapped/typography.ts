/**
 * Typography Mapped Tokens
 * 
 * Semantic typography tokens that reference primitive font variables.
 * These provide contextual meaning for typography usage.
 */

import {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
} from '../primitives/typography';

/**
 * Typography Scale - Semantic text styles
 * These map to font variable primitives
 */
export const typography = {
  // Body text styles
  body: {
    sm: {
      fontFamily: fontFamilies.cerapro,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    base: {
      fontFamily: fontFamilies.cerapro,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    lg: {
      fontFamily: fontFamilies.cerapro,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
  },
  // Heading styles
  heading: {
    h1: {
      fontFamily: fontFamilies.recoleta,
      fontSize: fontSizes['5xl'],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.tight,
    },
    h2: {
      fontFamily: fontFamilies.recoleta,
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.tight,
    },
    h3: {
      fontFamily: fontFamilies.recoleta,
      fontSize: fontSizes['3xl'],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.normal,
    },
    h4: {
      fontFamily: fontFamilies.cerapro,
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.normal,
    },
    h5: {
      fontFamily: fontFamilies.cerapro,
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.normal,
    },
    h6: {
      fontFamily: fontFamilies.cerapro,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
  },
  // Label/Caption styles
  label: {
    sm: {
      fontFamily: fontFamilies.cerapro,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
    base: {
      fontFamily: fontFamilies.cerapro,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
  },
  // Subtitle styles
  subtitle: {
    sm: {
      fontFamily: fontFamilies.manrope,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing['tracking-sm'],
    },
    base: {
      fontFamily: fontFamilies.manrope,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing['tracking-sm'],
    },
  },
} as const;

export type TypographyScale = keyof typeof typography;
export type TypographyVariant<T extends TypographyScale> = keyof typeof typography[T];

