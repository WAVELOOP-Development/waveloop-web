"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  duration?: number;
  className?: string;
  showPercentage?: boolean;
  variant?: "default" | "gradient" | "stepped";
  onComplete?: () => void;
  progress?: number;
}

export function ProgressBar({
  duration = 3000,
  className,
  showPercentage = true,
  variant = "default",
  onComplete,
  progress: controlledProgress,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const currentProgress = controlledProgress ?? progress;

  useEffect(() => {
    if (controlledProgress !== undefined) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (duration / 50));
        if (next >= 100) {
          clearInterval(interval);
          onComplete?.();
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete, controlledProgress]);

  const getProgressBarStyle = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500";
      case "stepped":
        return currentProgress < 33 ? "bg-red-500" : currentProgress < 66 ? "bg-yellow-500" : "bg-green-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={cn(
            "h-full transition-all duration-150 ease-out rounded-full",
            getProgressBarStyle()
          )}
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
      {showPercentage && (
        <div className="text-center mt-2 text-sm text-gray-600">
          {Math.round(currentProgress)}%
        </div>
      )}
    </div>
  );
}

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  progress?: number;
  className?: string;
  showPercentage?: boolean;
  duration?: number;
  onComplete?: () => void;
}

export function CircularProgress({
  size = 120,
  strokeWidth = 8,
  progress: controlledProgress,
  className,
  showPercentage = true,
  duration = 3000,
  onComplete,
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const currentProgress = controlledProgress ?? progress;

  useEffect(() => {
    if (controlledProgress !== undefined) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (duration / 50));
        if (next >= 100) {
          clearInterval(interval);
          onComplete?.();
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete, controlledProgress]);

  const strokeDashoffset = circumference - (currentProgress / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-blue-500 transition-all duration-150 ease-out"
        />
      </svg>
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">
            {Math.round(currentProgress)}%
          </span>
        </div>
      )}
    </div>
  );
}
