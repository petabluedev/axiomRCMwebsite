import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "light" | "dark";

type AxiomLogoProps = {
  variant: Variant;
  showWordmark?: boolean;
  href?: string | null;
  className?: string;
  size?: number;
  linkProps?: Omit<ComponentProps<typeof Link>, "href" | "children">;
};

export function AxiomLogo({
  variant,
  showWordmark = true,
  href = "/",
  className = "",
  size = 36,
  linkProps,
}: AxiomLogoProps) {
  const src = variant === "dark" ? "/axiom-mark-white.svg" : "/axiom-mark.svg";

  const mark = (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="shrink-0"
      priority={href === "/"}
    />
  );

  const wordmark =
    showWordmark ? (
      <span
        className={`text-sm font-semibold tracking-tight ${
          variant === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        AxiomRCM
      </span>
    ) : null;

  const row = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark}
      {wordmark}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:ring-offset-2 rounded-lg pl-1"
        {...linkProps}
      >
        {row}
      </Link>
    );
  }

  return row;
}
