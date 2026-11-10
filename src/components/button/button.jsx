import React from "react";

const variants = {
  primary: "bg-saddle text-espresso hover:bg-cream",

  outline:
    "border border-sand/50 bg-transparent text-cream hover:border-saddle hover:bg-saddle hover:text-espresso",
};

export default function Button({
  children,
  href,
  variant = "primary",
  icon = "↗",
  className = "",
  ...props
}) {
  const styles = `
    group inline-flex items-center justify-center gap-5
    rounded-md px-6 py-3.5
    text-sm font-semibold uppercase tracking-wide
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    ${variants[variant] || variants.primary}
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {content}
    </button>
  );
}
