import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "emergency" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: never;
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  href: string;
}

type Props = ButtonProps | LinkButtonProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-400",
  secondary:
    "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50 hover:border-brand-300 focus-visible:ring-brand-400",
  emergency:
    "bg-emergency-600 text-white hover:bg-emergency-700 focus-visible:ring-emergency-500",
  ghost:
    "text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-400",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

function getClasses(variant: Variant = "primary", size: Size = "md") {
  return `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]}`;
}

export default function Button(props: Props) {
  if ("href" in props && props.href !== undefined) {
    const { variant, size, href, children, ...rest } = props as LinkButtonProps;
    if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a href={href} className={getClasses(variant, size)} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={getClasses(variant, size)} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant, size, children, ...rest } = props as ButtonProps;
  return (
    <button className={getClasses(variant, size)} {...rest}>
      {children}
    </button>
  );
}
