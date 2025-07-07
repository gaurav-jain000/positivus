import { cn } from "@/lib/utils.ts";
import type { ReactNode } from "react";
type Variant = "default" | "outline" | "secondary";
interface Props {
  variant?: Variant;
  className?: string;
  isIcon?: boolean;
  children: ReactNode;
}

export default function ThemeButton({
  variant = "default",
  isIcon = false,
  className,
  children,
}: Props) {
  const variantClasses = {
    default: "bg-stone-950 text-stone-50 border-transparent hover:bg-stone-700",
    outline: "border-current hover:border-stone-200 hover:bg-stone-200",
    secondary: "bg-stone-200 border-transparent hover:bg-stone-300",
  };
  return (
    <button
      className={cn(
        `rounded-[14px] border cursor-pointer duration-300 ${variantClasses[variant]}`,
        isIcon ? `aspect-square p-5` : "py-3 px-5 lg:py-4 lg:px-9",
        className
      )}
    >
      {children}
    </button>
  );
}
