# Loading System Documentation

## Overview
I've created a comprehensive loading system for your WAVELOOP web app with multiple components and options:

## Components Created

### 1. LoadingSpinner (`/components/ui/loading-spinner.tsx`)
A versatile spinner component with multiple variants:
- **default**: Classic spinning circle
- **dots**: Bouncing dots animation
- **pulse**: Pulsing dots with delays
- **wave**: Wave-like animation
- **circular**: Circular progress ring
- **logo**: WAVELOOP branded spinner

**Usage:**
```tsx
import { LoadingSpinner } from "@/components/ui/loading-spinner";

<LoadingSpinner variant="logo" size="lg" />
```

### 2. Progress Indicators (`/components/ui/progress-indicator.tsx`)
Progress bars and circular progress indicators:
- **ProgressBar**: Linear progress with gradient/stepped variants
- **CircularProgress**: Circular progress indicator

**Usage:**
```tsx
import { ProgressBar, CircularProgress } from "@/components/ui/progress-indicator";

<ProgressBar variant="gradient" duration={3000} />
<CircularProgress size={120} progress={75} />
```

### 3. PageLoader (`/components/ui/page-loader.tsx`)
Full-page loading overlay with multiple variants:
- **spinner**: Simple spinner with text
- **progress**: Progress bar with logo
- **circular**: Circular progress with logo
- **logo**: Branded WAVELOOP loader (recommended)
- **minimal**: Minimal spinner

**Usage:**
```tsx
import { PageLoader } from "@/components/ui/page-loader";

<PageLoader 
  variant="logo" 
  duration={3000} 
  loadingText="Loading WAVELOOP..." 
/>
```

### 4. Asset Loader
Tracks actual asset loading progress:
```tsx
<AssetLoader 
  assets={['/image1.jpg', '/image2.jpg']} 
  onComplete={() => setLoading(false)}
  variant="progress"
/>
```

### 5. App Loader Hook (`/hooks/useAppLoader.ts`)
React hook for managing app loading state:
```tsx
import { useAppLoader } from "@/hooks/useAppLoader";

const { isLoading, progress, completeLoading } = useAppLoader({
  minLoadTime: 2000,
  assets: ['/logo.png', '/hero-bg.jpg'],
  checkAssets: true
});
```

### 6. App Loader Provider (`/components/providers/app-loader-provider.tsx`)
Wrapper component for app-wide loading:
```tsx
import { AppLoaderProvider } from "@/components/providers/app-loader-provider";

<AppLoaderProvider 
  assets={['/images/hero.jpg']} 
  minLoadTime={2000}
  variant="logo"
>
  <YourApp />
</AppLoaderProvider>
```

## Implementation Options

### Option 1: Using the Updated loading.tsx (Already Done)
Your existing `/app/(root)/loading.tsx` has been updated to use the new PageLoader component.

### Option 2: Add to Root Layout
```tsx
// In your app/layout.tsx or app/(root)/layout.tsx
import { AppLoaderProvider } from "@/components/providers/app-loader-provider";

export default function Layout({ children }) {
  return (
    <AppLoaderProvider 
      variant="logo" 
      minLoadTime={2000}
      assets={[
        '/logo-primary-T.png',
        '/hero-bg.jpg',
        // Add other critical assets
      ]}
    >
      <main className="bg-[#000511]">
        <Navbar1 />
        {children}
        <Footer />
        <ScrollToTop />
      </main>
    </AppLoaderProvider>
  );
}
```

### Option 3: Custom Implementation
```tsx
"use client";

import { useState, useEffect } from "react";
import { PageLoader } from "@/components/ui/page-loader";

export default function YourPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader variant="logo" loadingText="Loading WAVELOOP..." />;
  }

  return <YourPageContent />;
}
```

## Recommended Setup

For your WAVELOOP app, I recommend:

1. **Use the logo variant** - it's branded and professional
2. **Set minLoadTime to 2-3 seconds** - enough to show the brand
3. **Add critical assets** to the assets array for real progress tracking
4. **Use the AppLoaderProvider** in your root layout for app-wide loading

## Custom Animations
Added custom CSS animations in `globals.css`:
- Wave animations
- Fade in effects
- Shimmer effects
- Glow animations

## Key Features
- ✅ Multiple loading variants
- ✅ Real asset loading progress tracking
- ✅ Customizable duration and styling
- ✅ WAVELOOP branding integration
- ✅ Smooth transitions
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Accessible
