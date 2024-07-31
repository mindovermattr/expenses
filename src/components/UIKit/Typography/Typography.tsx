import "./Typograhy.scss";

type Tag = "div" | "span" | "h1" | "h2" | "p";
type Variant =
  | "title"
  | "subtitle"
  | "text"
  | "text-sm--regular"
  | "text-sm--accent";

type TypographyProps = {
  tag?: Tag;
  variant: Variant;
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({
  tag = "div",
  children,
  variant,
  className,
  ...props
}: TypographyProps) => {
  const Component = tag;

  return (
    <Component
      {...props}
      className={`${variant} ${className ? className : ""}`}
    >
      {children}
    </Component>
  );
};
