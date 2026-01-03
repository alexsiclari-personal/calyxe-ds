# Design System Preview

A comprehensive preview page showcasing all components and design tokens in the Calyxe Design System.

## Quick Start

Run the preview development server:

```bash
npm run preview
```

This will:
- Start a Vite dev server on `http://localhost:3000`
- Automatically open the preview in your browser
- Enable hot module replacement for live updates

## What's Included

The preview page displays:

### Components
- **Button Component**
  - All sizes: Small (40px), Medium (48px), Large (56px)
  - All appearances: Primary, Secondary, Danger, Warning, Disabled
  - Icon variations: Start icon, end icon, both icons

### Design Tokens

#### Color Primitives
- Complete color scales for all families:
  - Gray (neutral/primary)
  - Purple (secondary)
  - Orange (warning)
  - Red (error/danger)
  - Green (success)
  - Blue (informational)
  - Cyan (highlight)
- Each color displayed with:
  - Visual swatch
  - Token name (e.g., `gray-500`)
  - OKLCH color value

#### Spacing Tokens
- All spacing values: xs, sm, md, lg, xl, 2xl, 3xl, 4xl
- Visual representation showing actual spacing dimensions

#### Size Tokens
- All size values: 4, 8, 12, 16, 24, 32, 40, 48, 56, 64 (in rem)
- Visual representation showing actual size dimensions

#### Border Radius Tokens
- All border radius values: none, 2xs, xs, sm, md, lg, xl, full
- Visual representation showing rounded corners

#### Typography Tokens
- **Font Families**: Cera Pro, Manrope, Recoleta, Gratimo Classic, Untitled Sans
  - Sample text in each font family
- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
  - Sample text at each size
- **Font Weights**: regular, medium, semibold, bold
  - Sample text at each weight
- **Line Heights**: none, tight, normal
  - Sample text demonstrating line height

#### Semantic Color Tokens
- **Background Colors**: All semantic roles (neutral, white, primary, secondary, highlight, success, warning, error) with all variations (lighter, light, default, dark, darker)
- **Foreground Colors**: All semantic roles with all variations
  - Sample text showing foreground color usage

## File Structure

```
preview/
├── Preview.tsx      # Main preview component
├── app.tsx          # React app entry point
├── index.html       # HTML entry point
└── README.md        # Preview documentation
```

## Building for Production

Build a static version of the preview:

```bash
npm run preview:build
```

The built files will be in the `dist-preview` directory and can be deployed to any static hosting service.

## Features

- **Comprehensive Coverage**: Shows all components and tokens
- **Visual Examples**: Every token is displayed with a visual representation
- **Interactive**: Components are fully functional and can be interacted with
- **Responsive**: Works on all screen sizes
- **Navigation**: Table of contents with anchor links for easy navigation
- **Token Values**: All token values are displayed alongside visual examples

## Usage

The preview is perfect for:
- **Design Review**: Review all design tokens and components in one place
- **Development Reference**: Quick reference for available tokens and components
- **Documentation**: Visual documentation of the design system
- **Testing**: Test components and verify token usage
- **Onboarding**: Help new team members understand the design system

## Notes

- The preview uses the design tokens directly from the `tokens` directory
- All components are imported from the `components` directory
- CSS variables are automatically loaded from `tokens/css-variables.css`
- The preview is fully responsive and uses the design system's typography and spacing
- All colors use OKLCH color space for better perceptual uniformity

