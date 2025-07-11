"use client";

import { useState, useEffect, useCallback } from "react";

interface UseAppLoaderOptions {
  minLoadTime?: number;
  assets?: string[];
  checkAssets?: boolean;
}

export function useAppLoader(options: UseAppLoaderOptions = {}) {
  const { minLoadTime = 2000, assets = [], checkAssets = false } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadedAssets, setLoadedAssets] = useState(0);

  const completeLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const startTime = Date.now();

    if (checkAssets && assets.length > 0) {
      // Load assets with progress tracking
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
            resolve();
          };
          img.onerror = () => {
            loaded++;
            const newProgress = (loaded / totalAssets) * 100;
            setProgress(newProgress);
            setLoadedAssets(loaded);
            resolve();
          };
          img.src = src;
        });
      };

      Promise.all(assets.map(loadAsset)).then(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);
        
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      });
    } else {
      // Simple time-based loading
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + (100 / (minLoadTime / 50));
          return Math.min(next, 100);
        });
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        setIsLoading(false);
      }, minLoadTime);

      return () => clearInterval(interval);
    }
  }, [minLoadTime, assets, checkAssets]);

  return {
    isLoading,
    progress,
    loadedAssets,
    totalAssets: assets.length,
    completeLoading,
  };
}

// Hook for page transitions
export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
  }, []);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return {
    isTransitioning,
    startTransition,
    endTransition,
  };
}
