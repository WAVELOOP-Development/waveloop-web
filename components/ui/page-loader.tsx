"use client";

import { useState, useEffect } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ProgressBar, CircularProgress } from "@/components/ui/progress-indicator";
import { cn } from "@/lib/utils";

interface PageLoaderProps {
  variant?: "spinner" | "progress" | "circular" | "logo" | "minimal";
  duration?: number;
  onComplete?: () => void;
  className?: string;
  showLogo?: boolean;
  loadingText?: string;
}

export function PageLoader({
  variant = "logo",
  duration = 10000,
  onComplete,
  className,
  showLogo = true,
  loadingText = "Loading...",
}: PageLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  const renderLoader = () => {
    switch (variant) {
      case "spinner":
        return (
          <div className="flex flex-col items-center space-y-4">
            <LoadingSpinner size="xl" variant="default" />
            <p className="text-white/80 text-lg animate-pulse">{loadingText}</p>
          </div>
        );

      case "progress":
        return (
          <div className="flex flex-col items-center space-y-6 w-full max-w-md">
            {showLogo && (
              <div className="text-white text-3xl font-bold mb-4">WAVELOOP</div>
            )}
            <ProgressBar
              duration={duration}
              variant="gradient"
              className="w-full"
              onComplete={() => setIsVisible(false)}
            />
            <p className="text-white/80 text-sm">{loadingText}</p>
          </div>
        );

      case "circular":
        return (
          <div className="flex flex-col items-center space-y-6">
            {showLogo && (
              <div className="text-white text-3xl font-bold mb-4">WAVELOOP</div>
            )}
            <CircularProgress
              size={120}
              duration={duration}
              onComplete={() => setIsVisible(false)}
            />
            <p className="text-white/80 text-lg animate-pulse">{loadingText}</p>
          </div>
        );

      case "logo":
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
                <span className="text-white text-4xl font-bold">W</span>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-spin"></div>
            </div>
            <div className="text-white text-3xl font-bold tracking-wider">
              WAVELOOP
            </div>
            <LoadingSpinner variant="dots" className="text-white" />
            <p className="text-white/80 text-lg animate-pulse">{loadingText}</p>
          </div>
        );

      case "minimal":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="text-white/60 text-sm">{loadingText}</p>
          </div>
        );

      default:
        return (
          <LoadingSpinner size="xl" variant="logo" className="text-white" />
        );
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-[#000511]",
        "transition-opacity duration-500",
        className
      )}
    >
      <div className="text-center">
        {renderLoader()}
      </div>
    </div>
  );
}

// Component for asset loading with progress tracking
interface AssetLoaderProps {
  assets: string[];
  onComplete: () => void;
  onProgress?: (progress: number) => void;
  variant?: "progress" | "circular";
}

export function AssetLoader({
  assets,
  onComplete,
  onProgress,
  variant = "progress",
}: AssetLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadedAssets, setLoadedAssets] = useState(0);

  useEffect(() => {
    if (assets.length === 0) {
      onComplete();
      return;
    }

    let loaded = 0;
    const totalAssets = assets.length;

    const loadAsset = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          const newProgress = (loaded / totalAssets) * 100;
          setProgress(newProgress);
          setLoadedAssets(loaded);
          onProgress?.(newProgress);
          resolve();
        };
        img.onerror = () => {
          loaded++;
          const newProgress = (loaded / totalAssets) * 100;
          setProgress(newProgress);
          setLoadedAssets(loaded);
          onProgress?.(newProgress);
          resolve();
        };
        img.src = src;
      });
    };

    Promise.all(assets.map(loadAsset)).then(() => {
      setTimeout(onComplete, 500); // Small delay for smooth transition
    });
  }, [assets, onComplete, onProgress]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000511]">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md px-8">
        <div className="text-white text-3xl font-bold mb-4">WAVELOOP</div>
        
        {variant === "progress" ? (
          <ProgressBar
            progress={progress}
            variant="gradient"
            className="w-full"
            showPercentage={true}
          />
        ) : (
          <CircularProgress
            progress={progress}
            size={120}
            showPercentage={true}
          />
        )}
        
        <p className="text-white/80 text-sm text-center">
          Loading assets... ({loadedAssets}/{assets.length})
        </p>
      </div>
    </div>
  );
}
