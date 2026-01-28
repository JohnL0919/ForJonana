import { ReactNode } from "react";
import { CornerDecorations } from "./CornerDecorations";

interface CardProps {
  children: ReactNode;
  className?: string;
  showCornerDecorations?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-sm p-4",
  md: "max-w-md p-6 sm:p-8",
  lg: "max-w-lg p-6 sm:p-8 md:p-12",
  xl: "max-w-5xl p-4 sm:p-6",
};

export function Card({ 
  children, 
  className = "", 
  showCornerDecorations = false,
  size = "md" 
}: CardProps) {
  return (
    <div className={`
      relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl 
      border border-lime-200 transition-all duration-300 ease-in-out
      ${sizeClasses[size]} w-full mx-2 sm:mx-4 ${className}
    `}>
      {children}
      {showCornerDecorations && <CornerDecorations />}
    </div>
  );
}