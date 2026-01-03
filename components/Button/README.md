# Button Component

A fully accessible button component built with WCAG 2.2 AAA compliance, matching the Figma design specifications.

## Features

- ✅ All states: Rest, Hover, Focused, Pressed, Disabled
- ✅ All sizes: Small (40px), Medium (48px), Large (56px)
- ✅ All appearances: Primary, Secondary, Danger, Warning, Disabled
- ✅ WCAG 2.2 AAA compliant:
  - Proper ARIA labels
  - Keyboard navigation (Space, Enter)
  - Focus ring (3px solid using secondary default color)
  - Screen reader support
- ✅ Icon slots: Start and end slots support React nodes for custom icons/components
- ✅ Token-based styling: Uses design tokens from the Calyxe Design System

## Usage

```tsx
import { Button } from 'calyxe-ds/components';
import { Layers, ArrowRight } from 'calyxe-ds/components/icons';

// Basic button
<Button>Click me</Button>

// With size and appearance
<Button size="lg" appearance="secondary">
  Submit
</Button>

// With icons
<Button
  startIcon={<Layers size={16} />}
  endIcon={<ArrowRight size={16} />}
>
  Continue
</Button>

// With custom React nodes in slots
<Button
  startIcon={<CustomIcon />}
  showEndSlot={true}
>
  Next Step
</Button>

// Disabled state
<Button appearance="disabled" disabled>
  Disabled Button
</Button>

// With ARIA label for accessibility
<Button aria-label="Close dialog">
  <CloseIcon />
</Button>
```

## Props

### ButtonProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `appearance` | `'primary' \| 'secondary' \| 'danger' \| 'warning' \| 'disabled'` | `'primary'` | Visual appearance/variant |
| `startIcon` | `React.ReactNode` | `undefined` | Content for start slot (before label) |
| `endIcon` | `React.ReactNode` | `undefined` | Content for end slot (after label) |
| `showStartSlot` | `boolean` | `false` | Show start slot even without custom icon (shows default) |
| `showEndSlot` | `boolean` | `false` | Show end slot even without custom icon (shows default) |
| `children` | `React.ReactNode` | **required** | Button label text |
| `aria-label` | `string` | `undefined` | ARIA label (required for icon-only buttons) |
| `disabled` | `boolean` | `false` | Disabled state |
| `...rest` | `ButtonHTMLAttributes` | - | All standard button HTML attributes |

## Token Mappings

The button component maps Figma variables to our design tokens as follows:

### Figma → Token Mapping

| Figma Variable | Token Path | Value |
|---------------|------------|-------|
| `color.bg.accent.default` | `tokens.color.bg.secondary.default` | Purple-500 |
| `color.bg.neutral.dark` | `tokens.color.bg.neutral.dark` | Gray-900 |
| `color.bg.error.default` | `tokens.color.bg.error.default` | Red-600 |
| `color.bg.warning.default` | `tokens.color.bg.warning.default` | Orange-600 |
| `color.bg.neutral.default` | `tokens.color.bg.neutral.default` | Gray-600 |
| `color.fg.white` | `#ffffff` | White |
| `color.alpha.black.8` | `tokens.color.alpha.black[8]` | 8% opacity black |
| `size.40` | `tokens.size[40]` | 2.5rem (40px) |
| `size.48` | `tokens.size[48]` | 3rem (48px) |
| `size.56` | `tokens.size[56]` | 3.5rem (56px) |
| `border.rounded.sm` | `tokens.borderRadius.sm` | 0.75rem (12px) |
| `border.rounded.md` | `tokens.borderRadius.md` | 1rem (16px) |
| `spacing.xs` | `tokens.spacing.xs` | 0.5rem (8px) |
| `spacing.md` | `tokens.spacing.md` | 1rem (16px) |
| `text.sm` | `tokens.typography.fontSize.sm` | 0.875rem (14px) |
| `text.md` | `tokens.typography.fontSize.base` | 1rem (16px) |
| `text.lg` | `tokens.typography.fontSize.lg` | 1.125rem (18px) |
| `font.family.cera` | `tokens.typography.fontFamily.cera` | 'Cera Pro', sans-serif |
| `font.weight.regular` | `tokens.typography.fontWeight.regular` | 400 |

## States

### Rest
Default state when button is not interacted with.

### Hover
Triggered when mouse enters button area. Includes gradient effects and shadow changes.

### Focused
Triggered when button receives keyboard focus. Shows 3px focus ring using secondary default color (WCAG 2.2 AAA requirement).

### Pressed
Triggered when button is clicked or Space/Enter is pressed. Shows pressed shadow effect.

### Disabled
Button is disabled and cannot be interacted with. Reduced opacity and not-allowed cursor.

## Sizes

- **Small (sm)**: 40px height, 12px horizontal padding, 14px font size, 12px border radius
- **Medium (md)**: 48px height, 16px horizontal padding, 16px font size, 12px border radius
- **Large (lg)**: 56px height, 16px horizontal padding, 18px font size, 16px border radius

## Appearances

- **Primary**: Dark neutral background (gray-900) with gray-700 border
- **Secondary**: Purple background (purple-500) with purple-300 border
- **Danger**: Red background (red-600) with red-300 border
- **Warning**: Orange background (orange-600) with orange-400 border
- **Disabled**: Gray background (gray-600) with gray-500 border

## Accessibility

The button component is built with WCAG 2.2 AAA compliance:

1. **ARIA Labels**: Automatically uses children text as aria-label, or accepts custom `aria-label` prop
2. **Keyboard Navigation**: 
   - Space and Enter keys activate the button
   - Tab key navigates to/from the button
   - Focus state is clearly visible with 3px focus ring
3. **Screen Readers**: Properly announces button state and label
4. **Focus Management**: Focus ring uses secondary default color (3px solid) as required

## Icon Slots

The button supports two icon slots:

1. **Start Slot**: Content before the label
2. **End Slot**: Content after the label

Both slots accept React nodes, allowing you to use:
- Icon components from `react-iconly`
- Custom icon components
- Any React element

If `showStartSlot` or `showEndSlot` is `true` but no custom icon is provided, default icons (Layers and ArrowRight) are shown.

## Examples

### Primary Button
```tsx
<Button appearance="primary" size="md">
  Primary Action
</Button>
```

### Secondary Button with Icons
```tsx
<Button
  appearance="secondary"
  size="lg"
  startIcon={<Layers size={18} />}
  endIcon={<ArrowRight size={18} />}
>
  Continue
</Button>
```

### Danger Button
```tsx
<Button appearance="danger" size="sm">
  Delete
</Button>
```

### Custom Icon in Slot
```tsx
<Button
  startIcon={<MyCustomIcon />}
  showEndSlot={true}
>
  Custom Action
</Button>
```

## Notes

- The button uses a 3px outer border with alpha.black.8 opacity
- Inner shadows create depth effects for different states
- All colors use OKLCH color space for better perceptual uniformity
- The component automatically handles state transitions and keyboard interactions

