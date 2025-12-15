import Link from "next/link";
import React from "react";

type CTAButtonProps = {
  buttonname: string;
  buttonlink?: string;
  target?: "_self" | "_blank";
  variant?: "primary" | "secondary"; // New prop
};

export default function CTAButton({
  buttonname,
  buttonlink = "#",
  target = "_self",
  variant = "primary",
}: CTAButtonProps) {
  const baseStyles = "px-8 py-2 font-semibold rounded transition";

  const variants = {
    primary: "bg-white text-black",
    secondary: "border border-white text-white",
  };

  return (
    <a
      target={target}
      href={buttonlink}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {buttonname}
    </a>
  );
}
