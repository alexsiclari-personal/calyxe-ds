/**
 * Design System Preview Page
 * 
 * Comprehensive preview of all components and design tokens
 */

import React from 'react';
import { Button } from '../components/index.js';
import { Layers, ArrowRight } from '../components/icons/index.js';
import { tokens, colorPrimitives, spacingPrimitives, sizePrimitives, borderRadiusPrimitives, fontFamilies, fontSizes, fontWeights, lineHeights, backgroundColors, foregroundColors } from '../tokens/index.js';
import '../tokens/css-variables.css';

const Preview: React.FC = () => {
  const buttonSizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];
  const buttonAppearances: Array<'primary' | 'secondary' | 'danger' | 'warning' | 'disabled'> = [
    'primary',
    'secondary',
    'danger',
    'warning',
    'disabled',
  ];

  const colorFamilies = Object.keys(colorPrimitives) as Array<keyof typeof colorPrimitives>;
  const spacingSizes = Object.keys(spacingPrimitives) as Array<keyof typeof spacingPrimitives>;
  const sizeValues = (Object.keys(sizePrimitives) as string[]).map(k => Number(k) as keyof typeof sizePrimitives);
  const borderRadiusSizes = Object.keys(borderRadiusPrimitives) as Array<keyof typeof borderRadiusPrimitives>;

  return (
    <div
      style={{
        fontFamily: tokens.typography.fontFamily.cera,
        backgroundColor: '#ffffff',
        color: tokens.color.gray[950],
        minHeight: '100vh',
        padding: tokens.spacing.xl,
      }}
    >
      {/* Header */}
      <header
        style={{
          marginBottom: tokens.spacing['4xl'],
          borderBottom: `2px solid ${tokens.color.gray[200]}`,
          paddingBottom: tokens.spacing.xl,
        }}
      >
        <h1
          style={{
            fontSize: tokens.typography.fontSize['5xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            margin: 0,
            marginBottom: tokens.spacing.sm,
            color: tokens.color.gray[950],
          }}
        >
          Calyxe Design System
        </h1>
        <p
          style={{
            fontSize: tokens.typography.fontSize.lg,
            color: tokens.color.gray[600],
            margin: 0,
          }}
        >
          Version 2.0 - Component & Token Preview
        </p>
      </header>

      {/* Table of Contents */}
      <nav
        style={{
          marginBottom: tokens.spacing['4xl'],
          padding: tokens.spacing.lg,
          backgroundColor: tokens.color.gray[50],
          borderRadius: tokens.borderRadius.md,
        }}
      >
        <h2
          style={{
            fontSize: tokens.typography.fontSize['2xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            marginTop: 0,
            marginBottom: tokens.spacing.md,
          }}
        >
          Table of Contents
        </h2>
        <ul style={{ margin: 0, paddingLeft: tokens.spacing.xl }}>
          <li>
            <a href="#components" style={{ color: tokens.color.purple[500] }}>
              Components
            </a>
          </li>
          <li>
            <a href="#colors" style={{ color: tokens.color.purple[500] }}>
              Color Tokens
            </a>
          </li>
          <li>
            <a href="#spacing" style={{ color: tokens.color.purple[500] }}>
              Spacing Tokens
            </a>
          </li>
          <li>
            <a href="#sizes" style={{ color: tokens.color.purple[500] }}>
              Size Tokens
            </a>
          </li>
          <li>
            <a href="#border-radius" style={{ color: tokens.color.purple[500] }}>
              Border Radius Tokens
            </a>
          </li>
          <li>
            <a href="#typography" style={{ color: tokens.color.purple[500] }}>
              Typography Tokens
            </a>
          </li>
          <li>
            <a href="#semantic-colors" style={{ color: tokens.color.purple[500] }}>
              Semantic Color Tokens
            </a>
          </li>
        </ul>
      </nav>

      {/* Components Section */}
      <section id="components" style={{ marginBottom: tokens.spacing['4xl'] }}>
        <h2
          style={{
            fontSize: tokens.typography.fontSize['4xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            marginBottom: tokens.spacing.xl,
            paddingBottom: tokens.spacing.md,
            borderBottom: `2px solid ${tokens.color.gray[200]}`,
          }}
        >
          Components
        </h2>

        {/* Button Component */}
        <div style={{ marginBottom: tokens.spacing['3xl'] }}>
          <h3
            style={{
              fontSize: tokens.typography.fontSize['3xl'],
              fontFamily: tokens.typography.fontFamily.recoleta,
              fontWeight: tokens.typography.fontWeight.semibold,
              marginBottom: tokens.spacing.lg,
            }}
          >
            Button
          </h3>

          {/* Button Sizes */}
          <div style={{ marginBottom: tokens.spacing.xl }}>
            <h4
              style={{
                fontSize: tokens.typography.fontSize.xl,
                fontWeight: tokens.typography.fontWeight.bold,
                marginBottom: tokens.spacing.md,
                color: tokens.color.gray[700],
              }}
            >
              Sizes
            </h4>
            <div
              style={{
                display: 'flex',
                gap: tokens.spacing.md,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {buttonSizes.map((size) => (
                <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.xs }}>
                  <Button size={size} appearance="primary">
                    {size.toUpperCase()} Button
                  </Button>
                  <span
                    style={{
                      fontSize: tokens.typography.fontSize.xs,
                      color: tokens.color.gray[500],
                      textAlign: 'center',
                    }}
                  >
                    {size}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Button Appearances */}
          <div style={{ marginBottom: tokens.spacing.xl }}>
            <h4
              style={{
                fontSize: tokens.typography.fontSize.xl,
                fontWeight: tokens.typography.fontWeight.bold,
                marginBottom: tokens.spacing.md,
                color: tokens.color.gray[700],
              }}
            >
              Appearances
            </h4>
            <div
              style={{
                display: 'flex',
                gap: tokens.spacing.md,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {buttonAppearances.map((appearance) => (
                <div key={appearance} style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.xs }}>
                  <Button size="md" appearance={appearance}>
                    {appearance.charAt(0).toUpperCase() + appearance.slice(1)}
                  </Button>
                  <span
                    style={{
                      fontSize: tokens.typography.fontSize.xs,
                      color: tokens.color.gray[500],
                      textAlign: 'center',
                    }}
                  >
                    {appearance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Button with Icons */}
          <div style={{ marginBottom: tokens.spacing.xl }}>
            <h4
              style={{
                fontSize: tokens.typography.fontSize.xl,
                fontWeight: tokens.typography.fontWeight.bold,
                marginBottom: tokens.spacing.md,
                color: tokens.color.gray[700],
              }}
            >
              With Icons
            </h4>
            <div
              style={{
                display: 'flex',
                gap: tokens.spacing.md,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button size="md" appearance="primary" startIcon={<Layers size={16} />}>
                Start Icon
              </Button>
              <Button size="md" appearance="secondary" endIcon={<ArrowRight size={16} />}>
                End Icon
              </Button>
              <Button
                size="md"
                appearance="primary"
                startIcon={<Layers size={16} />}
                endIcon={<ArrowRight size={16} />}
              >
                Both Icons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Color Tokens Section */}
      <section id="colors" style={{ marginBottom: tokens.spacing['4xl'] }}>
        <h2
          style={{
            fontSize: tokens.typography.fontSize['4xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            marginBottom: tokens.spacing.xl,
            paddingBottom: tokens.spacing.md,
            borderBottom: `2px solid ${tokens.color.gray[200]}`,
          }}
        >
          Color Primitives
        </h2>

        {colorFamilies.map((family) => {
          const scales = (Object.keys(colorPrimitives[family]) as string[]).map(k => Number(k) as keyof typeof colorPrimitives[typeof family]);
          return (
            <div key={family} style={{ marginBottom: tokens.spacing['2xl'] }}>
              <h3
                style={{
                  fontSize: tokens.typography.fontSize['2xl'],
                  fontFamily: tokens.typography.fontFamily.recoleta,
                  fontWeight: tokens.typography.fontWeight.semibold,
                  marginBottom: tokens.spacing.lg,
                  textTransform: 'capitalize',
                }}
              >
                {family}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                  gap: tokens.spacing.sm,
                }}
              >
                {scales.map((scale) => {
                  const color = colorPrimitives[family][scale];
                  const scaleNum = typeof scale === 'string' ? parseInt(scale, 10) : scale;
                  const isLight = scaleNum < 500;
                  return (
                    <div
                      key={scale}
                      style={{
                        backgroundColor: color,
                        padding: tokens.spacing.md,
                        borderRadius: tokens.borderRadius.sm,
                        border: `1px solid ${tokens.color.gray[200]}`,
                        minHeight: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: tokens.typography.fontSize.sm,
                            fontWeight: tokens.typography.fontWeight.bold,
                            color: isLight ? tokens.color.gray[900] : '#ffffff',
                            marginBottom: tokens.spacing.xs,
                          }}
                        >
                          {family}-{scale}
                        </div>
                        <div
                          style={{
                            fontSize: tokens.typography.fontSize.xs,
                            color: isLight ? tokens.color.gray[700] : 'rgba(255, 255, 255, 0.8)',
                            fontFamily: 'monospace',
                            wordBreak: 'break-all',
                          }}
                        >
                          {color}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Spacing Tokens Section */}
      <section id="spacing" style={{ marginBottom: tokens.spacing['4xl'] }}>
        <h2
          style={{
            fontSize: tokens.typography.fontSize['4xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            marginBottom: tokens.spacing.xl,
            paddingBottom: tokens.spacing.md,
            borderBottom: `2px solid ${tokens.color.gray[200]}`,
          }}
        >
          Spacing Tokens
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: tokens.spacing.lg,
          }}
        >
          {spacingSizes.map((size) => {
            const value = spacingPrimitives[size];
            return (
              <div
                key={size}
                style={{
                  padding: tokens.spacing.md,
                  border: `1px solid ${tokens.color.gray[200]}`,
                  borderRadius: tokens.borderRadius.sm,
                }}
              >
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.sm,
                    fontWeight: tokens.typography.fontWeight.bold,
                    marginBottom: tokens.spacing.xs,
                  }}
                >
                  spacing.{size}
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.xs,
                    color: tokens.color.gray[600],
                    marginBottom: tokens.spacing.sm,
                    fontFamily: 'monospace',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    width: '100%',
                    height: value,
                    backgroundColor: tokens.color.purple[300],
                    borderRadius: tokens.borderRadius.xs,
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Size Tokens Section */}
      <section id="sizes" style={{ marginBottom: tokens.spacing['4xl'] }}>
        <h2
          style={{
            fontSize: tokens.typography.fontSize['4xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            marginBottom: tokens.spacing.xl,
            paddingBottom: tokens.spacing.md,
            borderBottom: `2px solid ${tokens.color.gray[200]}`,
          }}
        >
          Size Tokens
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: tokens.spacing.lg,
          }}
        >
          {sizeValues.map((size) => {
            const value = sizePrimitives[size];
            return (
              <div
                key={size}
                style={{
                  padding: tokens.spacing.md,
                  border: `1px solid ${tokens.color.gray[200]}`,
                  borderRadius: tokens.borderRadius.sm,
                }}
              >
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.sm,
                    fontWeight: tokens.typography.fontWeight.bold,
                    marginBottom: tokens.spacing.xs,
                  }}
                >
                  size.{size}
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.xs,
                    color: tokens.color.gray[600],
                    marginBottom: tokens.spacing.sm,
                    fontFamily: 'monospace',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    width: value,
                    height: value,
                    backgroundColor: tokens.color.orange[400],
                    borderRadius: tokens.borderRadius.xs,
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Border Radius Tokens Section */}
      <section id="border-radius" style={{ marginBottom: tokens.spacing['4xl'] }}>
        <h2
          style={{
            fontSize: tokens.typography.fontSize['4xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            marginBottom: tokens.spacing.xl,
            paddingBottom: tokens.spacing.md,
            borderBottom: `2px solid ${tokens.color.gray[200]}`,
          }}
        >
          Border Radius Tokens
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: tokens.spacing.lg,
          }}
        >
          {borderRadiusSizes.map((size) => {
            const value = borderRadiusPrimitives[size];
            return (
              <div
                key={size}
                style={{
                  padding: tokens.spacing.md,
                  border: `1px solid ${tokens.color.gray[200]}`,
                  borderRadius: tokens.borderRadius.sm,
                }}
              >
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.sm,
                    fontWeight: tokens.typography.fontWeight.bold,
                    marginBottom: tokens.spacing.xs,
                  }}
                >
                  borderRadius.{size}
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.xs,
                    color: tokens.color.gray[600],
                    marginBottom: tokens.spacing.sm,
                    fontFamily: 'monospace',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: tokens.color.cyan[500],
                    borderRadius: value,
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Typography Tokens Section */}
      <section id="typography" style={{ marginBottom: tokens.spacing['4xl'] }}>
        <h2
          style={{
            fontSize: tokens.typography.fontSize['4xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            marginBottom: tokens.spacing.xl,
            paddingBottom: tokens.spacing.md,
            borderBottom: `2px solid ${tokens.color.gray[200]}`,
          }}
        >
          Typography Tokens
        </h2>

        {/* Font Families */}
        <div style={{ marginBottom: tokens.spacing['2xl'] }}>
          <h3
            style={{
              fontSize: tokens.typography.fontSize['2xl'],
              fontFamily: tokens.typography.fontFamily.recoleta,
              fontWeight: tokens.typography.fontWeight.semibold,
              marginBottom: tokens.spacing.lg,
            }}
          >
            Font Families
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
            {Object.entries(fontFamilies).map(([key, value]) => (
              <div
                key={key}
                style={{
                  padding: tokens.spacing.md,
                  border: `1px solid ${tokens.color.gray[200]}`,
                  borderRadius: tokens.borderRadius.sm,
                }}
              >
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.sm,
                    fontWeight: tokens.typography.fontWeight.bold,
                    marginBottom: tokens.spacing.xs,
                  }}
                >
                  fontFamily.{key}
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.base,
                    fontFamily: value,
                    color: tokens.color.gray[900],
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.xs,
                    color: tokens.color.gray[600],
                    marginTop: tokens.spacing.xs,
                    fontFamily: 'monospace',
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Sizes */}
        <div style={{ marginBottom: tokens.spacing['2xl'] }}>
          <h3
            style={{
              fontSize: tokens.typography.fontSize['2xl'],
              fontFamily: tokens.typography.fontFamily.recoleta,
              fontWeight: tokens.typography.fontWeight.semibold,
              marginBottom: tokens.spacing.lg,
            }}
          >
            Font Sizes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
            {Object.entries(fontSizes).map(([key, value]) => (
              <div
                key={key}
                style={{
                  padding: tokens.spacing.md,
                  border: `1px solid ${tokens.color.gray[200]}`,
                  borderRadius: tokens.borderRadius.sm,
                }}
              >
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.sm,
                    fontWeight: tokens.typography.fontWeight.bold,
                    marginBottom: tokens.spacing.xs,
                  }}
                >
                  fontSize.{key}
                </div>
                <div
                  style={{
                    fontSize: value,
                    color: tokens.color.gray[900],
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.xs,
                    color: tokens.color.gray[600],
                    marginTop: tokens.spacing.xs,
                    fontFamily: 'monospace',
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Weights */}
        <div style={{ marginBottom: tokens.spacing['2xl'] }}>
          <h3
            style={{
              fontSize: tokens.typography.fontSize['2xl'],
              fontFamily: tokens.typography.fontFamily.recoleta,
              fontWeight: tokens.typography.fontWeight.semibold,
              marginBottom: tokens.spacing.lg,
            }}
          >
            Font Weights
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
            {Object.entries(fontWeights).map(([key, value]) => (
              <div
                key={key}
                style={{
                  padding: tokens.spacing.md,
                  border: `1px solid ${tokens.color.gray[200]}`,
                  borderRadius: tokens.borderRadius.sm,
                }}
              >
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.sm,
                    fontWeight: tokens.typography.fontWeight.bold,
                    marginBottom: tokens.spacing.xs,
                  }}
                >
                  fontWeight.{key}
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.base,
                    fontWeight: value,
                    color: tokens.color.gray[900],
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.xs,
                    color: tokens.color.gray[600],
                    marginTop: tokens.spacing.xs,
                    fontFamily: 'monospace',
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Line Heights */}
        <div style={{ marginBottom: tokens.spacing['2xl'] }}>
          <h3
            style={{
              fontSize: tokens.typography.fontSize['2xl'],
              fontFamily: tokens.typography.fontFamily.recoleta,
              fontWeight: tokens.typography.fontWeight.semibold,
              marginBottom: tokens.spacing.lg,
            }}
          >
            Line Heights
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
            {Object.entries(lineHeights).map(([key, value]) => (
              <div
                key={key}
                style={{
                  padding: tokens.spacing.md,
                  border: `1px solid ${tokens.color.gray[200]}`,
                  borderRadius: tokens.borderRadius.sm,
                }}
              >
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.sm,
                    fontWeight: tokens.typography.fontWeight.bold,
                    marginBottom: tokens.spacing.xs,
                  }}
                >
                  lineHeight.{key}
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.base,
                    lineHeight: value,
                    color: tokens.color.gray[900],
                  }}
                >
                  The quick brown fox jumps over the lazy dog. This is a longer line to demonstrate
                    line height.
                </div>
                <div
                  style={{
                    fontSize: tokens.typography.fontSize.xs,
                    color: tokens.color.gray[600],
                    marginTop: tokens.spacing.xs,
                    fontFamily: 'monospace',
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic Colors Section */}
      <section id="semantic-colors" style={{ marginBottom: tokens.spacing['4xl'] }}>
        <h2
          style={{
            fontSize: tokens.typography.fontSize['4xl'],
            fontFamily: tokens.typography.fontFamily.recoleta,
            fontWeight: tokens.typography.fontWeight.semibold,
            marginBottom: tokens.spacing.xl,
            paddingBottom: tokens.spacing.md,
            borderBottom: `2px solid ${tokens.color.gray[200]}`,
          }}
        >
          Semantic Color Tokens
        </h2>

        {/* Background Colors */}
        <div style={{ marginBottom: tokens.spacing['2xl'] }}>
          <h3
            style={{
              fontSize: tokens.typography.fontSize['2xl'],
              fontFamily: tokens.typography.fontFamily.recoleta,
              fontWeight: tokens.typography.fontWeight.semibold,
              marginBottom: tokens.spacing.lg,
            }}
          >
            Background Colors
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: tokens.spacing.md,
            }}
          >
            {Object.entries(backgroundColors).map(([semantic, variations]) => {
              if (typeof variations === 'string') {
                // Handle 'white' which is a string
                return (
                  <div
                    key={semantic}
                    style={{
                      backgroundColor: variations,
                      padding: tokens.spacing.md,
                      borderRadius: tokens.borderRadius.sm,
                      border: `1px solid ${tokens.color.gray[200]}`,
                      minHeight: '100px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      style={{
                        fontSize: tokens.typography.fontSize.sm,
                        fontWeight: tokens.typography.fontWeight.bold,
                        color: tokens.color.gray[900],
                      }}
                    >
                      bg.{semantic}
                    </div>
                    <div
                      style={{
                        fontSize: tokens.typography.fontSize.xs,
                        color: tokens.color.gray[600],
                        fontFamily: 'monospace',
                      }}
                    >
                      {variations}
                    </div>
                  </div>
                );
              }
              return Object.entries(variations).map(([variation, color]) => (
                <div
                  key={`${semantic}-${variation}`}
                  style={{
                    backgroundColor: color,
                    padding: tokens.spacing.md,
                    borderRadius: tokens.borderRadius.sm,
                    border: `1px solid ${tokens.color.gray[200]}`,
                    minHeight: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      fontSize: tokens.typography.fontSize.sm,
                      fontWeight: tokens.typography.fontWeight.bold,
                      color: variation === 'lighter' || variation === 'light' ? tokens.color.gray[900] : '#ffffff',
                    }}
                  >
                    bg.{semantic}.{variation}
                  </div>
                  <div
                    style={{
                      fontSize: tokens.typography.fontSize.xs,
                      color: variation === 'lighter' || variation === 'light' ? tokens.color.gray[600] : 'rgba(255, 255, 255, 0.8)',
                      fontFamily: 'monospace',
                      wordBreak: 'break-all',
                    }}
                  >
                    {color}
                  </div>
                </div>
              ));
            })}
          </div>
        </div>

        {/* Foreground Colors */}
        <div style={{ marginBottom: tokens.spacing['2xl'] }}>
          <h3
            style={{
              fontSize: tokens.typography.fontSize['2xl'],
              fontFamily: tokens.typography.fontFamily.recoleta,
              fontWeight: tokens.typography.fontWeight.semibold,
              marginBottom: tokens.spacing.lg,
            }}
          >
            Foreground Colors
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: tokens.spacing.md,
            }}
          >
            {Object.entries(foregroundColors).map(([semantic, variations]) =>
              Object.entries(variations).map(([variation, color]) => (
                <div
                  key={`${semantic}-${variation}`}
                  style={{
                    backgroundColor: tokens.color.gray[50],
                    padding: tokens.spacing.md,
                    borderRadius: tokens.borderRadius.sm,
                    border: `1px solid ${tokens.color.gray[200]}`,
                    minHeight: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      fontSize: tokens.typography.fontSize.sm,
                      fontWeight: tokens.typography.fontWeight.bold,
                      color: tokens.color.gray[900],
                    }}
                  >
                    fg.{semantic}.{variation}
                  </div>
                  <div
                    style={{
                      fontSize: tokens.typography.fontSize.lg,
                      color: color,
                      fontWeight: tokens.typography.fontWeight.bold,
                    }}
                  >
                    Sample Text
                  </div>
                  <div
                    style={{
                      fontSize: tokens.typography.fontSize.xs,
                      color: tokens.color.gray[600],
                      fontFamily: 'monospace',
                      wordBreak: 'break-all',
                    }}
                  >
                    {color}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: tokens.spacing['4xl'],
          paddingTop: tokens.spacing.xl,
          borderTop: `2px solid ${tokens.color.gray[200]}`,
          textAlign: 'center',
          color: tokens.color.gray[600],
        }}
      >
        <p style={{ margin: 0, fontSize: tokens.typography.fontSize.sm }}>
          Calyxe Design System v2.0 - Built with React & TypeScript
        </p>
      </footer>
    </div>
  );
};

export default Preview;

