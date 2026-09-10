"use client";

import Link from "next/link";
import clsx from "clsx";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-blue-600 text-white hover:scale-105 hover:bg-blue-500"
          : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
      )}
    >
      {children}
    </Link>
  );
}