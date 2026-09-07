import "./Button.css";

const variantClasses = {
  primary: "button--primary",
  secondary: "button--secondary",
  outline: "button--outline",
};

const sizeClasses = {
  small: "button--small",
  default: "",
  large: "button--large",
};

/**
 * Renders a consistent action as a button, anchor or another component.
 *
 * @param {object} props
 * @param {React.ElementType} [props.as="button"]
 * @param {"primary" | "secondary" | "outline"} [props.variant="primary"]
 * @param {"small" | "default" | "large"} [props.size="default"]
 * @param {boolean} [props.fullWidth=false]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className=""]
 * @param {React.ReactNode} props.children
 */
function Button({
  as: Component = "button",
  variant = "primary",
  size = "default",
  fullWidth = false,
  disabled = false,
  className = "",
  children,
  onClick,
  type = "button",
  ...restProps
}) {
  const variantClass = variantClasses[variant] ?? variantClasses.primary;

  const sizeClass = sizeClasses[size] ?? sizeClasses.default;

  const classes = [
    "button",
    variantClass,
    sizeClass,
    fullWidth ? "button--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isNativeButton = Component === "button";

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  }

  const accessibilityProps = isNativeButton
    ? {
        type,
        disabled,
      }
    : {
        "aria-disabled": disabled || undefined,
        tabIndex: disabled ? -1 : undefined,
      };

  return (
    <Component
      className={classes}
      onClick={handleClick}
      {...accessibilityProps}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Button;
