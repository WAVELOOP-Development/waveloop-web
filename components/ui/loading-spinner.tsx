"use client";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "dots" | "pulse" | "wave" | "circular" | "logo";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  variant = "default",
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center space-x-2", className)}>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn("flex items-center justify-center space-x-1", className)}>
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse [animation-delay:0.4s]"></div>
        <div className="w-3 h-3 bg-blue-700 rounded-full animate-pulse [animation-delay:0.6s]"></div>
        <div className="w-3 h-3 bg-blue-800 rounded-full animate-pulse [animation-delay:0.8s]"></div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={cn("flex items-end justify-center space-x-1", className)}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-blue-500 rounded-t animate-pulse"
            style={{
              height: `${20 + Math.sin(i * 0.5) * 10}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
            }}
          ></div>
        ))}
      </div>
    );
  }

  if (variant === "circular") {
    return (
      <div className={cn("relative", sizeClasses[size], className)}>
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (variant === "logo") {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 flex items-center justify-center">
            <span className="text-blue-500 font-bold text-lg">W</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 animate-pulse">Loading...</div>
      </div>
    );
  }

  // Default spinner
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-4 border-gray-200 border-t-blue-500",
        sizeClasses[size],
        className
      )}
    ></div>
  );
}
