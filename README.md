# Calyxe Design System

A comprehensive design token system for the Calyxe design system, structured to match Figma variable architecture.

## Overview

The Calyxe design system uses a two-tier token architecture that separates **primitive values** from **semantic mappings**. This structure enables systematic updates and maintains consistency across the design system.

**Version:** 2.0  
**Source:** Figma Foundations file

## Installation

```bash
npm install calyxe-ds
```

## Usage

### TypeScript/JavaScript

```typescript
import { tokens, getBackgroundColor, getForegroundColor } from 'calyxe-ds';

// Access tokens directly
const neutralBg = tokens.color.bg.neutral.default;
const spacing = tokens.spacing.md;
const borderRadius = tokens.borderRadius.md;

// Use helper functions
const successBg = getBackgroundColor('success', 'default');
const errorText = getForegroundColor('error', 'default');
```

### CSS

```css
/* Import CSS variables */
@import 'calyxe-ds/css';

/* Use in your styles */
.button {
  background-color: var(--color-bg-neutral-default);
  color: var(--color-fg-neutral-darker);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-rounded-md);
  padding: var(--spacing-md);
}
```

## Token Structure

### Primitives

- **Colors**: Gray, Purple, Orange, Red, Green, Blue, Cyan (50-950 scales)
- **Spacing**: xs, sm, md, lg, xl, 2xl, 3xl, 4xl
- **Size**: 4, 8, 12, 16, 24, 32, 40, 48, 64 (in rem)
- **Border Radius**: none, 2xs, xs, sm, md, lg, xl, full
- **Typography**: Font families, sizes, weights, line heights, letter spacing

### Mapped Collections

- **Background**: neutral, white, primary, secondary, highlight, success, warning, error
- **Foreground**: neutral, primary, secondary, highlight, success, warning, error
- **Border**: light, default, dark, primary
- **Typography**: body, heading, label, subtitle scales

## Documentation

For detailed documentation, see:
- [Design Token Structure](./design-token-structure.md)
- [Tokens README](./tokens/README.md)

## Development

```bash
# Type check
npm run type-check
```

## License

MIT

