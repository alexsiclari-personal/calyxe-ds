# Design Tokens

This directory contains the design token system for the Calyxe design system, structured to match the Figma variable architecture.

## Structure

```
tokens/
├── primitives/
│   ├── colors.ts          # Base color values (raw color data)
│   ├── spacing.ts         # Base spacing values
│   ├── size.ts            # Base size values
│   ├── border-radius.ts   # Border radius values
│   └── typography.ts       # Base typography values
├── mapped/
│   ├── background.ts      # Semantic background colors
│   ├── foreground.ts      # Semantic foreground colors
│   ├── border.ts          # Semantic border colors
│   └── typography.ts      # Semantic typography styles
├── css-variables.css      # CSS custom properties
├── types.ts               # TypeScript type definitions
├── index.ts               # Main export file
└── README.md              # This file
```

## Architecture

The token system follows a two-tier architecture:

1. **Primitives** - Base values organized by category (colors, spacing, size, typography, etc.)
2. **Mapped Collections** - Semantic tokens that reference primitives

This structure ensures:
- Single source of truth for values
- Automatic propagation of changes
- Semantic clarity in component code
- Type safety with TypeScript

## Usage

### TypeScript/JavaScript

```typescript
import { tokens, getBackgroundColor, getForegroundColor } from './tokens';

// Access tokens directly
const neutralBg = tokens.color.bg.neutral.default;
const spacing = tokens.spacing.md;
const borderRadius = tokens.borderRadius.md;

// Use helper functions
const successBg = getBackgroundColor('success', 'default');
const errorText = getForegroundColor('error', 'default');

// Access primitives
const gray500 = tokens.color.gray[500];
const spacingMd = tokens.spacing.md;
```

### CSS

```css
/* Import CSS variables */
@import './tokens/css-variables.css';

/* Use in your styles */
.button {
  background-color: var(--color-bg-neutral-default);
  color: var(--color-fg-neutral-darker);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-rounded-md);
  padding: var(--spacing-md);
}
```

### React Components

```tsx
import { tokens } from './tokens';

function Button({ variant = 'neutral' }) {
  const bgColor = tokens.color.bg[variant].default;
  const fgColor = tokens.color.fg[variant].default;
  
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: fgColor,
        borderRadius: tokens.borderRadius.md,
        padding: tokens.spacing.md,
      }}
    >
      Click me
    </button>
  );
}
```

## Token Categories

### Primitives

#### Colors
Base color values organized by family:
- `gray` - Neutral grayscale and Primary brand palette
- `purple` - Secondary brand color
- `orange` - Warning color
- `red` - Error/destructive color
- `green` - Success/positive color
- `blue` - Informational color
- `cyan` - Highlight color

Each family includes scales: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

#### Spacing
Spacing values for margins, padding, and gaps:
- `xs` - 8px
- `sm` - 12px
- `md` - 16px
- `lg` - 24px
- `xl` - 32px
- `2xl` - 40px
- `3xl` - 48px
- `4xl` - 64px

#### Size
Size values for dimensions and referenced by other tokens:
- `4` - 4px
- `8` - 8px
- `12` - 12px
- `16` - 16px
- `24` - 24px
- `32` - 32px
- `40` - 40px
- `48` - 48px
- `64` - 64px

#### Border Radius
Border radius values for rounded corners:
- `none` - 0px
- `2xs` - 4px (references size.4)
- `xs` - 8px (references size.8)
- `sm` - 12px (references size.12)
- `md` - 16px (references size.16)
- `lg` - 24px (references size.24)
- `xl` - 32px (references size.32)
- `full` - 9999px (fully rounded/pill shape)

#### Typography
Typography values including:
- **Font Families**: Cera Pro, Manrope, Recoleta, Gratimo Classic, Untitled Sans
- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
- **Font Weights**: regular (400), medium (500), semibold (600), bold (700)
- **Line Heights**: none, tight, snug, normal, relaxed, loose, expanded-sm
- **Letter Spacing**: tighter, tight, normal, wide, wider, widest, tracking-sm

### Mapped Collections

Semantic tokens organized by usage context:

#### Background (`bg`)
- `neutral` - Neutral/primary background colors (gray-based) - **matches Figma naming**
- `white` - White background
- `primary` - Alias for neutral (backward compatibility)
- `secondary` - Secondary background colors (purple-based)
- `highlight` - Highlight/emphasis backgrounds (cyan-based)
- `success` - Success state backgrounds (green-based)
- `warning` - Warning state backgrounds (orange-based)
- `error` - Error state backgrounds (red-based)

Variations: `lighter`, `light`, `default`, `dark`, `darker`

#### Foreground (`fg`)
- `neutral` - Neutral/primary foreground colors (gray-based) - **matches Figma naming**
- `primary` - Alias for neutral (backward compatibility)
- `secondary` - Secondary foreground colors (purple-based)
- `highlight` - Highlight/emphasis foreground colors (cyan-based)
- `success` - Success state foreground colors (green-based)
- `warning` - Warning state foreground colors (orange-based)
- `error` - Error state foreground colors (red-based)

Variations: `lighter`, `light`, `default`, `dark`, `darker`

#### Border (`border`)
- `light` - Light border color (gray-200)
- `default` - Default border color (gray-300)
- `dark` - Dark border color (gray-400)
- `primary` - Object with light/default/dark (backward compatibility)

#### Typography (`typography.scale`)
Semantic typography styles:
- `body` - Body text styles (sm, base, lg)
- `heading` - Heading styles (h1, h2, h3, h4, h5, h6)
- `label` - Label/Caption styles (sm, base)
- `subtitle` - Subtitle styles (sm, base)

## Best Practices

1. **Always prefer mapped tokens** in component code
   - ✅ `tokens.color.bg.neutral.default`
   - ❌ `tokens.color.gray[600]`

2. **Use primitives** only when:
   - Creating new semantic mappings
   - System-level value calculations
   - Design system maintenance

3. **Maintain consistency** - Use the same semantic role for the same purpose across components

4. **Leverage variations** - Use lighter/darker variations for component states (hover, active, disabled)

5. **Use semantic naming** - Prefer `neutral` over `primary` to match Figma convention (though `primary` is still available for backward compatibility)

## Color Format

All colors use the **OKLCH** color space format, which provides:
- Perceptual uniformity
- Better color manipulation capabilities
- More accurate color mixing and interpolation

## Type Safety

The token system includes comprehensive TypeScript types:

```typescript
import type { 
  BackgroundSemantic, 
  BackgroundVariation,
  SpacingSize,
  BorderRadiusSize,
} from './tokens';

function getColor(semantic: BackgroundSemantic, variation: BackgroundVariation) {
  // TypeScript will enforce valid values
  return tokens.color.bg[semantic][variation];
}

function getSpacing(size: SpacingSize) {
  return tokens.spacing[size];
}
```

## Updating Tokens

When updating tokens:

1. **Primitives**: Update values in `primitives/*.ts` files
   - Changes automatically propagate to mapped collections

2. **Mappings**: Update references in `mapped/*.ts` files
   - Change which primitives semantic tokens reference

3. **CSS Variables**: Update `css-variables.css` to match
   - Keep CSS variables in sync with TypeScript tokens

## Naming Conventions

### Figma Alignment
The token system aligns with Figma naming conventions:
- Uses `neutral` for primary semantic role (matches Figma)
- Maintains `primary` as alias for backward compatibility
- Uses dot notation in Figma (`--color.bg.neutral.default`)
- Uses kebab-case in CSS (`--color-bg-neutral-default`)

### Migration Path
- New code should use `neutral` naming
- Existing code using `primary` will continue to work
- Both naming conventions are supported

## Integration with Figma

These tokens are designed to match the Figma variable structure. When importing components from Figma:

1. Figma variables will map to these token paths
2. Component styles will reference semantic tokens
3. Changes in Figma can be synced to these token files

## Version

**Design Tokens Version:** 2.0  
**Last Updated:** Based on Figma Foundations file structure  
**Figma File Key:** qBQbYOt7zOiO1I2bnhaTdj
