import { useInteractiveStatus } from '@monkvision/common';
import { ButtonHTMLAttributes, forwardRef, MouseEvent, PropsWithChildren, useMemo } from 'react';
import { Icon } from '../../icons';
import { Spinner } from '../Spinner';
import { styles } from './Button.styles';
import { MonkButtonProps, useButtonStyle } from './hooks';

/**
 * Props that the Button component can accept.
 */
export type ButtonProps = MonkButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Basic button component, available with 4 variants. Accepts optional MonkButtonProps (see the `MonkButtonProps`
 * interface for more details), as well as HTMLButtonElement props that are passed through the underlying button
 * element. The ref is also forwarded to the button.
 *
 * @see MonkButtonProps
 */
export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      primaryColor,
      secondaryColor,
      variant,
      size,
      icon,
      loading,
      shade,
      preserveWidthOnLoading = false,
      style = {},
      disabled,
      onMouseUp,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      children,
      ...passThroughProps
    },
    ref,
  ) => {
    const isDisabled = !!disabled || !!loading;
    const handleMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (onMouseDown) {
        onMouseDown(event);
      }
    };
    const { status, eventHandlers } = useInteractiveStatus({
      disabled: isDisabled,
      componentHandlers: { onMouseUp, onMouseEnter, onMouseLeave, onMouseDown: handleMouseDown },
    });
    const {
      style: buttonStyle,
      iconStyle,
      spinnerStyle,
    } = useButtonStyle({
      primaryColor: primaryColor ?? (variant === 'outline' ? 'primary-xlight' : 'primary'),
      secondaryColor: secondaryColor ?? (variant === 'outline' ? 'surface-s1' : 'text-white'),
      variant: variant ?? 'fill',
      size: size ?? 'normal',
      shade: shade ?? 'dark',
      loading,
      preserveWidthOnLoading,
      status,
      hasChildren: !!children,
    });

    const content = useMemo(
      () => (
        <>
          {icon && (
            <Icon
              icon={icon}
              size={iconStyle.size}
              primaryColor={iconStyle.color}
              style={iconStyle.style}
            />
          )}
          {children}
        </>
      ),
      [icon, iconStyle, children],
    );
    const loadingContent = useMemo(
      () =>
        preserveWidthOnLoading ? (
          <div style={styles['fixedLoadingContainer']}>
            <div style={styles['loadingHiddenContent']}>{content}</div>
            <Spinner
              size={spinnerStyle.size}
              primaryColor={spinnerStyle.color}
              style={spinnerStyle.style}
            />
          </div>
        ) : (
          <Spinner
            size={spinnerStyle.size}
            primaryColor={spinnerStyle.color}
            style={spinnerStyle.style}
          />
        ),
      [preserveWidthOnLoading, content, spinnerStyle],
    );

    return (
      <button
        ref={ref}
        style={{ ...buttonStyle, ...style }}
        disabled={isDisabled}
        {...eventHandlers}
        {...passThroughProps}
        data-testid='monk-btn'
      >
        {loading ? loadingContent : content}
      </button>
    );
  },
);
