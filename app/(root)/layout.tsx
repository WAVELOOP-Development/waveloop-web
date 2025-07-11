import { Navbar1 } from "../components/navbar1";
import Footer from "../components/sections/footer";
import ScrollToTop from "../components/scroll-to-top";
import { AppLoaderProvider } from "@/components/providers/app-loader-provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <AppLoaderProvider
      variant="spinner"
      minLoadTime={2500}
      assets={[
        "/logo-primary-T.png",
        "/ai-2_1.mp4",
        "/intro_3_E.mp4",
        "/web-dev-2.mp4",
        "/mobile-dev_1.mp4"
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
