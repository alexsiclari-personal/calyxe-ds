# Design System Preview

This directory contains a comprehensive preview page for the Calyxe Design System, showcasing all components and design tokens.

## Running the Preview

### Development Server

Start the preview development server:

```bash
npm run preview
```

This will:
- Start a Vite dev server on `http://localhost:3000`
- Automatically open the preview in your browser
- Enable hot module replacement for live updates

### Building for Production

Build a static version of the preview:

```bash
npm run preview:build
```

The built files will be in the `dist-preview` directory.

## Preview Contents

The preview page includes:

### Components
- **Button**: All sizes (sm, md, lg), appearances (primary, secondary, danger, warning, disabled), and icon variations

### Design Tokens

#### Color Primitives
- All color families (gray, purple, orange, red, green, blue, cyan)
- Complete color scales (50-950)
- Visual color swatches with values

#### Spacing Tokens
- All spacing values (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- Visual representation of spacing values

#### Size Tokens
- All size values (4, 8, 12, 16, 24, 32, 40, 48, 56, 64)
- Visual representation of size values

#### Border Radius Tokens
- All border radius values (none, 2xs, xs, sm, md, lg, xl, full)
- Visual representation of border radius

#### Typography Tokens
- Font families with sample text
- Font sizes with sample text
- Font weights with sample text
- Line heights with sample text

#### Semantic Color Tokens
- Background colors (all semantic roles and variations)
- Foreground colors (all semantic roles and variations)

## File Structure

```
preview/
├── Preview.tsx      # Main preview component
├── app.tsx          # React app entry point
├── index.html       # HTML entry point
└── README.md        # This file
```

## Notes

- The preview uses the design tokens directly from the `tokens` directory
- All components are imported from the `components` directory
- CSS variables are automatically loaded from `tokens/css-variables.css`
- The preview is fully responsive and uses the design system's typography and spacing

