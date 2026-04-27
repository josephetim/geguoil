import Image from "next/image";
import { Droplets } from "lucide-react";

type BrandLogoProps = {
  hasLogo: boolean;
  size?: "sm" | "md";
  className?: string;
};

const sizeClasses = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
};

const imageSizes = {
  sm: 56,
  md: 76,
};

export function BrandLogo({
  hasLogo,
  size = "md",
  className = "",
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {hasLogo ? (
        <Image
          src="/logo.png"
          alt="Gegu Oil logo"
          width={imageSizes[size]}
          height={imageSizes[size]}
          className={`${sizeClasses[size]} w-auto object-contain`}
          priority
        />
      ) : (
        <>
          <div
            className={`flex ${sizeClasses[size]} items-center justify-center rounded-xl bg-orange-600/15 text-orange-500 ring-1 ring-orange-500/30`}
          >
            <Droplets className={size === "md" ? "h-8 w-8" : "h-6 w-6"} />
          </div>
          <span className="font-heading text-xl font-extrabold uppercase tracking-wide text-white">
            Gegu Oil
          </span>
        </>
      )}
    </div>
  );
}
