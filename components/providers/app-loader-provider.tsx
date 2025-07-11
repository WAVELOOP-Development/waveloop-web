"use client";

import { PageLoader } from "@/components/ui/page-loader";
import { useAppLoader } from "@/hooks/useAppLoader";

interface AppLoaderProviderProps {
  children: React.ReactNode;
  assets?: string[];
  minLoadTime?: number;
  variant?: "spinner" | "progress" | "circular" | "logo" | "minimal";
}

export function AppLoaderProvider({
  children,
  assets = [],
  minLoadTime = 2000,
  variant = "logo",
}: AppLoaderProviderProps) {
  const { isLoading } = useAppLoader({
    minLoadTime,
    assets,
    checkAssets: assets.length > 0,
  });

  if (isLoading) {
    return (
      <PageLoader
        variant={variant}
        duration={minLoadTime}
        loadingText="Loading WAVELOOP..."
        className="bg-[#000511]"
      />
    );
  }

  return <>{children}</>;
}
