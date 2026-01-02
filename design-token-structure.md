# Design Token Structure Summary

## Overview

The Calyxe design system uses a two-tier token architecture that separates **primitive values** from **semantic mappings**. This structure enables systematic updates and maintains consistency across the design system.

**Version:** 2.0  
**Source:** Figma Foundations file (qBQbYOt7zOiO1I2bnhaTdj)

---

## Architecture

The design token system is organized into two main layers:

1. **Primitives Collection** - Base values (raw color, spacing, typography data)
2. **Mapped Collections** - Semantic tokens that reference primitives (contextual usage)

---

## 1. Primitives Collection

The primitives collection contains foundational values organized by category.

### A. Color Primitives

Color families with standardized scales from **50** (lightest) to **950** (darkest), with **500** typically representing the base color.

#### Available Color Families:
- **Gray** - Neutral grayscale and Primary brand palette
- **Purple** - Secondary brand color
- **Orange** - Warning color
- **Red** - Error/destructive color
- **Green** - Success/positive color
- **Blue** - Informational color
- **Cyan** - Highlight color

#### Naming Convention:
```
--color.{family}.{scale}
```

**Examples:**
- `--color.gray.50` - Lightest gray
- `--color.gray.950` - Darkest gray
- `--color.purple.500` - Base purple
- `--color.green.700` - Dark green

#### Color Scale Structure:
- **50** - Lightest tint
- **100** - Very light
- **200** - Light
- **300** - Medium-light
- **400** - Medium
- **500** - Base/default
- **600** - Medium-dark
- **700** - Dark
- **800** - Very dark
- **900** - Darkest
- **950** - Maximum darkness

#### Alpha Values:
Alpha (transparency) values for both light and dark themes:

**Alpha (Light) - Black overlays:**
- `--color.alpha.black.4` - 4% opacity
- `--color.alpha.black.8` - 8% opacity
- `--color.alpha.black.10` - 10% opacity
- `--color.alpha.black.12` - 12% opacity
- `--color.alpha.black.16` - 16% opacity

**Alpha (Dark) - White overlays:**
- `--color.alpha.white.4` - 4% opacity
- `--color.alpha.white.8` - 8% opacity
- `--color.alpha.white.10` - 10% opacity
- `--color.alpha.white.12` - 12% opacity
- `--color.alpha.white.16` - 16% opacity

#### Color Format:
All colors use the **OKLCH** color space format:
- Example: `oklch(0.985 0.005 308.445)`
- Provides better perceptual uniformity and color manipulation

### B. Spacing Primitives

Spacing values used throughout the system.

**Naming Convention:**
```
--spacing.{size}
```

**Observed Values (from Figma):**
- `--spacing.xs` - Extra small spacing (8px)
- Additional spacing scales likely exist (sm, md, lg, xl, etc.)

### C. Size Primitives

Size values used for dimensions and border radius.

**Naming Convention:**
```
--size.{value}
```

**Observed Values (from Figma):**
- `--size.4` - 4px
- `--size.8` - 8px
- `--size.12` - 12px
- `--size.16` - 16px
- `--size.24` - 24px
- `--size.32` - 32px

### D. Typography Primitives

Typography values including font families, sizes, weights, line heights, and letter spacing.

**Naming Convention:**
```
--font.{property}.{value}
--text.{size}
--line-height.{variant}
```

**Observed Values (from Figma):**
- `--font.family.cera` - Cera Pro font family
- `--font.weight.bold` - Bold weight
- `--font.weight.regular` - Regular weight
- `--text.sm` - Small text size (14px)
- `--line-height.expanded-sm` - Expanded small line height (21px)

**Note:** Additional typography primitives likely exist but need to be extracted from Figma variable definitions.

### E. Border Radius Primitives

Border radius values for rounded corners.

**Naming Convention:**
```
--border.rounded.{size}
```

**Observed Values (from Figma):**
- `--border.rounded.none` - 0px (no rounding)
- `--border.rounded.2xs` - References `--size.4` (4px)
- `--border.rounded.xs` - References `--size.8` (8px)
- `--border.rounded.sm` - References `--size.12` (12px)
- `--border.rounded.md` - References `--size.16` (16px)
- `--border.rounded.lg` - References `--size.24` (24px)
- `--border.rounded.xl` - References `--size.32` (32px)
- `--border.rounded.full` - 9999px (fully rounded/pill shape)

---

## 2. Mapped Collections

Mapped collections define semantic roles that reference primitive values. These tokens provide meaning and context for usage.

### Collection Types

#### A. Background Collection
**Purpose:** Colors for background elements

**Naming Convention:**
```
--color.bg.{semantic}.{variation}
```

**Semantic Roles (from Figma):**
- `neutral` - Neutral/primary background colors (typically gray-based)
- `white` - White background
- `highlight` - Highlight/emphasis backgrounds (typically cyan-based)
- `success` - Success state backgrounds (green-based)
- `warning` - Warning state backgrounds (orange-based)
- `error` - Error state backgrounds (red-based)

**Variations:**
- `lighter` - Lightest variation
- `light` - Light variation
- `default` - Standard/default variation
- `dark` - Dark variation
- `darker` - Darkest variation

**Examples (from Figma):**
- `--color.bg.neutral.dark` → Maps to gray-based primitive
- `--color.bg.neutral.light` → Maps to gray-based primitive
- `--color.bg.white` → White background
- `--color.bg.highlight.default` → Maps to cyan-based primitive (#00768b observed)
- `--color.bg.success.default` → Maps to green-based primitive
- `--color.bg.error.default` → Maps to red-based primitive

**Note:** The Figma naming uses `neutral` instead of `primary` for what appears to be the primary semantic role.

#### B. Foreground Collection
**Purpose:** Colors for text, icons, and foreground elements

**Naming Convention:**
```
--color.fg.{semantic}.{variation}
```

**Semantic Roles (from Figma):**
- `neutral` - Neutral/primary foreground colors
- `error` - Error state foreground colors

**Variations:** (Same as Background)
- `lighter`
- `light`
- `default`
- `dark`
- `darker`

**Examples (from Figma):**
- `--color.fg.neutral.darker` → Maps to gray-based primitive (#181719 observed)
- `--color.fg.error.default` → Maps to red-based primitive (#e7002d observed)

#### C. Border Collection
**Purpose:** Colors for border elements

**Naming Convention:**
```
--color.border.{semantic}.{variation}
```

**Semantic Roles (from Figma):**
- `light` - Light border color

**Variations:**
- `light` - Light border
- `default` - Standard border
- `dark` - Dark border

**Examples (from Figma):**
- `--color.border.light` → Maps to gray-based primitive (#e6e4e8 observed)

---

## Connection Points: Primitives → Mapped Collections

### How Collections Connect

The mapped collections **reference** primitive values through variable aliasing. This creates a dependency chain:

```
Primitive Value (Source)
    ↓
Mapped Semantic Token (Alias/Reference)
    ↓
Component Usage
```

### Key Connection Patterns

1. **Direct Mapping**
   - Mapped tokens directly reference primitive values
   - Example: `--color.bg.success.light` = `--color.green.100`

2. **Semantic Grouping**
   - Each semantic role maps to specific primitive families
   - Neutral → Gray family
   - Secondary → Purple family
   - Success → Green family
   - Warning → Orange family
   - Error → Red family
   - Highlight → Cyan family

3. **Variation Mapping**
   - Variations (lighter, light, default, dark, darker) map to different scales within the same color family
   - Provides a consistent lightness/darkness progression

4. **Size/Spacing References**
   - Border radius tokens reference size primitives
   - Example: `--border.rounded.sm` = `--size.12`

### Benefits of This Structure

1. **Single Source of Truth**
   - Primitive values are defined once
   - Changes to primitives automatically propagate to mapped tokens

2. **Semantic Clarity**
   - Mapped tokens provide meaning (`bg.neutral.default` vs `gray.500`)
   - Easier for designers and developers to choose appropriate values

3. **Systematic Updates**
   - Updating a primitive value (e.g., `purple.500`) updates all semantic tokens that reference it
   - Maintains consistency across the system

4. **Flexibility**
   - Semantic tokens can be remapped to different primitives without changing component code
   - Enables theme variations and rebranding

5. **Scalability**
   - Easy to add new semantic roles or variations
   - New primitives can be added without breaking existing mappings

---

## Token Hierarchy

```
Design Tokens
│
├── Primitives Collection
│   ├── Color Families
│   │   ├── Gray (50-950)
│   │   ├── Purple (50-950)
│   │   ├── Orange (50-950)
│   │   ├── Red (50-950)
│   │   ├── Green (50-950)
│   │   ├── Blue (50-950)
│   │   └── Cyan (50-950)
│   ├── Alpha Values
│   │   ├── Alpha (Light) - Black overlays (4, 8, 10, 12, 16)
│   │   └── Alpha (Dark) - White overlays (4, 8, 10, 12, 16)
│   ├── Spacing
│   │   └── xs, sm, md, lg, xl, etc.
│   ├── Size
│   │   └── 4, 8, 12, 16, 24, 32, etc.
│   ├── Typography
│   │   ├── Font Families
│   │   ├── Font Weights
│   │   ├── Font Sizes
│   │   └── Line Heights
│   └── Border Radius
│       └── none, 2xs, xs, sm, md, lg, xl, full
│
└── Mapped Collections
    ├── Background
    │   ├── Neutral (lighter, light, default, dark, darker)
    │   ├── White
    │   ├── Highlight (lighter, light, default, dark, darker)
    │   ├── Success (lighter, light, default, dark, darker)
    │   ├── Warning (lighter, light, default, dark, darker)
    │   └── Error (lighter, light, default, dark, darker)
    │
    ├── Foreground
    │   ├── Neutral (lighter, light, default, dark, darker)
    │   ├── Highlight (lighter, light, default, dark, darker)
    │   ├── Success (lighter, light, default, dark, darker)
    │   ├── Warning (lighter, light, default, dark, darker)
    │   └── Error (lighter, light, default, dark, darker)
    │
    └── Border
        └── Light, Default, Dark
```

---

## Naming Convention Differences

### Current Codebase vs Figma

**Current Codebase (TypeScript/CSS):**
- Uses kebab-case: `--color-bg-primary-default`
- Uses `primary` for neutral/primary semantic role

**Figma Variables:**
- Uses dot notation: `--color.bg.neutral.dark`
- Uses `neutral` for primary semantic role
- Uses `white` as a specific background option

**Mapping Strategy:**
- Need to align naming conventions between codebase and Figma
- `primary` in codebase maps to `neutral` in Figma
- Consider maintaining both for backward compatibility or migrating to Figma naming

---

## Usage Guidelines

### When to Use Primitives
- Direct value manipulation
- Creating new value scales
- Value calculations or transformations
- Design system maintenance

### When to Use Mapped Collections
- Component styling
- Semantic value assignments (success, error, etc.)
- Theme-aware components
- Production code

### Best Practices

1. **Always prefer mapped tokens** in component code
   - ✅ `--color.bg.neutral.default`
   - ❌ `--color.gray.500`

2. **Use primitives** only when creating new semantic mappings or system-level changes

3. **Maintain consistency** - Use the same semantic role for the same purpose across components

4. **Leverage variations** - Use lighter/darker variations for states (hover, active, disabled)

---

## Implementation Notes

### Variable Resolution
In Figma, mapped collection variables are configured to reference primitive variables. This creates a dependency relationship where:
- Primitive variables are the **source**
- Mapped variables are **aliases** that point to primitives
- Changes to primitives automatically update all dependent mapped tokens

### Color Space
All colors are defined in **OKLCH** format, which provides:
- Perceptual uniformity
- Better color manipulation capabilities
- More accurate color mixing and interpolation

### Fallback Values
CSS variable definitions include fallback values:
```css
var(--color.gray.50, white)
var(--color.bg.neutral.default, #747276)
```

---

## Key Observations from Figma

1. **Semantic Naming:** Figma uses `neutral` instead of `primary` for the primary semantic role
2. **Additional Semantics:** Figma includes `white` as a specific background option
3. **Size References:** Border radius tokens reference size primitives (e.g., `border.rounded.sm` = `size.12`)
4. **Typography System:** Figma has a comprehensive typography system with font families, weights, sizes, and line heights
5. **Spacing System:** Figma includes spacing primitives that are referenced throughout the system

---

## Future Considerations

1. **Naming Alignment** - Align codebase naming with Figma naming convention
2. **Additional Semantic Roles** - Can be added as needed (e.g., `info`, `neutral` variants)
3. **Theme Variations** - The structure supports light/dark theme variations
4. **Mode-Specific Mappings** - Different mappings for different contexts (e.g., print, high contrast)
5. **Extended Variations** - Additional variation levels can be added if needed
6. **Typography System** - Complete typography primitive extraction and mapping
7. **Spacing System** - Complete spacing primitive extraction and mapping

---

*Document generated from Figma file: Foundations (v2.0)*  
*Figma File Key: qBQbYOt7zOiO1I2bnhaTdj*  
*Last updated: Based on Figma variable structure analysis*
