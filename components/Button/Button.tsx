/**
 * Button Component
 * 
 * A fully accessible button component with all states, sizes, and appearances.
 * Built with WCAG 2.2 AAA compliance including proper ARIA labels, keyboard navigation,
 * and focus management.
 * 
 * Note: Inline styles are used intentionally for dynamic token-based styling.
 * This allows the component to use design tokens directly and adapt to different
 * states, sizes, and appearances without requiring external CSS files.
 * 
 * @module Button
 */

/* eslint-disable react/forbid-dom-props */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { tokens } from '../../tokens';
import { Layers, ArrowRight } from '../icons';

// Import CSS variables
import '../../tokens/css-variables.css';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonAppearance = 'primary' | 'secondary' | 'danger' | 'warning' | 'disabled';
export type ButtonState = 'rest' | 'hover' | 'focused' | 'pressed';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  
  /**
   * Visual appearance/variant of the button
   * @default 'primary'
   */
  appearance?: ButtonAppearance;
  
  /**
   * Content to display in the start slot (before label)
   * Can be a React node for custom icons/components
   */
  startIcon?: React.ReactNode;
  
  /**
   * Content to display in the end slot (after label)
   * Can be a React node for custom icons/components
   */
  endIcon?: React.ReactNode;
  
  /**
   * Whether to show the start slot (even if startIcon is not provided, shows default icon)
   * @default false
   */
  showStartSlot?: boolean;
  
  /**
   * Whether to show the end slot (even if endIcon is not provided, shows default icon)
   * @default false
   */
  showEndSlot?: boolean;
  
  /**
   * Button label text
   */
  children: React.ReactNode;
  
  /**
   * ARIA label for accessibility (required for icon-only buttons)
   */
  'aria-label'?: string;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
}

/**
 * Get button height based on size
 */
function getButtonHeight(size: ButtonSize): string {
  switch (size) {
    case 'sm':
      return tokens.size[40]; // 40px = 2.5rem
    case 'md':
      return tokens.size[48]; // 48px = 3rem
    case 'lg':
      return tokens.size[56]; // 56px = 3.5rem
    default:
      return tokens.size[48];
  }
}

/**
 * Get button padding based on size
 * Based on Figma: sm uses 12px (sm), md uses 16px (md), lg uses 16px (md)
 */
function getButtonPadding(size: ButtonSize): { x: string; y: string } {
  switch (size) {
    case 'sm':
      return { x: '0.75rem', y: '0' }; // 12px - using sm spacing but Figma shows 12px
    case 'md':
      return { x: tokens.spacing.md, y: '0' }; // 16px
    case 'lg':
      return { x: tokens.spacing.md, y: '0' }; // 16px
    default:
      return { x: tokens.spacing.md, y: '0' };
  }
}

/**
 * Get border radius based on size
 */
function getBorderRadius(size: ButtonSize): string {
  switch (size) {
    case 'sm':
    case 'md':
      return tokens.borderRadius.sm;
    case 'lg':
      return tokens.borderRadius.md;
    default:
      return tokens.borderRadius.sm;
  }
}

/**
 * Get font size based on button size
 */
function getFontSize(size: ButtonSize): string {
  switch (size) {
    case 'sm':
      return tokens.typography.fontSize.sm;
    case 'md':
      return tokens.typography.fontSize.base;
    case 'lg':
      return tokens.typography.fontSize.lg;
    default:
      return tokens.typography.fontSize.base;
  }
}

/**
 * Get icon size based on button size
 */
function getIconSize(size: ButtonSize): number {
  switch (size) {
    case 'sm':
      return 14;
    case 'md':
      return 16;
    case 'lg':
      return 18;
    default:
      return 16;
  }
}

/**
 * Get background color based on appearance and state
 */
function getBackgroundColor(
  appearance: ButtonAppearance,
  state: ButtonState
): string {
  if (appearance === 'disabled') {
    return tokens.color.bg.neutral.default;
  }

  switch (appearance) {
    case 'primary':
      if (state === 'hover') {
        // Hover state uses gradient/overlay - using same color for now
        return tokens.color.bg.neutral.dark;
      }
      if (state === 'pressed') {
        return tokens.color.bg.neutral.dark;
      }
      return tokens.color.bg.neutral.dark;
    
    case 'secondary':
      if (state === 'hover') {
        // Hover uses gradient - using base color
        return tokens.color.bg.secondary.default;
      }
      if (state === 'pressed') {
        return tokens.color.bg.secondary.default;
      }
      return tokens.color.bg.secondary.default;
    
    case 'danger':
      if (state === 'hover') {
        return tokens.color.bg.error.default;
      }
      if (state === 'pressed') {
        return tokens.color.bg.error.default;
      }
      return tokens.color.bg.error.default;
    
    case 'warning':
      if (state === 'hover') {
        return tokens.color.bg.warning.default;
      }
      if (state === 'pressed') {
        return tokens.color.bg.warning.default;
      }
      return tokens.color.bg.warning.default;
    
    default:
      return tokens.color.bg.neutral.default;
  }
}

/**
 * Get border color based on appearance and state
 * Figma uses 3px border with alpha.black.8 for outer border
 */
function getBorderColor(
  appearance: ButtonAppearance,
  state: ButtonState
): string {
  if (appearance === 'disabled') {
    return tokens.color.gray[500];
  }

  switch (appearance) {
    case 'primary':
      return tokens.color.gray[700];
    
    case 'secondary':
      if (state === 'pressed') {
        return tokens.color.purple[600];
      }
      return tokens.color.purple[300];
    
    case 'danger':
      if (state === 'pressed') {
        return tokens.color.red[600];
      }
      return tokens.color.red[300];
    
    case 'warning':
      if (state === 'pressed') {
        return tokens.color.orange[700];
      }
      return tokens.color.orange[400];
    
    default:
      return tokens.color.gray[300];
  }
}

/**
 * Get box shadow based on appearance, size, and state
 * Figma uses inset shadows for depth effect
 */
function getBoxShadow(
  appearance: ButtonAppearance,
  size: ButtonSize,
  state: ButtonState
): string {
  if (appearance === 'disabled') {
    return 'inset 0px -3px 5px 0px rgba(10, 9, 11, 0.6), inset 0px 3px 4px 0px rgba(255, 255, 255, 0.3)';
  }

  if (state === 'pressed') {
    if (appearance === 'primary') {
      return 'inset 0px -3px 2px 0px var(--color-gray-950), inset 0px 2px 4px 0px var(--color-gray-950)';
    }
    return 'inset 0px -2px 4px 0px var(--color-gray-950), inset 0px 2px 4px 0px var(--color-gray-950)';
  }

  if (state === 'hover') {
    if (size === 'lg') {
      return 'inset 0px -5px 5px 0px rgba(10, 9, 11, 0.8), inset 0px 3px 4px 0px rgba(255, 255, 255, 0.3)';
    }
    if (size === 'md') {
      return 'inset 0px -3px 6px 0px rgba(10, 9, 11, 0.8), inset 0px 3px 6px 0px rgba(255, 255, 255, 0.3)';
    }
    // sm
    return 'inset 0px -3px 5px 0px rgba(10, 9, 11, 0.6), inset 0px 3px 4px 0px rgba(255, 255, 255, 0.3)';
  }

  // rest or focused
  if (size === 'lg') {
    return 'inset 0px -5px 5px 0px rgba(10, 9, 11, 0.8), inset 0px 3px 4px 0px rgba(255, 255, 255, 0.3)';
  }
  if (size === 'md') {
    if (appearance === 'primary') {
      return 'inset 0px -3px 6px 0px rgba(10, 9, 11, 0.8), inset 0px 3px 6px 0px rgba(255, 255, 255, 0.3)';
    }
    return 'inset 0px -3px 6px 0px rgba(10, 9, 11, 0.5), inset 0px 3px 6px 0px rgba(255, 255, 255, 0.3)';
  }
  // sm
  return 'inset 0px -3px 5px 0px rgba(10, 9, 11, 0.6), inset 0px 3px 4px 0px rgba(255, 255, 255, 0.3)';
}

/**
 * Get text color - always white for all button appearances
 */
function getTextColor(): string {
  return '#ffffff'; // color.fg.white
}

export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  appearance = 'primary',
  startIcon,
  endIcon,
  showStartSlot = false,
  showEndSlot = false,
  children,
  disabled = false,
  'aria-label': ariaLabel,
  className,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onMouseDown,
  onMouseUp,
  onKeyDown,
  ...rest
}) => {
  const [state, setState] = useState<ButtonState>('rest');
  const [isFocused, setIsFocused] = useState(false);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Determine if button should be disabled
  const isDisabled = disabled || appearance === 'disabled';

  // Detect keyboard navigation at the document level
  // This ensures we catch Tab key presses even before the button receives focus
  useEffect(() => {
    const handleDocumentKeyDown = (e: KeyboardEvent) => {
      // Tab key indicates keyboard navigation
      if (e.key === 'Tab') {
        setIsKeyboardNavigation(true);
      }
    };

    // Listen for keyboard events on the document
    document.addEventListener('keydown', handleDocumentKeyDown);

    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, []);

  // Handle mouse enter (hover)
  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        setIsMouseOver(true);
        setState('hover');
        // Mouse interaction - disable keyboard navigation mode
        setIsKeyboardNavigation(false);
      }
      onMouseEnter?.(e);
    },
    [isDisabled, onMouseEnter]
  );

  // Handle mouse leave (back to rest)
  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        setIsMouseOver(false);
        setState('rest');
      }
      onMouseLeave?.(e);
    },
    [isDisabled, onMouseLeave]
  );

  // Handle focus
  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        setIsFocused(true);
        // If keyboard navigation is active, show focused state
        // Otherwise, it's likely mouse focus, so show hover state
        if (isKeyboardNavigation) {
          setState('focused');
        } else {
          // Mouse focus - show hover state instead
          setState('hover');
        }
      }
      onFocus?.(e);
    },
    [isDisabled, isKeyboardNavigation, onFocus]
  );

  // Handle blur
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLButtonElement>) => {
      setIsFocused(false);
      setState('rest');
      onBlur?.(e);
    },
    [onBlur]
  );

  // Handle mouse down (pressed)
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && e.button === 0) {
        setState('pressed');
        // Mouse interaction - disable keyboard navigation mode
        setIsKeyboardNavigation(false);
      }
      onMouseDown?.(e);
    },
    [isDisabled, onMouseDown]
  );

  // Handle mouse up (back to hover or rest)
  // Only set to hover if mouse is still over the button
  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        if (isFocused && isKeyboardNavigation) {
          setState('focused');
        } else if (isMouseOver) {
          // Mouse is still over the button - show hover state
          setState('hover');
        } else {
          // Mouse has left the button - show rest state
          setState('rest');
        }
      }
      onMouseUp?.(e);
    },
    [isDisabled, isFocused, isKeyboardNavigation, isMouseOver, onMouseUp]
  );

  // Handle keyboard interactions
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (isDisabled) return;

      // Enable keyboard navigation mode when any key is pressed
      // This includes Tab (for navigation), Space, Enter (for activation), Arrow keys, etc.
      setIsKeyboardNavigation(true);

      // Space or Enter to activate
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (e.key === ' ') {
          setState('pressed');
        }
        // Trigger click programmatically
        buttonRef.current?.click();
      }
      onKeyDown?.(e);
    },
    [isDisabled, onKeyDown]
  );

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (isDisabled) return;
      if (e.key === ' ') {
        // After space key up, return to focused state if still focused
        setState(isFocused && isKeyboardNavigation ? 'focused' : 'rest');
      }
    },
    [isDisabled, isFocused, isKeyboardNavigation]
  );

  // Get styles based on current state
  const height = getButtonHeight(size);
  const padding = getButtonPadding(size);
  const borderRadius = getBorderRadius(size);
  const fontSize = getFontSize(size);
  const iconSize = getIconSize(size);
  const bgColor = getBackgroundColor(appearance, state);
  const borderColor = getBorderColor(appearance, state);
  const textColor = getTextColor();
  const boxShadow = getBoxShadow(appearance, size, state);

  // Focus ring: 3px solid using secondary default color (WCAG 2.2 AAA requirement)
  // Only show focus ring when using keyboard navigation (not mouse clicks)
  // This follows WCAG 2.2 SC 2.4.7 (Focus Visible) - focus indicators should be visible
  // but can be hidden for mouse users to reduce visual clutter
  const focusRingColor = tokens.color.bg.secondary.default;
  const focusRingStyle = isFocused && !isDisabled && isKeyboardNavigation
    ? {
        outline: `3px solid ${focusRingColor}`,
        outlineOffset: '2px',
      }
    : {};

  // Outer border: 3px with alpha.black.8 (from Figma)
  const outerBorderColor = tokens.color.alpha.black[8];

  // Determine if slots should be shown
  const shouldShowStartSlot = showStartSlot || !!startIcon;
  const shouldShowEndSlot = showEndSlot || !!endIcon;

  // Get default icons if slots are shown but no custom icons provided
  const defaultStartIcon = shouldShowStartSlot && !startIcon ? (
    <Layers size={iconSize} />
  ) : null;
  const defaultEndIcon = shouldShowEndSlot && !endIcon ? (
    <ArrowRight size={iconSize} />
  ) : null;

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <button
      ref={buttonRef}
      type="button"
      disabled={isDisabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      className={className}
      // Inline styles are used intentionally for dynamic token-based styling
      style={{
        height,
        paddingLeft: padding.x,
        paddingRight: padding.x,
        paddingTop: padding.y,
        paddingBottom: padding.y,
        borderRadius,
        backgroundColor: bgColor,
        border: `3px solid ${outerBorderColor}`,
        // Inner border and shadow effects
        boxShadow: `${boxShadow}, inset 0 0 0 1px ${borderColor}`,
        color: textColor,
        fontSize,
        fontFamily: tokens.typography.fontFamily.cera,
        fontWeight: tokens.typography.fontWeight.regular,
        lineHeight: tokens.typography.lineHeight.tight,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: tokens.spacing.xs,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1,
        transition: 'all 0.2s ease',
        position: 'relative',
        // Remove default button styles
        margin: 0,
        appearance: 'none',
        WebkitAppearance: 'none',
        // Focus ring: 3px solid using secondary default color (WCAG 2.2 AAA)
        ...focusRingStyle,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...rest}
    >
      {/* Inner content wrapper for shadow effects */}
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <span
        // Inline styles are used intentionally for dynamic token-based styling
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: tokens.spacing.xs,
          width: '100%',
          height: '100%',
        }}
      >
        {/* Start Slot */}
        {shouldShowStartSlot && (
          // eslint-disable-next-line react/forbid-dom-props
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {startIcon || defaultStartIcon}
          </span>
        )}

        {/* Label */}
        <span>{children}</span>

        {/* End Slot */}
        {shouldShowEndSlot && (
          // eslint-disable-next-line react/forbid-dom-props
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {endIcon || defaultEndIcon}
          </span>
        )}
      </span>
    </button>
  );
};

