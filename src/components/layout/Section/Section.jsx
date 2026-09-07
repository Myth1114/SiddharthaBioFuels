const toneClasses = {
  paper: "section--paper",
  surface: "section--surface",
  dark: "section--dark",
};

const spacingClasses = {
  default: "",
  compact: "section--compact",
};

/**
 * Creates a semantic page section using approved tone and spacing variants.
 *
 * @param {object} props
 * @param {"section" | "div" | "aside"} [props.as="section"]
 * @param {"paper" | "surface" | "dark"} [props.tone="paper"]
 * @param {"default" | "compact"} [props.spacing="default"]
 * @param {string} [props.className=""]
 * @param {React.ReactNode} props.children
 */
function Section({
  as: Component = "section",
  tone = "paper",
  spacing = "default",
  className = "",
  children,
  ...restProps
}) {
  const toneClass = toneClasses[tone] ?? toneClasses.paper;
  const spacingClass = spacingClasses[spacing] ?? spacingClasses.default;

  const classes = ["section", toneClass, spacingClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...restProps}>
      {children}
    </Component>
  );
}

export default Section;
