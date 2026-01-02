/**
 * TypeScript Type Definitions for Design Tokens
 * 
 * Comprehensive type definitions for type-safe token usage.
 */

import type {
  ColorFamily,
  ColorScale,
  AlphaType,
  AlphaOpacity,
} from './primitives/colors';
import type {
  SpacingSize,
} from './primitives/spacing';
import type {
  SizeValue,
} from './primitives/size';
import type {
  BorderRadiusSize,
} from './primitives/border-radius';
import type {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
} from './primitives/typography';
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
import type {
  TypographyScale,
} from './mapped/typography';

/**
 * Token path types for accessing nested token values
 */
export type PrimitiveColorPath = `${ColorFamily}.${ColorScale}`;
export type AlphaPath = `alpha.${AlphaType}.${AlphaOpacity}`;
export type SpacingPath = `spacing.${SpacingSize}`;
export type SizePath = `size.${SizeValue}`;
export type BorderRadiusPath = `border.rounded.${BorderRadiusSize}`;
export type BackgroundPath = `bg.${BackgroundSemantic}.${BackgroundVariation}`;
export type ForegroundPath = `fg.${ForegroundSemantic}.${ForegroundVariation}`;
export type BorderPath = `border.${BorderSemantic}.${BorderVariation}`;

export type ColorTokenPath =
  | PrimitiveColorPath
  | AlphaPath
  | BackgroundPath
  | ForegroundPath
  | BorderPath;

export type SpacingTokenPath = SpacingPath;
export type SizeTokenPath = SizePath;
export type BorderRadiusTokenPath = BorderRadiusPath;

/**
 * Utility type to extract the value type from a token path
 */
export type TokenValue<T extends ColorTokenPath> = T extends PrimitiveColorPath
  ? string
  : T extends AlphaPath
  ? string
  : T extends BackgroundPath
  ? string
  : T extends ForegroundPath
  ? string
  : T extends BorderPath
  ? string
  : never;

/**
 * Re-export all token types for convenience
 */
export type {
  ColorFamily,
  ColorScale,
  AlphaType,
  AlphaOpacity,
  SpacingSize,
  SizeValue,
  BorderRadiusSize,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
  BackgroundSemantic,
  BackgroundVariation,
  ForegroundSemantic,
  ForegroundVariation,
  BorderSemantic,
  BorderVariation,
  TypographyScale,
};

