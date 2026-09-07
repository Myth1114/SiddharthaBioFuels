const widthClasses = {
  default: "",
  wide: "container--wide",
  narrow: "container--narrow",
};

/**
 * Constrains page content to an approved maximum width.
 *
 * @param {object} props
 * @param {"div" | "main" | "aside"} [props.as="div"]
 * @param {"default" | "wide" | "narrow"} [props.width="default"]
 * @param {string} [props.className=""]
 * @param {React.ReactNode} props.children
 */
function Container({
  as: Component = "div",
  width = "default",
  className = "",
  children,
  ...restProps
}) {
  const widthClass = widthClasses[width] ?? widthClasses.default;

  const classes = ["container", widthClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...restProps}>
      {children}
    </Component>
  );
}

export default Container;
